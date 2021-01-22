import React, { useState, useCallback, useEffect, useMemo } from 'react';
import {
  WalletTransactionWrapper,
  SubmitButton,
  FormInput,
  useAjaxToast,
  TransactionStatusProps,
  TransactionStatus,
} from '../components';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import QRCode from 'qrcode.react';
import {
  Text,
  Box,
  Flex,
  Center,
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  FormControl,
  Input,
  Tooltip,
  Stack,
  Image,
  Select,
  Square,
  Spinner,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import bitcoin from '../../../assets/bitcoin.png';
import eth from '../../../assets/etherum.png';
import usdt from '../../../assets/udth.png';
import naira from '../../../assets/naira.png';
import swap from '../../../assets/swap.png';
import { banks, formatAmount, swapOptions } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppState,
  depositNairaRequest,
  CurrencySymbols,
  sendBTCRequest,
  sendETHRequest,
  sendUSDTRequest,
  swapCryptoRequest,
  withdrawNairaRequest,
  verifyBankAccountRequest,
} from '../../../redux';
import { ExecFileOptionsWithStringEncoding } from 'child_process';

declare type TradeTypes = 'receive' | 'send' | 'deposit' | 'withdraw' | 'swap';
declare interface LocationState {
  coinSymbol: string;
  transactionType: TradeTypes;
  swapProp: SwapCryptoProps;
}

const coinProps: any = {
  ETH: {
    coinLogo: eth,
    coin: 'Etherum',
  },
  BTC: {
    coinLogo: bitcoin,
    coin: 'Bitcoin',
  },
  USDT: {
    coinLogo: usdt,
    coin: 'Tether',
  },
  NGN: {
    coinLogo: naira,
    coin: 'Naira',
  },
  swap: {
    coinLogo: swap,
  },
};

declare type WalletTransactionProps = RouteComponentProps<
  {},
  StaticContext,
  LocationState
>;

const WalletTransaction: React.FC<WalletTransactionProps> = ({
  location: { state },
}): JSX.Element => {
  if (!state) return <Redirect to="/dashboard/wallet" />;
  const { coinSymbol, transactionType, swapProp } = state;
  const [ajaxStatus, setAjaxStatus] = useState<TransactionStatusProps>();

  return (
    <Flex direction="column" align="center" justify="center" flex={1} height="100%">
      {!ajaxStatus && (
        <WalletTransactionWrapper
          {...coinProps[coinSymbol]}
          action={transactionType}>
          {transactionType === 'deposit' && coinSymbol.toLowerCase() === 'ngn' && (
            <DepositNaira coinSymbol={coinSymbol} />
          )}
          {transactionType === 'withdraw' && coinSymbol.toLowerCase() === 'ngn' && (
            <WithdrawNaira setStatus={setAjaxStatus} />
          )}
          {transactionType === 'send' && (
            <SendCrypto coinSymbol={coinSymbol} setStatus={setAjaxStatus} />
          )}
          {transactionType === 'receive' && (
            <ReceiveCrypto coinSymbol={coinSymbol} />
          )}
          {transactionType === 'swap' && swapProp && (
            <SwapCrypto {...swapProp} setStatus={setAjaxStatus} />
          )}
        </WalletTransactionWrapper>
      )}
      {ajaxStatus && <TransactionStatus {...ajaxStatus} />}
    </Flex>
  );
};

const DepositNaira: React.FC<{ coinSymbol: string }> = ({
  coinSymbol,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { token, success, error, loading, depositLink } = useSelector(
    (state: AppState) => {
      const { token } = state.auth;
      const { depositLink } = state.wallet;
      const {
        success: { depositNaira: success },
        errors: { depositNaira: error },
      } = state.ajaxStatuses;
      const { depositNaira: loading } = state.loadingIndicators;
      return { token, success, error, loading, depositLink };
    },
  );
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: yup.object({
      amount: yup.string().required('Amount is required'),
    }),
    onSubmit: ({ amount }) => {
      dispatch(depositNairaRequest({ token, data: { amount } }));
    },
  });
  const accountNo = '01234567890';
  const copyToClipboard = async () => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    try {
      await navigator.clipboard.writeText(accountNo as string);
      toast({
        status: 'success',
        description: `Account number copied successfully`,
        position: 'top',
      });
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };
  // useEffect(() => {
  //   if (error)
  //     toast({
  //       status: 'error',
  //       description: error.error,
  //     });
  //   if (success) {
  //     toast({
  //       status: 'success',
  //       description: success.message,
  //     });
  //     window.open(depositLink, '_blank', 'noopener,noreferrer');
  //   }
  // }, [success, error]);
  return (
    <Flex as="section" flex={1} direction="column" justify="space-between">
      {/* <FormControl mb={5}>
        <Text mb={1} className="color-gray-text font-weight-400">
          Amount
        </Text>
        <InputGroup>
          <InputRightElement>
            <Text className="color-gray-text font-sm" mr={2}>
              {coinSymbol}
            </Text>
          </InputRightElement>
          <NumberInput
            {...formik.getFieldProps('amount')}
            placeholder="Amount"
            focusBorderColor="brand.100">
            <NumberInputField {...formik.getFieldProps('amount')} px={2} />
          </NumberInput>
        </InputGroup>
      </FormControl>
      <SubmitButton loading={loading} action={formik.handleSubmit}>
        Deposit {formatAmount(+formik.values.amount, 'NGN')}
      </SubmitButton> */}
      <Flex direction="column" align="center">
        <Text className="font-lg color-dark font-weight-600" mb={2}>
          {accountNo}
        </Text>
        <Text
          className="font-md color-dark font-weight-500 uppercase"
          mb={5}
          textAlign="center">
          PROVIDUS BANK
        </Text>
        <Text className="font-md color-dark font-weight-400">
          CryptoJumbo/Bruce Wayne
        </Text>
      </Flex>
      <Box as="button" onClick={copyToClipboard} className="btn-primary-outline">
        Copy Account Number
      </Box>
    </Flex>
  );
};

declare interface AjaxStatusState {
  setStatus: (prop: TransactionStatusProps) => void;
}
const WithdrawNaira: React.FC<AjaxStatusState> = ({ setStatus }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
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
  const formik = useFormik({
    initialValues: {
      amount: '',
      bank: '',
      accountNo: '',
    },
    validationSchema: yup.object({
      amount: yup
        .string()
        .test('len', 'Amount should be at least N500', (len) =>
          len ? +len >= 500 : false,
        )
        .required('Amount is required'),
      bank: yup.string().required('Bank is required'),
      accountNo: yup.string().required('Account number is required'),
    }),
    onSubmit: ({ amount, accountNo, bank }) => {
      dispatch(
        withdrawNairaRequest({
          token,
          data: {
            amount,
            account_bank: bank,
            account_number: accountNo,
            project: 'CJ',
          },
        }),
      );
    },
  });
  useEffect(() => {
    if (formik.values.accountNo.length === 10 && formik.values.bank) {
      dispatch(
        verifyBankAccountRequest({
          data: {
            account_number: formik.values.accountNo,
            account_bank: formik.values.bank,
          },
        }),
      );
    }
  }, [formik.values.bank, formik.values.accountNo]);
  useEffect(() => {
    if (verifyBankAccountError)
      toast({
        status: 'error',
        description: verifyBankAccountError.error,
      });
  }, [verifyBankAccountError]);
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && success.message) {
      toast({
        status: 'success',
        description: success.message,
      });
      setStatus({
        status: 'success',
        statusTitle: 'Withdrawal Successful',
        statusMessage: success.message,
        linkTitle: 'Back to wallet',
        linkValue: '/dashboard/wallet',
      });
    }
  }, [success, error]);
  const validateAllFields =
    formik.dirty && formik.isValid && verifyBankAccountSuccess;
  return (
    <Flex as="section" direction="column">
      <Box>
        <FormControl mb={5}>
          <Text mb={'2px'} className="color-gray-text font-weight-400">
            Amount
          </Text>
          <InputGroup>
            <InputLeftElement>
              <Text className="color-gray-text font-sm" ml={2}>
                NGN
              </Text>
            </InputLeftElement>
            <NumberInput
              {...formik.getFieldProps('amount')}
              placeholder="Amount"
              focusBorderColor="brand.100">
              <NumberInputField
                {...formik.getFieldProps('amount')}
                px="50px"
                className="color-dark font-weight-500"
              />
            </NumberInput>
          </InputGroup>
          <Text as="p" className="color-danger font-weight-500 font-sm">
            {formik.errors.amount}
          </Text>
        </FormControl>
        <Box mb={5}>
          <Text className="font-sm color-gray-text font-weight-500" mb={5}>
            Receive Payment to{' '}
          </Text>
          <Flex direction="column">
            <Stack direction="row" spacing={4}>
              <Box flex={0.6} mr={1}>
                <Select
                  value={formik.values.bank}
                  onChange={(event) =>
                    formik.setFieldValue('bank', event.target.value)
                  }
                  bg="gray.300"
                  fontSize="0.9em"
                  focusBorderColor="none"
                  border="none"
                  placeholder="Select option"
                  className="color-dark font-weight-500">
                  {banks.map((bank) => (
                    <option key={bank.code} value={bank.code}>
                      {bank.name}
                    </option>
                  ))}
                </Select>
              </Box>
              <Box flex={0.4}>
                <NumberInput
                  focusBorderColor="none"
                  border="none"
                  {...formik.getFieldProps('accountNo')}>
                  <NumberInputField
                    bg="gray.300"
                    focusBorderColor="none"
                    border="none"
                    fontSize="0.9em"
                    className="borderless-input color-dark font-weight-500"
                    {...formik.getFieldProps('accountNo')}
                    maxLength={10}
                  />
                </NumberInput>
              </Box>
            </Stack>
            {bankVerification[formik.values.accountNo] && (
              <Text className="font-weight-500 color-gray-text font-sm">
                {bankVerification[formik.values.accountNo].account_name}
              </Text>
            )}
            {verifyBankAccountLoading && (
              <Stack direction="row" align="center" my={2}>
                <Spinner size="sm" />
                <Text className="font-weight-500 font-sm color-gray-text">
                  Verifying bank details
                </Text>
              </Stack>
            )}
          </Flex>
        </Box>
      </Box>
      <Flex direction="column" flex={1} justify="flex-end" mt="120px" px={'30px'}>
        <SubmitButton
          disabled={!validateAllFields}
          loading={loading}
          action={formik.handleSubmit}>
          Withdraw {formatAmount(+formik.values.amount, 'NGN')}
        </SubmitButton>
      </Flex>
      {/* <Box>
        <Box mb={5}>
          <Text className="color-gray-text font-sm font-weight-500">Amount</Text>
          <NumberInput variant="flushed" value={amount} onChange={setAmount}>
            <NumberInputField
              bg="gray.200"
              fontSize="0.9em"
              variant="flushed"
              value={amount}
              focusBorderColor="brand.100"
            />
          </NumberInput>
        </Box>
        <Box>
          <Text mb={5} className="color-gray-text font-sm font-weight-500">
            Receive
          </Text>
          {bankDetails.map((el, index) => (
            <BankInfo
              values={{ ...el }}
              index={index}
              key={el.id}
              deleteBankDetails={deleteBankDetails}
              handleBanInfoChange={handleBankDetailsChange}
            />
          ))}
          <Flex justify="flex-end">
            <Text className="font-sm font-weight-500 color-gray-text">
              N500 remaining
            </Text>
            <Box as="button">
              <Text className="color-primary font-sm font-weight-500">
                Add account
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box> */}
    </Flex>
  );
};

declare interface SendCryptoProps extends AjaxStatusState {
  coinSymbol: string;
}
const SendCrypto: React.FC<SendCryptoProps> = ({
  coinSymbol,
  setStatus,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const {
    token,
    sendBTCSuccess,
    sendETHSuccess,
    sendUSDTSuccess,
    sendBTCError,
    sendETHError,
    sendUSDTError,
    sendBTCLoading,
    sendETHLoading,
    sendUSDTLoading,
  } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const {
      success: {
        sendBTC: sendBTCSuccess,
        sendETH: sendETHSuccess,
        sendUSDT: sendUSDTSuccess,
      },
      errors: {
        sendBTC: sendBTCError,
        sendETH: sendETHError,
        sendUSDT: sendUSDTError,
      },
    } = state.ajaxStatuses;
    const {
      sendBTC: sendBTCLoading,
      sendETH: sendETHLoading,
      sendUSDT: sendUSDTLoading,
    } = state.loadingIndicators;
    return {
      token,
      sendBTCSuccess,
      sendETHSuccess,
      sendUSDTSuccess,
      sendBTCError,
      sendETHError,
      sendUSDTError,
      sendBTCLoading,
      sendETHLoading,
      sendUSDTLoading,
    };
  });
  const formik = useFormik({
    initialValues: {
      amount: '',
      address: '',
    },
    validationSchema: yup.object({
      amount: yup.string().required('Amount is required'),
      address: yup.string().required('Address is required'),
    }),
    onSubmit: ({ amount, address }) => {
      console.log('onSubmit');
      if (coinSymbol === CurrencySymbols.BTC) {
        dispatch(
          sendBTCRequest({
            token,
            data: { amounts: [amount], to_addresses: [address], project: 'CJ' },
          }),
        );
      } else if (coinSymbol === CurrencySymbols.ETH) {
        dispatch(
          sendETHRequest({
            token,
            data: { amount, to: address, project: 'CJ' },
          }),
        );
      } else if (coinSymbol === CurrencySymbols.USDT) {
        dispatch(
          sendUSDTRequest({
            token,
            data: { amount, to: address, project: 'CJ' },
          }),
        );
      }
    },
  });
  useEffect(() => {
    if (sendBTCError && sendBTCError.error)
      toast({
        status: 'error',
        description: sendBTCError.error,
      });
    if (sendETHError && sendETHError.error)
      toast({
        status: 'error',
        description: sendETHError.error,
      });
    if (sendUSDTError && sendUSDTError.error)
      toast({
        status: 'error',
        description: sendUSDTError.error,
      });
    if (sendBTCSuccess && sendBTCSuccess.message) {
      toast({
        status: 'success',
        description: sendBTCSuccess.message,
      });
      formik.resetForm();
      setStatus({
        status: 'success',
        statusTitle: 'Successful',
        statusMessage: sendBTCSuccess.message as string,
        linkTitle: 'Back to wallet',
        linkValue: '/dashboard/wallet',
      });
    }
    if (sendETHSuccess && sendETHSuccess.message) {
      toast({
        status: 'success',
        description: sendETHSuccess.message,
      });
      formik.resetForm();
      setStatus({
        status: 'success',
        statusTitle: 'Successful',
        statusMessage: sendETHSuccess.message as string,
        linkTitle: 'Back to wallet',
        linkValue: '/dashboard/wallet',
      });
    }
    if (sendUSDTSuccess && sendUSDTSuccess.message) {
      toast({
        status: 'success',
        description: sendUSDTSuccess.message,
      });
      formik.resetForm();
      setStatus({
        status: 'success',
        statusTitle: 'Successful',
        statusMessage: sendUSDTSuccess.message as string,
        linkTitle: 'Back to wallet',
        linkValue: '/dashboard/wallet',
      });
    }
  }, [
    sendBTCSuccess,
    sendETHSuccess,
    sendUSDTSuccess,
    sendBTCError,
    sendETHError,
    sendUSDTError,
  ]);
  return (
    <Flex direction="column" justify="space-between" flex={1}>
      <Box>
        <FormControl mb={5}>
          <Text mb={'2px'} className="color-gray-text font-sm font-weight-500">
            Amount
          </Text>
          <InputGroup>
            <InputRightElement>
              <Text className="color-gray-text font-sm" mr={2}>
                {coinSymbol}
              </Text>
            </InputRightElement>
            <NumberInput
              defaultValue={0}
              {...formik.getFieldProps('amount')}
              placeholder="Amount"
              focusBorderColor="brand.100">
              <NumberInputField {...formik.getFieldProps('amount')} px={2} />
            </NumberInput>
          </InputGroup>
        </FormControl>
        <FormControl mb={5}>
          <Text mb={'2px'} className="color-gray-text font-sm font-weight-500">
            Recieve payment to
          </Text>
          <Input
            bg="gray.300"
            {...formik.getFieldProps('address')}
            placeholder={`Paste ${coinSymbol} address here`}
            className="font-sm borderless-input"
            _focusVisible={{ border: 'none' }}
          />
        </FormControl>
      </Box>
      <Flex direction="column" px={'25px'}>
        <SubmitButton
          disabled={!(formik.dirty && formik.isValid)}
          loading={sendETHLoading || sendBTCLoading || sendUSDTLoading}
          action={formik.handleSubmit}>
          Send {coinSymbol}
        </SubmitButton>
      </Flex>
    </Flex>
  );
};

declare interface ReceiveCryptoProps {
  coinSymbol: string;
}
const ReceiveCrypto: React.FC<ReceiveCryptoProps> = ({
  coinSymbol,
}): JSX.Element => {
  const toast = useAjaxToast();
  const { coinAddress } = useSelector((state: AppState) => {
    const { cryptos } = state.wallet;
    const coinAddress = cryptos[coinSymbol].address;
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
        description: `${coinSymbol} address copied successfully`,
        position: 'top',
      });
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };
  return (
    <Flex direction="column" flex={1} align="center" justify="space-between">
      <QRCode value={coinAddress as string} size={240} />
      <Text
        isTruncated
        noOfLines={1}
        className="color-dark font-weight-500 font-sm"
        width="200px"
        my={'25px'}>
        {coinAddress}
      </Text>
      <Tooltip label="Copied" placement="top" hasArrow isOpen={false} arrowSize={10}>
        <Box
          as="button"
          type="button"
          onClick={copyToClipboard}
          px={{ base: '20px', sm: '30px', md: '60px' }}
          py={'12px'}
          borderRadius={5}
          className="font-weight-500 btn-primary-outline font-sm margin-bottom-md padding-vertical-sm slim-border">
          Copy {coinSymbol} address
        </Box>
      </Tooltip>
    </Flex>
  );
};

declare interface SwapCryptoProps {
  from: CurrencySymbols;
  to: CurrencySymbols;
}
const SwapCrypto: React.FC<SwapCryptoProps & AjaxStatusState> = ({
  from,
  to,
  setStatus,
}): JSX.Element => {
  const [swap, setSwap] = useState<SwapCryptoProps>({ from, to });
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { token, success, error, loading, currencies } = useSelector(
    (state: AppState) => {
      const { token } = state.auth;
      const { currencies } = state.others;
      const {
        success: { swapCrypto: success },
        errors: { swapCrypto: error },
      } = state.ajaxStatuses;
      const { swapCrypto: loading } = state.loadingIndicators;
      return { token, success, error, loading, currencies };
    },
  );
  const formik = useFormik({
    initialValues: {
      amount: '',
      to_amount: '',
    },
    validationSchema: yup.object({
      amount: yup.string().required('Amount is required'),
      to_amount: yup.string().required('Required'),
    }),
    onSubmit: ({ amount, to_amount }) => {
      dispatch(
        swapCryptoRequest({
          token,
          data: {
            to_amount: parseFloat(to_amount).toFixed(8),
            from_amount: amount,
            from_currency: swap.from,
            to_currency: swap.to,
          },
        }),
      );
    },
  });
  const conversionRatio: number = useMemo(() => {
    const fromCurrencyPrice = +currencies.dollarEquivalent[swap.from];
    const toCurrencyPrice = +currencies.dollarEquivalent[swap.to];
    const conversionRatio = fromCurrencyPrice / toCurrencyPrice;
    return conversionRatio;
  }, [swap, currencies]);
  const fee = 0.015 * +formik.values.amount;
  useEffect(() => {
    const toAmountValue = conversionRatio * (+formik.values.amount - fee);
    formik.setFieldValue('to_amount', toAmountValue, true);
  }, [formik.values.amount, conversionRatio]);
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && success.message) {
      toast({
        status: 'success',
        description: success.message,
      });
      setStatus({
        status: 'success',
        statusTitle: 'Successful',
        statusMessage: success.message,
        linkTitle: 'Back to wallet',
        linkValue: '/dashboard/wallet',
      });
    }
  }, [success, error]);
  return (
    <Flex as="section" flex={1} direction="column" justify="space-between">
      <Box>
        <Flex
          align="center"
          flex={{ base: 0, sm: 1 }}
          className="bg-white border-radius-sm trade-coin"
          mb={10}
          flexDirection={{ base: 'column', sm: 'row' }}>
          <Stack
            direction="row"
            spacing={'10px'}
            borderRadius={5}
            className="slim-border-primary"
            mb={{ sm: 5, md: 0 }}
            align="center"
            justify="space-between"
            p={2}
            flex={1}>
            <Flex align="center">
              <Image
                src={coinProps[swap.from].coinLogo}
                width={{ base: '20px', md: 25 }}
                height={{ base: '20px', md: 25 }}
                mr={1}
              />
              <Text className="font-sm color-dark">{coinProps[swap.from].coin}</Text>
            </Flex>
            <BsArrowRight className="color-primary" size={25} />
            <Flex align="center">
              <Image
                src={coinProps[swap.to].coinLogo}
                width={{ base: '20px', md: 25 }}
                height={{ base: '20px', md: 25 }}
                mr={1}
              />
              <Text className="font-sm color-dark">{coinProps[swap.to].coin}</Text>
            </Flex>
            <Box position="relative" className="tooltip-wrapper">
              <Box as="button">
                <RiArrowDropDownLine className="color-gray-text" size={30} />
              </Box>
              <Box
                mb={5}
                py={3}
                position="absolute"
                right="50%"
                transform="translateX(50%)"
                top="100%"
                className="bg-white slim-border card-shadow tooltip"
                border="none"
                minWidth="150px">
                {swapOptions.map((option, index) => (
                  <Box
                    as="button"
                    width="full"
                    onClick={() =>
                      setSwap({
                        from: option[0] as CurrencySymbols,
                        to: option[1] as CurrencySymbols,
                      })
                    }
                    key={index}
                    px={2}
                    py={3}
                    className="font-sm color-dark font-weight-500 secondary-ripple-effect">
                    {option[0]} to {option[1]}
                  </Box>
                ))}
              </Box>
            </Box>
          </Stack>
        </Flex>
        <FormControl mb={10}>
          <Text mb={1} className="color-gray-text font-sm font-weight-400">
            Swap
          </Text>
          <InputGroup>
            <InputRightElement mr={'35px'}>
              <Stack direction="row" align="center">
                <Text className="color-gray-text font-sm" mr={2}>
                  {swap.from}
                </Text>
                <Square
                  size={'30px'}
                  className="bg-secondary"
                  px={'25px'}
                  py={1}
                  borderRadius={7}>
                  <Text className="color-white font-sm font-weight-500">max.</Text>
                </Square>
              </Stack>
            </InputRightElement>
            <NumberInput
              {...formik.getFieldProps('amount')}
              placeholder="Amount"
              border="none"
              focusBorderColor="transparent">
              <NumberInputField
                {...formik.getFieldProps('amount')}
                pr={'20px'}
                bg="gray.300"
                border="none"
              />
            </NumberInput>
          </InputGroup>
        </FormControl>
        <Flex justify="space-between" align="center" mb={10}>
          <Text className="color-gray-text font-sm font-weight-400">To</Text>
          <Stack direction="row" spacing={2}>
            <Text className="color-dark font-sm font-weight-400">
              {parseFloat(formik.values.to_amount).toFixed(8)}
            </Text>
            <Text className="color-gray-text font-sm font-weight-400">
              {swap.to}
            </Text>
          </Stack>
        </Flex>
      </Box>
      <Text
        className="font-sm font-weight-400 color-gray"
        lineHeight="16.5px"
        mb={5}>
        {swap.from} swap would attract a fee of 1.5% ({fee} {swap.from}). This fee
        has already been deducted from what is displayed in the {swap.to} input
        field.
      </Text>
      <SubmitButton
        loading={loading}
        disabled={!(formik.dirty && formik.isValid)}
        action={formik.handleSubmit}>
        Swap {swap.from} to {swap.to}
      </SubmitButton>
    </Flex>
  );
};
export default WalletTransaction;
