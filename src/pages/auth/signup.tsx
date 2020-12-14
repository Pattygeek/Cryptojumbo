import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AuthProps } from './types';
import { signUpRequest, AppState } from '../../redux';

export type SignUpProps = AuthProps;
const SignUp: React.FC<AuthProps> = ({ setState }): JSX.Element => {
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
        title: 'error',
        description: error.error,
      });
  }, [error]);
  if (success) return <Redirect to="/dashboard" />;
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text
          as="h2"
          mb={3}
          className="capitalize color-blue-medium font-md font-weight-600">
          Let’s get started
        </Text>
        <Text className="capitalize color-gray-text font-sm">Signup</Text>
      </Flex>
      <Flex direction="column" align="center">
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            {...formik.getFieldProps('email')}
            placeholder="email@example.com"
            label="Email"
            isRequired
            labelClassName="color-blue-medium"
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
            <button
              type="button"
              className="color-gray-text font-sm"
              onClick={() => setState('forgot-password')}>
              Forgot Password?
            </button>
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
            onClick={() => setState('signup')}
            type="button"
            className="font-weight-500">
            Login
          </button>
        </Text>
      </Flex>
    </Box>
  );
};

export default SignUp;
