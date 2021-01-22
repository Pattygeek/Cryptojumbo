import React, { useState, ReactText, useEffect } from 'react';
import { Box, Flex, Text, RadioGroup, Radio, Stack, Center } from '@chakra-ui/react';
import {
  TradeWrapper,
  TradeWrapperProps,
  useFileUpload,
  fileTypes,
  SubmitButton,
  TransactionStatus,
  useAjaxToast,
} from '../components';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  buyCryptoRequest,
  CurrencySymbols,
  MakePaymentMethods,
  ReceivePaymentMethods,
  uploadUtilityBillRequest,
} from '../../../redux';

declare interface BuyProps extends TradeWrapperProps {
  amount: string;
  coinValue: string;
  coin: CurrencySymbols;
}

export enum Progress {
  utility = 'utility-bill',
  payment = 'payment',
  verifyPayment = 'verify-payment',
  paymentResponse = 'response',
}
const Buy: React.FC<BuyProps> = ({
  onClose,
  amount,
  heading,
  coin,
  coinValue,
}): JSX.Element => {
  const [progress, setProgress] = useState<Progress>(Progress.payment);
  const { success, error } = useSelector((state: AppState) => {
    const {
      success: { buyCrypto: success },
      errors: { buyCrypto: error },
    } = state.ajaxStatuses;
    return { success, error };
  });
  useEffect(() => {
    if ((success && success.message) || (error && error.error)) {
      setProgress(Progress.paymentResponse);
    } else {
      setProgress(Progress.payment);
    }
  }, [success, error]);
  return (
    <Box as="section">
      {progress !== Progress.paymentResponse && !(error || success) ? (
        <TradeWrapper heading={heading} onClose={onClose}>
          {progress === Progress.utility && (
            <UploadUtilityBill action={() => setProgress(Progress.payment)} />
          )}
          {progress === Progress.payment && (
            <MakePayment coinSymbol={coin} coinValue={coinValue} amount={amount} />
          )}
          {progress === Progress.verifyPayment && (
            <Center flex={1}>
              <Text className="color-gray-text">Awaiting payment response...</Text>
            </Center>
          )}
        </TradeWrapper>
      ) : (
        <TransactionStatus
          status={error ? 'failure' : 'success'}
          statusTitle={error ? 'Trade unsuccessful' : 'Trade successful'}
          statusMessage={heading}
          linkTitle="Back to dashboard"
          linkValue="/dashboard"
        />
      )}
    </Box>
  );
};

declare interface UploadUtilityBillProps {
  action: () => void;
}
export const UploadUtilityBill: React.FC<UploadUtilityBillProps> = ({
  action,
}): JSX.Element => {
  const { FileUpload, file } = useFileUpload();
  const toast = useAjaxToast();
  const dispatch = useDispatch();
  const { loading, success, error, token } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { buyCrypto: loading } = state.loadingIndicators;
    const {
      success: { uploadUtilityBill: success },
      errors: { uploadUtilityBill: error },
    } = state.ajaxStatuses;
    return { loading, success, error, token };
  });
  const uploadBill = () => {
    const formData = new FormData();
    formData.append('file', file as File);
    dispatch(uploadUtilityBillRequest({ token, data: formData }));
  };
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success) action();
  }, [success, error]);
  return (
    <Box>
      <Text
        mb={10}
        textAlign="center"
        className="color-gray-text font-sm font-weight-400">
        We’d need a few more details to complete this trade
      </Text>
      <Flex borderRadius="20px" mb={10} className="trade-upload-area">
        <Flex
          direction="column"
          align="center"
          justify="center"
          width="100%"
          height="100%">
          <Text
            px={5}
            className="font-weight-500 font-sm color-dark text-overflow-1"
            mb={5}>
            {!file ? 'Upload Utility Bill' : file.name}
          </Text>
          <FileUpload
            fileType={[fileTypes['image/jpeg'], fileTypes['image/png']]}
            maxFileSize={2}>
            <Box
              display="inline-flex"
              alignItems="center"
              p={2}
              className={`border-radius-xs ${
                !file ? 'bg-primary' : 'bg-primary-transparent'
              }`}>
              <Text mr={2} className="font-sm color-white font-weight-500">
                Choose file
              </Text>
              <AiOutlinePlus size={16} className="color-white" />
            </Box>
          </FileUpload>
        </Flex>
      </Flex>
      <SubmitButton loading={loading} disabled={!file} action={uploadBill}>
        Continue
      </SubmitButton>
    </Box>
  );
};

declare interface MakePaymentProps {
  amount: string;
  coinValue: string;
  coinSymbol: CurrencySymbols;
}
const MakePayment: React.FC<MakePaymentProps> = ({
  amount,
  coinValue,
  coinSymbol,
}): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const [method, setMethod] = useState<ReactText>(
    MakePaymentMethods['in-app wallet'],
  );
  const { token, success, error, loading, address, user } = useSelector(
    (state: AppState) => {
      const { token } = state.auth;
      const { cryptos } = state.wallet;
      const { user } = state.profile;
      const address = cryptos[coinSymbol].address;
      const {
        success: { buyCrypto: success },
        errors: { buyCrypto: error },
      } = state.ajaxStatuses;
      const { buyCrypto: loading } = state.loadingIndicators;
      return { token, success, error, loading, address, user };
    },
  );
  const makePayment = () => {
    dispatch(
      buyCryptoRequest({
        token,
        data: {
          amount_in_naira: `${amount}`,
          equivalent_amount: `${coinValue}`,
          currency: coinSymbol,
          make_pay_method: method as MakePaymentMethods,
          receive_pay_method: ReceivePaymentMethods['In app wallet'],
          address_to_receive: address as string,
          email: user?.email,
          project: 'CJ',
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
  return (
    <Flex flex={1} direction="column" justifyContent="space-between">
      <Box>
        <Text className="font-sm color-gray-text font-weight-500">Pay with</Text>
        <RadioGroup onChange={setMethod} value={method}>
          <Stack spacing={2} direction="column">
            <Box
              p={3}
              borderWidth={1}
              borderColor="transparent"
              className={`border-radius-xs payment-method ${
                method === MakePaymentMethods['in-app wallet'] ? 'checked' : ''
              }`}>
              <Radio
                colorScheme="orange"
                value={MakePaymentMethods['in-app wallet']}>
                <Text
                  className={`font-weight-500 font-sm ${
                    method === MakePaymentMethods['in-app wallet']
                      ? 'color-dark'
                      : 'color-gray-text'
                  }`}>
                  CryptoJumbo NGN Wallet
                </Text>
              </Radio>
            </Box>
            <Box
              p={3}
              borderWidth={1}
              borderColor="transparent"
              className={`border-radius-xs payment-method ${
                method === MakePaymentMethods.card ? 'checked' : ''
              }`}>
              <Radio colorScheme="orange" value={MakePaymentMethods.card}>
                <Box
                  className={`font-weight-500 font-sm ${
                    method === MakePaymentMethods.card
                      ? 'color-dark'
                      : 'color-gray-text'
                  }`}>
                  <Text className="font-sm">Card, Transfer, or USSD</Text>
                  <Text className="font-xs">Flutterwave payment gateway</Text>
                </Box>
              </Radio>
            </Box>
          </Stack>
        </RadioGroup>
      </Box>
      <SubmitButton loading={loading} action={makePayment}>
        Continue
      </SubmitButton>
    </Flex>
  );
};

export default Buy;
