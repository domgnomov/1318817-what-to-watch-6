import {AppRoute, AuthorizationStatus} from "../../const/const";
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import React from 'react';
import {useSelector} from "react-redux";

const PrivateRoute = ({render, path, exact}) => {
  const {authorizationStatus} = useSelector((state) => state.AUTH);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export {PrivateRoute};
