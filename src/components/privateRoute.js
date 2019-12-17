import React from 'react';
import { shape, objectOf, func, any, bool } from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { authProps } from './commonProps';

const PrivateRoute = ({ component: Component, location, isAuth, ...rest }) => {
  if (!isAuth && location.pathname !== '/account/auth') {
    navigate('/account/auth');
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: shape({
    type: func,
  }).isRequired,
  location: objectOf(any).isRequired,
  isAuth: bool,
};

PrivateRoute.defaultProps = {
  isAuth: false,
};

export default connect(authProps.mapStateToProps)(PrivateRoute);
