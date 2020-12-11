import React from 'react';
import Overview from './Overview';
import Profile from './Profile';
import Wallet from './Wallet';
import Trade from './Trade';
import { DashboardNavigation } from './components';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
const Dashboard: React.FC<RouteComponentProps> = ({
  match: { path },
}): JSX.Element => {
  return (
    <Box as="main" px={{ base: 2, md: 15 }} py={10}>
      <DashboardNavigation />
      <Box as="section" py={15} px={{ base: 2, md: 15 }}>
        <Switch>
          <Route exact path={`${path}`} component={Overview} />
          <Route exact path={`${path}/profile`} component={Profile} />
          <Route exact path={`${path}/wallet`} component={Wallet} />
          <Route exact path={`${path}/trade`} component={Trade} />
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
