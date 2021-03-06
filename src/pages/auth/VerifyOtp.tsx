import React, { useEffect } from 'react';
import { SubmitButton, FormInput, useAjaxToast } from '../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Text, Flex, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProps } from './types';
import { verifyOtpRequest, AppState } from '../../redux';
export type VerifyOtpProps = AuthProps;
const VerifyOtp: React.FC<AuthProps> = ({ setState }): JSX.Element => {
  const dispatch = useDispatch();
  const toast = useAjaxToast();
  const { loading, error, success, email } = useSelector((state: AppState) => {
    const { email } = state.auth;
    const { verifyOtp: loading } = state.loadingIndicators;
    const {
      success: { verifyOtp: success },
      errors: { verifyOtp: error },
    } = state.ajaxStatuses;
    return { loading, error, success, email };
  });
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema: yup.object({
      otp: yup.string().required('Required'),
    }),
    onSubmit: ({ otp }) => {
      dispatch(verifyOtpRequest({ otp, email: email as string }));
    },
  });
  useEffect(() => {
    if (success) setState('reset-password');
    if (error) toast({ status: 'error', description: error.error });
  }, [success, error]);
  return (
    <Box pt={5}>
      <Flex direction="column" align="center" mb={5} px={{ base: '10px', md: 10 }}>
        <Text
          as="h2"
          mb={{ base: '10px', md: 3 }}
          fontSize={{ base: '16px', md: '24px' }}
          lineHeight="16px"
          className="capitalize color-dark font-weight-600">
          Forgot Password
        </Text>
        <Text
          fontSize={{ base: '12px', md: '20px' }}
          lineHeight="16px"
          className="color-gray-text"
          textAlign="center">
          A one-time-password has been sent to your mail. Input the 5 digit password
          below.
        </Text>
      </Flex>
      <Flex direction="column" align="center" mb={'80px'} flex={1}>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Flex mb={'60px'} justify="center" px={'50px'}>
            <FormInput
              inputProps={{ letterSpacing: '14px' }}
              {...formik.getFieldProps('otp')}
              placeholder="******"
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

export default VerifyOtp;
