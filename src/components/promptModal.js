import React from 'react';
import { string, func, bool } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import CTA from '../constants/cta';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.grey[100],
    maxWidth: theme.spacing(45),
    borderRadius: theme.spacing(1),
    position: 'absolute',
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
  },
  title: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(1, 2),
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    fill: theme.palette.grey[50],
  },
  content: {
    background: theme.palette.background.default,
    padding: theme.spacing(1, 1.5, 0.5),
  },
  cta: {
    padding: theme.spacing(1, 0),
  },
}));

const PromptModal = ({ title, message, onConfirm, onClose, isOpen }) => {
  const s = useStyles();

  return (
    <Modal open={isOpen}>
      <Grid component="section" container direction="column" className={s.root}>
        <Grid component="header" item className={s.title}>
          <Typography variant="subtitle2" color="inherit">
            {title.toUpperCase()}
          </Typography>
          {typeof onClose === 'function' && (
            <IconButton href="" onClick={onClose} size="small">
              <Clear className={s.icon} />
            </IconButton>
          )}
        </Grid>
        <Grid component="div" item className={s.content}>
          <Typography variant="body2" color="textPrimary" paragraph>
            {message}
          </Typography>
        </Grid>
        <Grid component="div" item className={s.cta}>
          <Grid component="div" container justify="space-evenly">
            {typeof onConfirm === 'function' && (
              <Grid component="div" item>
                <Button
                  href=""
                  onClick={onConfirm}
                  color="secondary"
                  variant="outlined"
                  size="small"
                >
                  {CTA.LABELS.AGREE}
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

PromptModal.propTypes = {
  onConfirm: func,
  onClose: func,
  title: string,
  message: string,
  isOpen: bool.isRequired,
};

PromptModal.defaultProps = {
  onConfirm: null,
  onClose: null,
  title: 'Thông báo',
  message: 'Chúc một ngày làm việc vui vẻ!',
};

export default PromptModal;
