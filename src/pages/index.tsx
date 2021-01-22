import React, { Suspense, useLayoutEffect } from 'react';
import Home from './Home';
import Auth from './auth';
import About from './About';
import FAQ from './FAQ';
import Dashboard from './Dashboard';
import Privacy from './PrivacyPolicy';
import Contact from './Contact';
import Error404 from './404';
import Academy from './Academy';
import ActivateAccount from './ActivateAccount';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, FullScreenSpinner } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenciesRequest, AppState } from '../redux';
import '../styles/App.scss';
import '../styles/index.scss';
const Pages: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { loading, token } = useSelector((state: AppState) => {
    const { token } = state.auth;
    const { getCurrencies: loading } = state.loadingIndicators;
    return { loading, token };
  });
  useLayoutEffect(() => {
    console.log('uselayoutEdfetc');
    dispatch(getCurrenciesRequest({ token }));
  }, [token]);
  if (loading) return <FullScreenSpinner spinning={loading} />;
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faqs" component={FAQ} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/academy" component={Academy} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route exact path="/activate/:uidb64/:token" component={ActivateAccount} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  );
};

export default Pages;
