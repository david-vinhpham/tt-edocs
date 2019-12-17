import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadingProps } from './commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    color: theme.palette.primary.dark,
  },
}));

const Loading = ({ isLoading }) => {
  const s = useStyles();
  return (
    <Modal open={isLoading}>
      <Grid
        component="div"
        container
        justify="center"
        alignItems="center"
        className={s.root}
      >
        <CircularProgress color="inherit" size={45} thickness={5} />
      </Grid>
    </Modal>
  );
};

Loading.propTypes = {
  isLoading: bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default connect(loadingProps.mapStateToProps)(Loading);
