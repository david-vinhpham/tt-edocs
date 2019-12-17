import React from 'react';
import { objectOf, any } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DOCUMENTS from '../../constants/documents';
import DocumentTree from './documentTree';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
    margin: `0px auto`,
  },
  title: {
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 1, 2),
  },
  content: {
    width: '100%',
  },
}));

const Document = ({ categories }) => {
  const s = useStyles();

  return (
    <Grid component="section" container className={s.root}>
      <Grid component="div" item className={s.title}>
        <Typography variant="h5" color="textPrimary" align="center" className={s.title}>
          {DOCUMENTS.TITLE}
        </Typography>
      </Grid>
      <Grid component="div" item>
        <Typography variant="body2" color="textPrimary" className={s.description}>
          {DOCUMENTS.DESCRIPTION}
        </Typography>
      </Grid>
      <Grid component="section" item className={s.content}>
        <DocumentTree categories={categories} />
      </Grid>
    </Grid>
  );
};

Document.propTypes = {
  categories: objectOf(any).isRequired,
};

export default Document;
