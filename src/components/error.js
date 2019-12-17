import React from 'react';
import { func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PromptModal from './promptModal';
import { errorProps } from './commonProps';
import MESSAGES from '../constants/messages';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
});

const Error = ({ isError, errMsg, dispatchResetError }) => {
  const s = useStyles();

  return (
    <Grid
      component="div"
      container
      justify="center"
      alignItems="center"
      className={s.root}
    >
      <PromptModal
        isOpen={isError}
        title={MESSAGES.POPUP.ERROR.TITLE}
        message={errMsg}
        onClose={dispatchResetError}
      />
    </Grid>
  );
};

Error.propTypes = {
  isError: bool,
  errMsg: string,
  dispatchResetError: func.isRequired,
};

Error.defaultProps = {
  isError: false,
  errMsg: '',
};

export default connect(
  errorProps.mapStateToProps,
  errorProps.mapDispatchToProps,
)(Error);
