import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthProps } from './types';
import { signUpRequest, AppState } from '../../redux';
import VerifyEmail from './VerifyEmail';

export type SignUpProps = AuthProps;
const SignUp: React.FC<AuthProps> = ({ setState, state }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success } = useSelector((state: AppState) => {
    const { signUp: loading } = state.loadingIndicators;
    const {
      success: { signUp: success },
      errors: { signUp: error },
    } = state.ajaxStatuses;
    return { loading, error, success };
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email().required('Email is required'),
      password: yup
        .string()
        .test('len', 'Password too short', (len) => (len ? len.length >= 8 : false)),
    }),

    onSubmit: ({ email, password }) => {
      dispatch(signUpRequest({ email, password, project: 'CJ' }));
    },
  });
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success) {
      setState('verify-email');
    }
  }, [error]);
  if (success) return <Redirect to="/dashboard" />;
  return (
    <Box>
      {state !== 'verify-email' && (
        <Box>
          <Flex direction="column" justify="center" align="center" mb={5}>
            <Text
              as="h2"
              mb={3}
              className="capitalize color-dark font-lg font-weight-600">
              Let’s get started
            </Text>
            <Text className="capitalize color-gray-text font-md">Signup</Text>
          </Flex>
          <Flex direction="column" align="center">
            <form onSubmit={formik.handleSubmit}>
              <FormInput
                {...formik.getFieldProps('email')}
                placeholder="email@example.com"
                label="Email"
                isRequired
                labelClassName="color-dark"
              />
              <FormInput
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
                  mb={2}
                  mt={'-10px'}
                  onClick={() => setState('forgot-password')}>
                  Forgot Password?
                </Box>
              </Flex>
              <SubmitButton
                loading={loading}
                disabled={!(formik.isValid && formik.dirty)}
                action={formik.handleSubmit}>
                SignUp
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
          </Flex>
        </Box>
      )}
      {state === 'verify-email' && (
        <VerifyEmail email={formik.values.email} setState={setState} />
      )}
    </Box>
  );
};

export default SignUp;
