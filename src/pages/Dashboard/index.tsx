import React, { useLayoutEffect } from 'react';
import Overview from './Overview';
import Profile from './Profile';
import Wallet from './Wallet';
import Trade from './Trade';
import support from '../../assets/technical-support.png';
import {
  DashboardNavigation,
  FullScreenSpinner,
  PrivateRoute,
  SectionWrapper,
} from './components';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenciesRequest, AppState, getCryptoWalletRequest } from '../../redux';

const Dashboard: React.FC<RouteComponentProps> = ({
  match: { path },
}): JSX.Element => {
  const dispatch = useDispatch();
  const { loading, token } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { getCryptoWallets: loading } = state.loadingIndicators;
    return { loading, token };
  });
  useLayoutEffect(() => {
    dispatch(getCryptoWalletRequest({ token }));
  }, []);
  console.log('dashboard was rendered');
  if (loading) return <FullScreenSpinner spinning={loading} />;
  return (
    <Flex direction="column" height="100vh">
      <Box p={{ base: '0px', md: '20px 50px' }}>
        <DashboardNavigation />
      </Box>
      <Switch>
        <SectionWrapper
          mb={0}
          px={{ base: 5, sm: 10, md: '100px' }}
          py={0}
          as="main"
          display="flex"
          flexDirection="column"
          flex={1}
          height="100%">
          <Route exact path={`${path}`} component={Overview} />
          <Route exact path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/wallet`} component={Wallet} />
          <Route exact path={`${path}/trade`} component={Trade} />
        </SectionWrapper>
      </Switch>
    </Flex>
  );
};

export default Dashboard;
