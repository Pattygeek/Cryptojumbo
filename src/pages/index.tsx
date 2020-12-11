import React, { Suspense } from 'react';
import Home from './Home';
import Auth from './auth';
import Dashboard from './Dashboard';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/index.scss';
const Pages: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
