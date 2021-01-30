import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast, PasswordInput } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthProps } from './types';
import { loginRequest, AppState, getProfileRequest } from '../../redux';

export type LoginProps = AuthProps;
const Login: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success, token } = useSelector((state: AppState) => {
    const { login: loading } = state.loadingIndicators;
    const { token } = state.auth;
    const {
      success: { login: success },
      errors: { login: error },
    } = state.ajaxStatuses;
    return { loading, error, success, token };
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup.string().required('Required'),
    }),

    onSubmit: ({ email, password }) => {
      dispatch(loginRequest({ email, password }));
    },
  });
  useEffect(() => {
    if (error && error.error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && success.message) {
      dispatch(getProfileRequest({ token }));
    }
  }, [error, token, success]);
  if (success && success.message) return <Redirect to="/dashboard" />;
  return (
    <Box pt={5}>
      <Flex direction="column" justify="center" align="center" width="full" mb={5}>
        <Text
          as="h2"
          mb={{ base: 0, md: 3 }}
          fontSize={{ base: '16px', md: '24px' }}
          lineHeight="16px"
          className="capitalize color-dark font-weight-600">
          Welcome back,
        </Text>
        <Text
          fontSize={{ base: '11px', md: '20px' }}
          lineHeight="24px"
          className="capitalize color-gray-text">
          Login
        </Text>
      </Flex>
      <Flex direction="column" align="center" width="full">
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Box mb={{ base: 5, md: 10 }}>
            <FormInput
              {...formik.getFieldProps('email')}
              placeholder="email@example.com"
              label="Email"
              isRequired
              labelClassName="color-blue-medium"
            />
            <PasswordInput
              {...formik.getFieldProps('password')}
              placeholder="Password"
              type="password"
              label="Password"
              isRequired
              labelClassName="color-primary"
            />
            <Flex justify="flex-end">
              <Box
                as="button"
                type="button"
                className="color-gray-text font-sm"
                mt={'-12px'}
                fontSize={{ base: '12px', sm: '13px' }}
                lineHeight="24px"
                fontWeight="normal"
                onClick={() => setState('forgot-password')}>
                Forgot Password?
              </Box>
            </Flex>
          </Box>
          <SubmitButton
            loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            Login
          </SubmitButton>
        </form>
        <Text
          mt={'15px'}
          fontSize={{ base: '11px', md: '14px' }}
          lineHeight="24px"
          className="color-gray-text font-weight-400">
          New here?{' '}
          <button
            onClick={() => setState('signup')}
            type="button"
            className="font-weight-600">
            Sign up
          </button>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
