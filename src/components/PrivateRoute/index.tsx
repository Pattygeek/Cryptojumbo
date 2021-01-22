import React, { useEffect, useLayoutEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, getProfileRequest, getCurrenciesRequest } from '../../redux';
import { FullScreenSpinner } from '../Spinners';

interface PrivateRouteProps {
  component: any;
  path: string;
  redirectedPath?: string;
  exact?: boolean;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Comp,
  path,
  redirectedPath = '/auth',
  ...rest
}): JSX.Element => {
  const dispatch = useDispatch();
  const { token, loading, isLoggedIn, success } = useSelector((state: AppState) => {
    const { token, isLoggedIn } = state.auth;
    const { getProfile: loading } = state.loadingIndicators;
    const {
      success: { getProfile: success },
    } = state.ajaxStatuses;
    return { loading, token, isLoggedIn, success };
  });
  useLayoutEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(getProfileRequest({ token }));
      dispatch(getCurrenciesRequest({ token }));
    }
  }, [token, isLoggedIn]);
  if (loading || (token && !isLoggedIn))
    return <FullScreenSpinner spinning={loading} />;
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return token && isLoggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectedPath,
              state: {
                prevLocation: location.pathname,
                error: 'Unauthorized Access!',
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
