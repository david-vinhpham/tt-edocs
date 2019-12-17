import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Auth from '../components/auth';
import Profile from '../components/profile';
import PrivateRoute from '../components/privateRoute';

const Account = () => {
  return (
    <Layout>
      <Router>
        <Auth path="/account/auth" />
        <PrivateRoute path="/account/profile" component={Profile} />
      </Router>
    </Layout>
  );
};

export default Account;
