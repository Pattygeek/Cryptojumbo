import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProps } from './types';
import { verifyOtpRequest, AppState } from '../../redux';
export type ForgotPasswordProps = AuthProps;
const ForgotPassword: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success } = useSelector((state: AppState) => {
    const { verifyOtp: loading } = state.loadingIndicators;
    const {
      success: { verifyOtp: success },
      errors: { verifyOtp: error },
    } = state.ajaxStatuses;
    return { loading, error, success };
  });
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: yup.object({
      otp: yup.string().required('Required'),
    }),

    onSubmit: () => {
      // dispatch(verifyOtpRequest({ data: { otp } }));
    },
  });
  useEffect(() => {
    if (success.status) setState('reset-password');
    if (error.error) toast({ title: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box>
      <Flex direction="column" justify="center" align="center" mb={5}>
        <Text as="h2" mb={3} className="capitalize font-md font-weight-600">
          Forgot Password
        </Text>
        <Text className="capitalize color-gray-text font-sm">
          A one-time-password has been sent to your mail. Input the 5 digit password
          below.
        </Text>
      </Flex>
      <Flex direction="column" align="center" mb={5}>
        <form onSubmit={formik.handleSubmit}>
          <Flex mb={5} justify="center">
            <FormInput
              {...formik.getFieldProps('otp')}
              placeholder="*****"
              isRequired
            />
          </Flex>
          <SubmitButton
            loading={loading}
            disabled={!(formik.isValid && formik.dirty)}
            action={formik.handleSubmit}>
            Continue
          </SubmitButton>
        </form>
      </Flex>
    </Box>
  );
};

export default ForgotPassword;
