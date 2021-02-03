import React, { useState, ReactText, useCallback, useEffect, useMemo } from 'react';
import {
  Box,
  Flex,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Center,
  Select,
  NumberInput,
  NumberInputField,
  InputLeftElement,
  InputGroup,
  Tooltip,
  Spinner,
  useDisclosure,
  StackDivider,
} from '@chakra-ui/react';
import {
  TradeWrapper,
  TradeWrapperProps,
  useFileUpload,
  fileTypes,
  SubmitButton,
  TransactionStatus,
  useAjaxToast,
  FormInput,
} from '../components';
import { AiOutlinePlus } from 'react-icons/ai';
import { banks, formatAmount, identificationTypes } from '../../../utils';
import QRCode from 'qrcode.react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import {
  sellCryptoRequest,
  CurrencySymbols,
  AppState,
  ReceivePaymentMethods,
  MakePaymentMethods,
  verifyBankAccountRequest,
  idVerificationRequest,
} from '../../../redux';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik';
import * as yup from 'yup';

declare interface SellProps extends TradeWrapperProps {
  amount: string;
  coinValue: string;
  coin: CurrencySymbols;
}

export enum Progress {
  verifyId = 'id-verification',
  debitFrom = 'debit-from',
  payment = 'payment',
  verifyPayment = 'verify-payment',
  generateQr = 'generate-qr',
}
const Sell: React.FC<SellProps> = ({
  onClose,
  amount,
  coin,
  heading,
  coinValue,
}): JSX.Element => {
  const [progress, setProgress] = useState<Progress>(Progress.verifyId);
  const { success, error } = useSelector((state: AppState) => {
    const {
      success: { sellCrypto: success },
      errors: { sellCrypto: error },
    } = state.ajaxStatuses;
    return { success, error };
  });
  return (
    <Box as="section">
      {!error && !success && (
        <TradeWrapper heading={heading} onClose={onClose}>
          {progress === Progress.verifyId && (
            <IdentityVerification action={() => setProgress(Progress.debitFrom)} />
          )}
          {progress === Progress.debitFrom && (
            <DebitFrom
              coin={coin}
              amount={amount}
              coinValue={coinValue}
              action={() => setProgress(Progress.generateQr)}
            />
          )}
          {progress === Progress.verifyPayment && (
            <Center flex={1}>
              <Text className="color-gray-text">Awaiting payment response...</Text>
            </Center>
          )}
          {progress === Progress.generateQr && <GenerateQrCode coin={coin} />}
        </TradeWrapper>
      )}
      {(success || error) && (
        <TransactionStatus
          status={success ? 'success' : 'failure'}
          statusTitle={success ? 'Trade Successful' : 'Trade unsuccessful'}
          statusMessage={success ? (success.message as string) : error.error}
          linkTitle="Back to dashboard"
          linkValue="/dashboard"
        />
      )}
    </Box>
  );
};

declare interface DebitFromProps {
  coin: CurrencySymbols;
  amount: string;
  coinValue: string;
  action: () => void;
}

declare interface BankDetailsProp {
  bank: string;
  accountNo: string;
  accountName: string;
  amount?: string;
  id: string;
}

const DebitFrom: React.FC<DebitFromProps> = ({
  coin,
  action,
  amount,
  coinValue,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [creditWallet, setCreditWallet] = useState<ReactText>(
    ReceivePaymentMethods['In app wallet'],
  );
  const [sellFrom, setSellFrom] = useState<string>(
    MakePaymentMethods['in-app wallet'],
  );
  const [splitPayment, setSplitPayment] = useState<boolean>(false);
  const toast = useAjaxToast();
  const [bankDetails, setBankDetails] = useState<BankDetailsProp[]>([
    { bank: '', accountNo: '', accountName: '', id: uuidv4() },
  ]);
  const calculateUnsplitAmount = useMemo(() => {
    const splitAmount = bankDetails
      .map((details) => {
        if (details.amount) return +details.amount;
        return 0;
      })
      .reduce((total, amount) => total + amount, 0);
    return +amount - splitAmount;
  }, [bankDetails]);
  const addBankDetails = useCallback(() => {
    // if (
    //   !bankDetails[bankDetails.length - 1].accountName ||
    //   !bankDetails[bankDetails.length - 1].amount
    // )
    //   return;
    setBankDetails((prev) => [
      ...prev,
      { bank: '', accountNo: '', accountName: '', id: uuidv4() },
    ]);
  }, [bankDetails]);
  const deleteBankDetails = useCallback((id: string) => {
    setBankDetails((prev) => {
      return prev.filter((feature) => feature.id !== id);
    });
  }, []);
  const handleBankInfoChange = useCallback(
    (
      value: string,
      fieldName: 'accountNo' | 'bank' | 'accountName' | 'amount',
      index: number,
    ) => {
      const oldState = [...bankDetails];
      if (fieldName === 'amount') {
        if (+value > calculateUnsplitAmount) return;
      }
      oldState[index][fieldName] = value;
      setBankDetails(oldState);
    },
    [bankDetails, calculateUnsplitAmount],
  );
  const { token, success, error, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: { sellCrypto: success },
      errors: { sellCrypto: error },
    } = state.ajaxStatuses;
    const { sellCrypto: loading } = state.loadingIndicators;
    return { token, success, error, loading };
  });
  const sellCrypto = () => {
    if (sellFrom === ReceivePaymentMethods['External wallet']) {
      return action();
    }
    const bankInfo: any = {
      recipient_banks: [],
      recipient_account_nos: [],
      split_amounts: [],
    };
    bankDetails.forEach((details) => {
      bankInfo.recipient_banks = [...bankInfo.recipient_banks, details.bank];
      bankInfo.recipient_account_nos = [
        ...bankInfo.recipient_account_nos,
        details.accountNo,
      ];
      bankInfo.split_amounts = [...bankInfo.split_amounts, details.amount];
    });
    console.log('bankInfo', bankInfo);
    if (bankInfo.split_amounts[0] === undefined) bankInfo.split_amounts = [amount];
    dispatch(
      sellCryptoRequest({
        token,
        data: {
          amount: coinValue,
          naira_equivalent: amount,
          currency: coin,
          ...bankInfo,
          split_payment: splitPayment,
          receive_pay_method: creditWallet as ReceivePaymentMethods,
          make_pay_method: sellFrom as MakePaymentMethods,
        },
      }),
    );
  };
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success) {
      toast({
        status: 'success',
        description: success.message,
      });
    }
  }, [success, error]);
  const validateAllFields =
    sellFrom &&
    (sellFrom === ReceivePaymentMethods['External wallet'] ||
      creditWallet === ReceivePaymentMethods['In app wallet'] ||
      (creditWallet &&
        bankDetails.every((details) => details.accountNo && details.bank)));
  return (
    <Flex
      flex={1}
      direction="column"
      width="full"
      justifyContent="space-between"
      minHeight="380px">
      <Box>
        <Box mb={5}>
          <Text fontSize="16px" className="color-gray-text font-weight-500">
            Sell {coin} from{' '}
          </Text>
          <Select
            value={sellFrom}
            onChange={(event) => setSellFrom(event.target.value)}
            bg="gray.300"
            fontSize="16px"
            lineHeight="24px"
            focusBorderColor="none"
            border="none"
            placeholder="Select option"
            className="color-dark">
            <option value={ReceivePaymentMethods['In app wallet']}>
              Your cryptojumbo {coin} wallet
            </option>
            <option value={ReceivePaymentMethods['External wallet']}>
              Another {coin} wallet
            </option>
          </Select>
        </Box>
        <Box mb={5}>
          <Text
            fontSize="16px"
            lineHeight="24px"
            className="color-gray-text font-weight-500">
            Receive Payment to{' '}
          </Text>
          <RadioGroup onChange={setCreditWallet} value={creditWallet}>
            <Stack spacing={2} direction="row">
              <Box
                py={1}
                px={2}
                borderWidth={1}
                borderColor="transparent"
                className={`border-radius-xs payment-method ${
                  creditWallet === ReceivePaymentMethods['In app wallet']
                    ? 'checked'
                    : ''
                }`}>
                <Radio
                  colorScheme="orange"
                  value={ReceivePaymentMethods['In app wallet']}>
                  <Text
                    fontSize="14px"
                    lineHeight="17px"
                    className={`font-weight-500 ${
                      creditWallet === ReceivePaymentMethods['In app wallet']
                        ? 'color-dark'
                        : 'color-gray-text'
                    }`}>
                    CryptoJumbo NGN Wallet
                  </Text>
                </Radio>
              </Box>
              <Box
                py={1}
                px={2}
                borderWidth={1}
                borderColor="transparent"
                className={`border-radius-xs payment-method ${
                  creditWallet === ReceivePaymentMethods['External wallet']
                    ? 'checked'
                    : ''
                }`}>
                <Radio
                  colorScheme="orange"
                  value={ReceivePaymentMethods['External wallet']}>
                  <Box
                    className={`font-weight-500 ${
                      creditWallet === ReceivePaymentMethods['External wallet']
                        ? 'color-dark'
                        : 'color-gray-text'
                    }`}>
                    <Text fontSize="14px" lineHeight="17px">
                      Local NGN account
                    </Text>
                  </Box>
                </Radio>
              </Box>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <Box mb={10}>
        <Stack
          direction="column"
          spacing={'1px'}
          divider={<StackDivider borderColor="gray.500" />}>
          {creditWallet === ReceivePaymentMethods['External wallet'] &&
            bankDetails.map((details, index) => (
              <BankInfo
                key={details.id}
                values={details}
                index={index}
                handleBankInfoChange={handleBankInfoChange}
                deleteBankDetails={deleteBankDetails}
                splitPayment={splitPayment}
              />
            ))}
        </Stack>
        <Stack align="center" direction="row" spacing={2} mt={5}>
          <Box>
            {splitPayment && bankDetails.length > 1 && (
              <Text fontSize="0.75em" className="color-gray-text font-weight-500">
                {formatAmount(calculateUnsplitAmount, 'NGN')} Remaining
              </Text>
            )}
          </Box>
          <Flex direction="column" align="flex-end" flex={1}>
            {creditWallet === ReceivePaymentMethods['External wallet'] &&
              calculateUnsplitAmount >= 1 && (
                <Box
                  onClick={
                    !splitPayment ? () => setSplitPayment(true) : addBankDetails
                  }
                  fontSize="0.75em"
                  className="color-primary font-weight-500">
                  {!splitPayment ? 'Split to multiple accounts' : 'Add account'}
                </Box>
              )}
          </Flex>
        </Stack>
      </Box>
      <SubmitButton
        disabled={!validateAllFields}
        action={sellCrypto}
        loading={loading}>
        Continue
      </SubmitButton>
    </Flex>
  );
};

declare interface BankInfoProps {
  handleBankInfoChange: (
    value: string,
    fieldName: 'bank' | 'accountNo' | 'accountName' | 'amount',
    index: number,
  ) => void;
  deleteBankDetails: (id: string) => void;
  index: number;
  values: BankDetailsProp;
  splitPayment?: boolean;
}
const BankInfo: React.FC<BankInfoProps> = ({
  handleBankInfoChange,
  deleteBankDetails,
  index,
  values,
  splitPayment,
}): JSX.Element => {
  const toast = useAjaxToast();
  const dispatch = useDispatch();
  const {
    token,
    success,
    error,
    loading,
    verifyBankAccountLoading,
    bankVerification,
    verifyBankAccountError,
    verifyBankAccountSuccess,
  } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { bankVerification } = state.others;
    const {
      success: {
        withdrawNaira: success,
        verifyBankAccount: verifyBankAccountSuccess,
      },
      errors: { withdrawNaira: error, verifyBankAccount: verifyBankAccountError },
    } = state.ajaxStatuses;
    const {
      withdrawNaira: loading,
      verifyBankAccount: verifyBankAccountLoading,
    } = state.loadingIndicators;
    return {
      token,
      success,
      error,
      loading,
      verifyBankAccountLoading,
      verifyBankAccountError,
      verifyBankAccountSuccess,
      bankVerification,
    };
  });
  useEffect(() => {
    if (values.accountNo.length === 10 && values.bank) {
      dispatch(
        verifyBankAccountRequest({
          data: {
            account_number: values.accountNo,
            account_bank: values.bank,
          },
        }),
      );
    }
  }, [values.accountNo, values.bank]);
  useEffect(() => {
    if (verifyBankAccountError)
      toast({
        status: 'error',
        description: verifyBankAccountError.error,
      });
  }, [verifyBankAccountError]);
  useEffect(() => {
    if (bankVerification[values.accountNo]) {
      handleBankInfoChange(
        bankVerification[values.accountNo].account_name,
        'accountName',
        index,
      );
    }
  }, [bankVerification[values.accountNo]]);
  return (
    <Stack direction="row" spacing={4} py={3}>
      <Box flex={0.6}>
        <Select
          mb={1}
          value={values.bank}
          onChange={(event) =>
            handleBankInfoChange(event.target.value, 'bank', index)
          }
          bg="gray.300"
          fontSize="0.9em"
          focusBorderColor="none"
          border="none"
          placeholder="Select Bank"
          className="color-dark font-weight-500">
          {banks.map((bank) => (
            <option key={bank.code} value={bank.code}>
              {bank.name}
            </option>
          ))}
        </Select>
        {splitPayment && (
          <InputGroup>
            <InputLeftElement ml={5}>
              <Text
                mr={5}
                fontSize="0.9em"
                className="color-gray-text font-family-500">
                NGN
              </Text>
            </InputLeftElement>
            <NumberInput
              bg="gray.300"
              fontSize="0.9em"
              value={values.amount}
              className="color-dark font-weight-500"
              onChange={(value) => handleBankInfoChange(value, 'amount', index)}
              focusBorderColor="brand.100"
              borderWidth="1px">
              <NumberInputField
                value={values.amount}
                fontSize="0.9em"
                pl={'50px'}
                className="color-dark font-weight-500"
                bg="gray.300"
                focusBorderColor="brand.100"
              />
            </NumberInput>
          </InputGroup>
        )}
      </Box>
      <Box flex={0.4}>
        <NumberInput
          mb={1}
          bg="gray.300"
          focusBorderColor="none"
          border="none"
          fontSize="0.9em"
          value={values.accountNo}
          onChange={(value) => handleBankInfoChange(value, 'accountNo', index)}
          focusInputOnChange={false}
          placeholder="Account number">
          <NumberInputField
            bg="gray.300"
            focusBorderColor="none"
            border="none"
            fontSize="0.9em"
            value={values.accountNo}
            onChange={(event) =>
              handleBankInfoChange(event.target.value, 'accountNo', index)
            }
            className="color-dark font-weight-500"
            px={2}
          />
        </NumberInput>
        {bankVerification[values.accountNo] && (
          <Text
            fontSize="14px"
            lineHeight="14.5px"
            className="font-weight-500 color-gray-text">
            {bankVerification[values.accountNo].account_name}
          </Text>
        )}
        {verifyBankAccountLoading && (
          <Stack direction="row" align="center" my={2}>
            <Spinner size="sm" />
            <Text className="font-weight-500 font-sm color-gray-text">
              Verifying...
            </Text>
          </Stack>
        )}
      </Box>
    </Stack>
  );
};

declare interface GenerateQrCodeProps {
  coin: string;
}
const GenerateQrCode: React.FC<GenerateQrCodeProps> = ({ coin }): JSX.Element => {
  const toast = useAjaxToast();
  const { coinAddress } = useSelector((state: AppState) => {
    const { cryptos } = state.wallet;
    const coinAddress = cryptos[coin].address;
    return { coinAddress };
  });
  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    try {
      await navigator.clipboard.writeText(coinAddress as string);
      toast({
        status: 'success',
        description: `${coin} address copied successfully`,
        position: 'top',
      });
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };
  return (
    <Flex direction="column" justify="center" width="100%">
      <Text textAlign="center" className="font-sm color-gray-text" mb={2}>
        Send {coin} to the address below
      </Text>
      <QRCode value="http:facebook.github.io/react/" size={240} />
      <Text
        isTruncated
        noOfLines={1}
        className="color-gray font-weight-400 font-sm"
        width="200px"
        my={'25px'}>
        {coinAddress}
      </Text>
      <Tooltip label="Copied" placement="top" hasArrow isOpen={false} arrowSize={10}>
        {/* <CopyToClipBoard text={coinAddress} onCopy={copyCryptoAddressToClipboard}> */}
        <Box
          as="button"
          type="button"
          px={{ base: '20px', sm: '30px', md: '60px' }}
          py={'12px'}
          borderRadius={5}
          onClick={copyToClipboard}
          className="font-weight-500 btn-primary-outline font-sm margin-bottom-md padding-vertical-sm slim-border">
          Copy {coin} address
        </Box>
        {/* </CopyToClipBoard> */}
      </Tooltip>
      <Text textAlign="center" className="font-sm color-primary font-weight-500">
        {coin} Sent
      </Text>
    </Flex>
  );
};

declare interface IdVerificationProps {
  action: () => void;
}
export const IdentityVerification: React.FC<IdVerificationProps> = ({ action }) => {
  const toast = useAjaxToast();
  const dispatch = useDispatch();
  const { token, success, error, loading } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: { idVerification: success },
      errors: { idVerification: error },
    } = state.ajaxStatuses;
    const { idVerification: loading } = state.loadingIndicators;
    return {
      token,
      success,
      error,
      loading,
    };
  });
  const formik = useFormik({
    initialValues: {
      id_type: '',
      id_number: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
    },
    validationSchema: yup.object({
      id_type: yup.string().required('Required'),
      id_number: yup.string().required('Required'),
      first_name: yup.string().required('Required'),
      last_name: yup.string().required('Required'),
      date_of_birth: yup.string().required('Required'),
    }),
    onSubmit: (props) => {
      dispatch(idVerificationRequest({ token, data: props }));
    },
  });
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success) {
      toast({
        status: 'success',
        description: success.message,
      });
      action();
    }
  }, [success, error]);
  return (
    <Flex
      flex={1}
      direction="column"
      width="full"
      justifyContent="space-between"
      minHeight="380px">
      <Box>
        <Stack spacing={1} direction="row">
          <Select
            flex={1}
            value={formik.values.id_type}
            onChange={(event) => formik.setFieldValue('id_type', event.target.value)}
            bg="gray.300"
            fontSize="16px"
            lineHeight="24px"
            focusBorderColor="none"
            border="none"
            placeholder="Select ID type"
            className="color-dark">
            {identificationTypes.map((id, index) => (
              <option key={index} value={id.value}>
                {id.name}
              </option>
            ))}
          </Select>
          <FormInput
            flex={1}
            placeholder="ID number"
            {...formik.getFieldProps('id_number')}
          />
        </Stack>
        <Stack spacing={1} direction="row">
          <FormInput
            flex={1}
            placeholder="First name"
            {...formik.getFieldProps('first_name')}
          />
          <FormInput
            flex={1}
            placeholder="Last name"
            {...formik.getFieldProps('last_name')}
          />
        </Stack>
        <FormInput
          type="date"
          flex={1}
          placeholder="Date of Birth"
          {...formik.getFieldProps('date_of_birth')}
        />
      </Box>
      <SubmitButton
        loading={loading}
        action={formik.handleSubmit}
        disabled={!(formik.dirty && formik.isValid)}>
        Continue
      </SubmitButton>
    </Flex>
  );
};

export default Sell;
