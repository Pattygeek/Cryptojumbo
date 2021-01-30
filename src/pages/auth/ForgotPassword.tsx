import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProps } from './types';
import { getOtpRequest, AppState } from '../../redux';
export type ForgotPasswordProps = AuthProps;
const ForgotPassword: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success } = useSelector((state: AppState) => {
    const { getOtp: loading } = state.loadingIndicators;
    const {
      success: { getOtp: success },
      errors: { getOtp: error },
    } = state.ajaxStatuses;
    return { loading, error, success };
  });
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
    }),

    onSubmit: ({ email }) => {
      dispatch(getOtpRequest({ email }));
    },
  });
  useEffect(() => {
    if (success) setState('verify-otp');
    if (error) toast({ status: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box pt={5}>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text
          as="h2"
          mb={{ base: 0, md: 3 }}
          fontSize={{ base: '16px', md: '24px' }}
          lineHeight="16px"
          className="capitalize color-dark font-weight-600">
          Forgot Password
        </Text>
        <Text
          fontSize={{ base: '11px', md: '20px' }}
          lineHeight="24px"
          className="capitalize color-gray-text font-md">
          Recover your account
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="space-between" width="full">
        <Box width="full" mb="60px">
          <FormInput
            {...formik.getFieldProps('email')}
            placeholder="email@example.com"
            label="Email"
            isRequired
          />
        </Box>
        <Box mb="50px" width="full">
          <SubmitButton
            loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            Continue
          </SubmitButton>
        </Box>
        <Box>
          <Text
            textAlign="center"
            className="color-gray-text font-weight-400 font-sm padding-vertical-sm">
            Already have an account?{' '}
            <button
              onClick={() => setState('login')}
              type="button"
              className="font-weight-500">
              Login
            </button>
          </Text>
          <Text
            textAlign="center"
            className="color-gray-text font-weight-400 font-sm padding-vertical-sm">
            New here?{' '}
            <button
              onClick={() => setState('signup')}
              type="button"
              className="font-weight-500">
              Sign up
            </button>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
