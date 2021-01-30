import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast, PasswordInput } from '../components';
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
      dispatch(signUpRequest({ email, password }));
    },
  });
  useEffect(() => {
    if (error)
      toast({
        status: 'error',
        description: error.error,
      });
    if (success && formik.values.email) {
      setState('verify-email');
    }
  }, [error, success, formik.values.email]);
  return (
    <Box>
      {state !== 'verify-email' && (
        <Box pt={5}>
          <Flex direction="column" justify="center" align="center" mb={5}>
            <Text
              as="h2"
              mb={{ base: 0, md: 3 }}
              fontSize={{ base: '16px', md: '24px' }}
              lineHeight="16px"
              className="capitalize color-dark font-weight-600">
              Let’s get started
            </Text>
            <Text
              fontSize={{ base: '11px', md: '20px' }}
              lineHeight="24px"
              className="capitalize color-gray-text font-md">
              Signup
            </Text>
          </Flex>
          <Flex direction="column" align="center">
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
              <Box mb="50px">
                <FormInput
                  {...formik.getFieldProps('email')}
                  placeholder="email@example.com"
                  label="Email"
                  isRequired
                />
                <PasswordInput
                  {...formik.getFieldProps('password')}
                  placeholder="Password"
                  type="password"
                  label="Password"
                  isRequired
                />
                {/* <Flex justify="flex-end">
                <Box
                  as="button"
                  type="button"
                  className="color-gray-text font-sm"
                  mb={2}
                  mt={'-10px'}
                  onClick={() => setState('forgot-password')}>
                  Forgot Password?
                </Box>
              </Flex> */}
              </Box>
              <SubmitButton
                loading={loading}
                disabled={!(formik.isValid && formik.dirty)}
                action={formik.handleSubmit}>
                SignUp
              </SubmitButton>
            </form>
            <Text
              m={'35px 0 10px'}
              fontSize={{ base: '11px', md: '14px' }}
              lineHeight="24px"
              className="color-gray-text font-weight-400">
              Already have an account?{' '}
              <button
                onClick={() => setState('login')}
                type="button"
                className="font-weight-600">
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
