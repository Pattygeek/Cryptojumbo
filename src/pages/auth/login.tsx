import React from 'react';
import { SubmitButton, FormInput } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { AuthProps } from './types';

export type LoginProps = AuthProps;
const Login: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup
        .string()
        .test('len', 'Password too short', (len) => (len ? len.length >= 8 : false)),
    }),

    onSubmit: ({ email, password }) => {
      // loginRequest({ email, password });
    },
  });
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text
          as="h2"
          mb={3}
          className="capitalize color-blue-medium font-md font-weight-600">
          Welcome Back
        </Text>
        <Text className="capitalize color-gray-text font-sm">Login</Text>
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
            <Box
              as="button"
              type="button"
              className="color-gray-text font-sm"
              mb={2}
              onClick={() => setState('forgot-password')}>
              Forgot Password?
            </Box>
          </Flex>
          <SubmitButton
            // loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            Login
          </SubmitButton>
        </form>
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

export default Login;
