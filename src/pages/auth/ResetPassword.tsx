import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast, PasswordInput } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProps } from './types';
import { resetPasswordRequest, AppState } from '../../redux';
export type ResetPasswordProps = AuthProps;

const ResetPassword: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success, email } = useSelector((state: AppState) => {
    const { email } = state.auth;
    const { resetPassword: loading } = state.loadingIndicators;
    const {
      success: { resetPassword: success },
      errors: { resetPassword: error },
    } = state.ajaxStatuses;
    return { loading, error, success, email };
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .test('len', 'Password too short', (len) => (len ? len.length >= 8 : false)),
      confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords do not match'),
    }),

    onSubmit: ({ password, confirm_password }) => {
      dispatch(
        resetPasswordRequest({
          data: { password, confirm_password },
          email: email as string,
        }),
      );
    },
  });
  useEffect(() => {
    if (success) {
      toast({ status: 'success', description: success.message });
      setState('login');
    }
    if (error) toast({ status: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box pt={5}>
      <Flex direction="column" justify="center" align="center" mb={10}>
        <Text
          as="h2"
          mb={{ base: 0, md: 3 }}
          fontSize={{ base: '16px', md: '24px' }}
          lineHeight="16px"
          className="capitalize color-dark font-weight-600">
          Set new password
        </Text>
      </Flex>
      <Flex direction="column" align="center" mb={5}>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Flex direction="column" justify="space-between" flex={1} height="100%">
            <Box mb={'50px'}>
              <PasswordInput
                {...formik.getFieldProps('password')}
                placeholder="password"
                label="Password"
                isRequired
              />
              <PasswordInput
                {...formik.getFieldProps('confirm_password')}
                placeholder="Password again"
                label="Confirm Password"
                isRequired
              />
            </Box>
            <SubmitButton
              loading={loading}
              mb="50px"
              disabled={!(formik.isValid && formik.dirty)}
              action={formik.handleSubmit}>
              Continue
            </SubmitButton>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
