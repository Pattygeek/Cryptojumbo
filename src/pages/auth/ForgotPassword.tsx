import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProps } from './types';
import { forgotPasswordRequest, AppState } from '../../redux';
export type ForgotPasswordProps = AuthProps;
const ForgotPassword: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success } = useSelector((state: AppState) => {
    const { forgotPassword: loading } = state.loadingIndicators;
    const {
      success: { forgotPassword: success },
      errors: { forgotPassword: error },
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
      dispatch(forgotPasswordRequest({ data: { email } }));
    },
  });
  useEffect(() => {
    if (success.status) setState('verify-otp');
    if (error.error) toast({ title: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text as="h2" mb={3} className="capitalize font-md font-weight-600">
          Forgot Password
        </Text>
        <Text className="capitalize color-gray-text font-sm">
          Recover your account
        </Text>
      </Flex>
      <Flex direction="column" align="center" mb={5}>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={5}>
            <FormInput
              {...formik.getFieldProps('email')}
              placeholder="email@example.com"
              label="Email"
              isRequired
            />
          </Box>
          <SubmitButton
            loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            ForgotPassword
          </SubmitButton>
        </form>
        <Text className="color-gray-text font-weight-400 font-sm padding-vertical-sm">
          Already have an account?{' '}
          <button
            onClick={() => setState('login')}
            type="button"
            className="font-weight-500">
            Login
          </button>
        </Text>
        <Text className="color-gray-text font-weight-400 font-sm padding-vertical-sm">
          New here?{' '}
          <button
            onClick={() => setState('signup')}
            type="button"
            className="font-weight-500">
            Sign up
          </button>
        </Text>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
