import React, { useState, useEffect } from 'react';
import { bool, objectOf, any, func } from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import Layout from '../components/layout';
import { docReadyProps } from '../components/commonProps';
import Word from '../images/word.svg';
import PDF from '../images/pdf.svg';
import Loading from '../components/loading';
import Rating from '../components/rating';
import PromptModal from '../components/promptModal';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0),
  },
  content: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3, 2),
    width: '100%',
    maxWidth: theme.breakpoints.values.sm,
    background: theme.palette.background.paper,
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    fill: theme.palette.primary.dark,
    margin: theme.spacing(0, 2),
  },
  pdf: {
    fill: red[800],
  },
  word: {
    fill: indigo[800],
  },
  cta: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    border: `${theme.spacing(0.125)}px solid ${theme.palette.primary.light}`,
    background: theme.palette.primary.lightRgba,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  rating: {
    width: '100%',
  },
}));

const DocumentDownload = ({
  isAuth,
  documentDetail,
  dispatchCleanUpCompletedDocuments,
  dispatchRatingDocument,
}) => {
  const s = useStyles();
  const { rate, id } = documentDetail;
  const [openPrompt, setOpenPrompt] = useState(false);

  useEffect(() => {
    return () => {
      dispatchCleanUpCompletedDocuments();
    };
  }, []);

  const closeModal = () => {
    setOpenPrompt(false);
  };

  const openModal = () => {
    setOpenPrompt(true);
  };

  return (
    <>
      <PromptModal
        isOpen={openPrompt}
        message="Feature comming soon"
        onClose={closeModal}
        title="Download document"
      />
      <Loading />
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
              You have successfully created a document!
            </Typography>
          </Grid>
          <Grid component="div" item className={s.content}>
            <Grid
              component="section"
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid component="div" item>
                <Typography variant="h6" color="textSecondary">
                  {documentDetail.name}
                </Typography>
              </Grid>
              <Grid component="div" item className={s.cta} onClick={openModal}>
                <PDF className={`${s.icon} ${s.pdf}`} />
                <Typography variant="body1" color="textPrimary">
                  Download the document in PDF format
                </Typography>
              </Grid>
              <Grid component="div" item className={s.cta} onClick={openModal}>
                <Word className={`${s.icon} ${s.word}`} />
                <Typography variant="body1" color="textPrimary">
                  Download in Word format so you can modify it
                </Typography>
              </Grid>
              {isAuth && (
                <Grid component="div" item className={s.rating}>
                  <Rating userRating={rate} onRating={dispatchRatingDocument} id={id} />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

DocumentDownload.propTypes = {
  isAuth: bool.isRequired,
  documentDetail: objectOf(any).isRequired,
  dispatchCleanUpCompletedDocuments: func.isRequired,
  dispatchRatingDocument: func.isRequired,
};

export default connect(
  docReadyProps.mapStateToProps,
  docReadyProps.mapDispatchToProps,
)(DocumentDownload);
