import React, { useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  useDisclosure,
  UseDisclosureProps,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Spinner,
  Select,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitButton, useAjaxToast } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppState,
  verifyBankAccountRequest,
  updateProfileRequest,
} from '../../../redux';
import { banks } from '../../../utils';

const LocalAccounts: React.FC = () => {
  const toast = useAjaxToast();
  const dispatch = useDispatch();
  const {
    verifyBankAccountLoading,
    bankVerification,
    user,
    verifyBankAccountError,
    verifyBankAccountSuccess,
  } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { bankVerification } = state.others;
    const { user } = state.profile;
    const {
      success: { verifyBankAccount: verifyBankAccountSuccess },
      errors: { verifyBankAccount: verifyBankAccountError },
    } = state.ajaxStatuses;
    const { verifyBankAccount: verifyBankAccountLoading } = state.loadingIndicators;
    return {
      verifyBankAccountLoading,
      verifyBankAccountError,
      verifyBankAccountSuccess,
      bankVerification,
      user,
    };
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!bankVerification[user?.account_number as string]) {
      dispatch(
        verifyBankAccountRequest({
          data: {
            account_number: user?.account_number as string,
            account_bank: user?.bank_name as string,
          },
        }),
      );
    }
  }, [bankVerification, user]);
  useEffect(() => {
    if (verifyBankAccountError)
      toast({
        status: 'error',
        description: verifyBankAccountError.error,
      });
  }, [verifyBankAccountError]);
  return (
    <Box className="bg-white card-shadow" borderRadius={10} p={'20px 25px'} mb={5}>
      {!isOpen && (
        <Box>
          <Flex justify="space-between" mb={5}>
            <Text className="font-md font-weight-500 color-dark">
              Local Accounts
            </Text>
            <Box
              as="button"
              className="color-primary font-sm font-weight-500"
              onClick={onOpen}>
              Edit Account Details
            </Box>
          </Flex>
          <Box py={5}>
            {user?.bank_name && (
              <Text
                className="font-weight-normal capitalize"
                fontSize="10px"
                lineHeight="12px"
                mb={1}>
                {banks.find((el) => el.code === user?.bank_name)?.name}
              </Text>
            )}
            <Text className="font-sm color-dark font-weight-500">
              {user?.account_number} -{' '}
              {bankVerification[user?.account_number as string] ? (
                bankVerification[user?.account_number as string].account_name
              ) : (
                <Spinner size="sm" />
              )}
            </Text>
          </Box>
        </Box>
      )}
      {isOpen && <EditAccount onClose={onClose} />}
    </Box>
  );
};

const EditAccount: React.FC<Pick<UseDisclosureProps, 'onClose'>> = ({
  onClose,
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
    user,
    verifyBankAccountError,
    verifyBankAccountSuccess,
  } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { bankVerification } = state.others;
    const { user } = state.profile;
    const {
      success: {
        updateProfile: success,
        verifyBankAccount: verifyBankAccountSuccess,
      },
      errors: { updateProfile: error, verifyBankAccount: verifyBankAccountError },
    } = state.ajaxStatuses;
    const {
      updateProfile: loading,
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
      user,
    };
  });
  const formik = useFormik({
    initialValues: {
      bank_name: '',
      account_number: '',
    },
    validationSchema: yup.object({
      bank_name: yup.string().required('Required'),
      account_number: yup.string().required('Required'),
    }),
    onSubmit: ({ bank_name, account_number }) => {
      dispatch(
        updateProfileRequest({
          token,
          data: { bank_name, account_number },
        }),
      );
    },
  });

  useEffect(() => {
    if (formik.values.account_number.length === 10 && formik.values.bank_name) {
      dispatch(
        verifyBankAccountRequest({
          data: {
            account_number: formik.values.account_number,
            account_bank: formik.values.bank_name,
          },
        }),
      );
    }
  }, [formik.values]);
  useEffect(() => {
    if (verifyBankAccountError)
      toast({
        status: 'error',
        description: verifyBankAccountError.error,
      });
  }, [verifyBankAccountError]);
  useEffect(() => {
    if (success) {
      toast({
        status: 'success',
        description: success.message,
      });
      onClose && onClose();
    }
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
  }, [success, error]);
  return (
    <Box as="section">
      <Stack direction="row" spacing={4} py={3}>
        <Box flex={0.6}>
          <Select
            mb={1}
            value={formik.values.bank_name}
            onChange={(event) =>
              formik.setFieldValue('bank_name', event.target.value)
            }
            bg="gray.300"
            className="color-dark"
            focusBorderColor="none"
            border="none"
            placeholder="Select Bank">
            {banks.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box flex={0.4}>
          <NumberInput
            mb={1}
            bg="gray.300"
            focusBorderColor="none"
            border="none"
            fontSize="0.9em"
            {...formik.getFieldProps('account_number')}
            focusInputOnChange={false}
            placeholder="Account number"
            backgroundColor="rgba(225, 225, 225, 0.48)">
            <NumberInputField
              bg="gray.300"
              placeholder="Account number"
              focusBorderColor="none"
              border="none"
              {...formik.getFieldProps('account_number')}
              className="borderless-input color-dark"
              px={2}
              borderRadius={'4px'}
            />
          </NumberInput>
        </Box>
      </Stack>
      {bankVerification[formik.values.account_number] && (
        <Text className="font-weight-500 color-gray-text font-sm">
          {bankVerification[formik.values.account_number].account_name}
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
      <Flex justify="flex-end">
        <Box flex={0.2}>
          <SubmitButton
            action={formik.handleSubmit}
            disabled={!(formik.dirty && formik.isValid)}
            loading={loading}
            py={0}
            p="5px 10px">
            Save
          </SubmitButton>
        </Box>
      </Flex>
    </Box>
  );
};
export default LocalAccounts;
