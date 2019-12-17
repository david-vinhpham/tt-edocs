import React, { useState } from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Login from './login';
import Register from './register';
import { authProps } from './commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 0, 2),
  },
}));

const Auth = ({ isAuth }) => {
  const s = useStyles();
  const [loginState, setLoginState] = useState(true);
  const handleLoginState = state => {
    setLoginState(state);
  };
  if (isAuth) {
    navigate('/account/profile');
  }

  return (
    <Grid component="section" container className={s.root}>
      {loginState && <Login onRegister={handleLoginState} />}
      {!loginState && <Register onLogin={handleLoginState} />}
    </Grid>
  );
};

Auth.propTypes = {
  isAuth: bool,
};

Auth.defaultProps = {
  isAuth: false,
};

export default connect(authProps.mapStateToProps)(Auth);
