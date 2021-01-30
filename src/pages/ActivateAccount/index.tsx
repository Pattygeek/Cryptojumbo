import React, { useLayoutEffect, useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { activateAccountRequest, AppState } from '../../redux';
import { FullScreenSpinnerWithText, TransactionStatus } from '../components';
import { Center } from '@chakra-ui/react';

const ActivateAccount: React.FC<
  RouteComponentProps<{ uidb64: string; token: string }>
> = ({ match: { params } }): JSX.Element => {
  const dispatch = useDispatch();
  const { replace } = useHistory();
  console.log('params', params);
  const { success, error, loading } = useSelector((state: AppState) => {
    const { activateAccount: loading } = state.loadingIndicators;
    const {
      success: { activateAccount: success },
      errors: { activateAccount: error },
    } = state.ajaxStatuses;
    return { success, error, loading };
  });
  useLayoutEffect(() => {
    dispatch(activateAccountRequest({ token: params.token, uidb64: params.uidb64 }));
  }, []);
  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        replace('/auth');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [success]);
  if (loading)
    return (
      <FullScreenSpinnerWithText
        spinning={loading}
        text="Verifying your Account. Please wait"
      />
    );
  if (!loading && success)
    return (
      <Center
        flexDirection="column"
        width="100%"
        height="100vh"
        px={{ base: '20px', md: 10 }}>
        <TransactionStatus
          status="success"
          statusTitle="Account successfully verified"
          statusMessage="Congratulations!!! Your accout has been successfully verified. You will be redirected to login page soon. If this doesn't happen, kindly do same by clicking on the button below."
          linkTitle="Login"
          linkValue="/auth"
        />
      </Center>
    );
  if (!loading && error)
    return (
      <Center
        flexDirection="column"
        width="100%"
        height="100vh"
        px={{ base: '20px', md: 10 }}>
        <TransactionStatus
          status="failure"
          statusTitle="Account verification failed"
          statusMessage="Sorry we're unable to verify your account"
        />
      </Center>
    );
  return <div />;
};

export default ActivateAccount;
