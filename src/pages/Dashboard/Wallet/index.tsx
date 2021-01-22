import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import Overview from './Overview';
import Transact from './Transact';
const Wallet: React.FC<RouteComponentProps> = ({ match: { path } }): JSX.Element => {
  return (
    <Switch>
      <Route exact path={`${path}`} component={Overview} />
      <Route exact path={`${path}/transact`} component={Transact} />
    </Switch>
  );
};

export default Wallet;
