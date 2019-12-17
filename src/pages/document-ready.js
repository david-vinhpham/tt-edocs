import React, { useState, useEffect } from 'react';
import { objectOf, any, bool, func } from 'prop-types';
import { navigate } from 'gatsby';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Error from '../components/error';
import { docReadyProps } from '../components/commonProps';
import REGEXP from '../constants/regExp';
import NAVIGATION from '../constants/navBar';
import { complete } from '../utils/email';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  content: {
    margin: theme.spacing(3, 0),
    maxWidth: theme.breakpoints.values.md,
    background: theme.palette.background.paper,
    width: '100%',
    padding: theme.spacing(2, 5),
    borderRadius: theme.shape.borderRadius,
  },
  header: {
    border: `${theme.spacing(0.125)}px solid ${theme.palette.primary.light}`,
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.primary.lightRgba,
    width: '100%',
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0),
  },
  emailDisclaimer: {
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    margin: theme.spacing(5, 0, 1),
  },
  cta: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    marginRight: theme.spacing(1.5),
  },
}));

const DocumentReady = ({
  isAuth,
  userDetail,
  documentDetail,
  statistics,
  createdCompleteData,
  dispatchFetchStatisticsDocument,
  dispatchCreateStatisticsDocument,
  dispatchUpdateStatisticsDocument,
  dispatchCreateCompleteData,
  dispatchSendingCompleteEmail,
}) => {
  const s = useStyles();
  const { downloadCount } = statistics;
  const initEmail = isAuth ? userDetail.email : '';
  const [email, setEmail] = useState(initEmail);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEmpty(documentDetail)) {
      navigate(NAVIGATION.URL.HOME);
    } else {
      const { id } = documentDetail;
      dispatchFetchStatisticsDocument(id);
    }
  }, []);

  useEffect(() => {
    const completedId = get(createdCompleteData, 'id');
    if (completedId) {
      const { name } = documentDetail;
      const content = complete(email, name);
      dispatchSendingCompleteEmail(content);
      navigate(NAVIGATION.URL.DOCUMENTS.DOWNLOAD);
    }
  }, [createdCompleteData]);

  const handleDownload = () => {
    const userEmail = get(userDetail, 'email') || email;
    const userId = get(userDetail, 'id') || get(userDetail, '_id');
    const { id: downloadId, name } = documentDetail;
    const { id: updateId } = statistics;
    const data = {
      id: updateId,
      download_id: downloadId,
      download_name: name,
      download_count: downloadCount + 1 || 1,
    };
    const completeData = {
      user_email: userEmail,
      user_id: userId,
      document_name: name,
      document_id: downloadId,
    };
    dispatchCreateCompleteData(completeData);
    if (downloadCount > 0) {
      dispatchUpdateStatisticsDocument(data);
    } else {
      dispatchCreateStatisticsDocument(data);
    }
  };

  const handleBlur = event => {
    if (event) event.preventDefault();
    const {
      target: { value },
    } = event;
    if (!value) {
      setError('Email is required to download this document');
    } else if (value && !REGEXP.EMAIL.test(value)) {
      setError('Email format is not valid');
    } else {
      setError('');
      setEmail(value);
    }
  };
  const handleChange = event => {
    if (event) event.preventDefault();
    const {
      target: { value },
    } = event;
    setEmail(value);
  };
  const statisticsText =
    downloadCount > 0 ? (
      <Typography variant="body2" color="textPrimary">
        <strong>
          {downloadCount} {downloadCount > 1 ? 'people' : 'person'}
        </strong>{' '}
        have already downloaded this document
      </Typography>
    ) : (
      <Typography variant="body2" color="textPrimary">
        You are the first one downloading this document
      </Typography>
    );

  return (
    <>
      <Loading />
      <Error />
      <Layout>
        <Grid
          component="section"
          container
          direction="column"
          alignItems="center"
          className={s.root}
        >
          <Grid component="div" item>
            <Typography variant="h5" color="textPrimary" className={s.title}>
              Your document is ready
            </Typography>
          </Grid>
          <Grid component="div" item className={s.content}>
            <Grid
              component="section"
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Grid component="div" item className={s.header}>
                <Typography variant="body1" color="primary">
                  {documentDetail.name}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  Immediate download in Word and PDF formats
                </Typography>
                {statisticsText}
              </Grid>
              <Grid component="div" item className={s.emailDisclaimer}>
                <TextField
                  id="email"
                  name="user-email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  label="Email address (where you will receive the document)"
                  onChange={handleChange}
                  value={email}
                  onBlur={handleBlur}
                  error={!!error}
                  helperText={error}
                />
              </Grid>
              <Grid component="div" item className={s.emailDisclaimer}>
                <Typography variant="subtitle2" color="primary">
                  Totally free.
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  No last minute payments. No surprise subscriptions. No tracking data.
                  No data selling. No advertisements. No newsletter sign ups. No spam.
                  No spam. No third-party offers. No upcharges. No tricks.
                </Typography>
              </Grid>
              <Grid component="div" item className={s.cta}>
                <Button
                  href=""
                  variant="contained"
                  color="primary"
                  disabled={!!error || !email}
                  onClick={handleDownload}
                >
                  <CloudDownload className={s.icon} />
                  Download (secured)
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

DocumentReady.propTypes = {
  isAuth: bool,
  userDetail: objectOf(any),
  documentDetail: objectOf(any),
  statistics: objectOf(any),
  createdCompleteData: objectOf(any),
  dispatchFetchStatisticsDocument: func.isRequired,
  dispatchCreateStatisticsDocument: func.isRequired,
  dispatchUpdateStatisticsDocument: func.isRequired,
  dispatchCreateCompleteData: func.isRequired,
  dispatchSendingCompleteEmail: func.isRequired,
};

DocumentReady.defaultProps = {
  isAuth: false,
  userDetail: {},
  documentDetail: {},
  statistics: {},
  createdCompleteData: {},
};

export default connect(
  docReadyProps.mapStateToProps,
  docReadyProps.mapDispatchToProps,
)(DocumentReady);
