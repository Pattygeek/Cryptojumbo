import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
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
  const { loading, error, success } = useSelector((state: AppState) => {
    const { resetPassword: loading } = state.loadingIndicators;
    const {
      success: { resetPassword: success },
      errors: { resetPassword: error },
    } = state.ajaxStatuses;
    return { loading, error, success };
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

    onSubmit: ({ password }) => {
      // dispatch(resetPasswordRequest({ data: { password } }));
    },
  });
  useEffect(() => {
    if (success.status) setState('reset-password');
    if (error.error) toast({ title: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text
          as="h2"
          mb={3}
          className="capitalize color-blue-medium font-md font-weight-600">
          Set new password
        </Text>
      </Flex>
      <Flex direction="column" align="center" mb={5}>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={5}>
            <FormInput
              {...formik.getFieldProps('password')}
              placeholder="password"
              label="Password"
              isRequired
              labelClassName="color-blue-medium"
            />
            <FormInput
              {...formik.getFieldProps('confirm_password')}
              placeholder="confirm password"
              label="Confirm Password"
              isRequired
              labelClassName="color-blue-medium"
            />
          </Box>
          <SubmitButton
            loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            ResetPassword
          </SubmitButton>
        </form>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
