import React, { useEffect, useLayoutEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

interface PrivateRouteProps {
  component: any;
  path: string;
  redirectedPath?: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Comp,
  path,
  redirectedPath = '/login',
  ...rest
}): JSX.Element => {
  const token = true;
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return token ? (
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
