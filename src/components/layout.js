import React from 'react';
import { node } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SEO from './seo';
import NavBar from './navBar';
import Footer from './footer';

const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 'calc(100vh - 375px)',
    maxWidth: `${theme.breakpoints.values.xl}px`,
    margin: `0 auto`,
    width: '100%',
  },
}));

const Layout = ({ children }) => {
  const s = useStyles();

  return (
    <Grid component="main" container direction="column">
      <NavBar />
      <SEO title="T&T E-Documents" />
      <Grid component="section" item className={s.content}>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
