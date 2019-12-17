import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FAQ from '../constants/faq';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 1, 2),
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
    minHeight: 'calc(100vh - 375px)',
    background: theme.palette.background.paper,
  },
}));

const FrequentlyAQ = () => {
  const s = useStyles();

  return (
    <Grid
      component="section"
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={s.root}
    >
      <Grid component="div" item>
        <Typography variant="h5" color="inherit" className={s.title}>
          {FAQ.TITLE}
        </Typography>
      </Grid>
      <Grid component="div" item className={s.content}>
        FAQ coming soon ...
      </Grid>
    </Grid>
  );
};

export default FrequentlyAQ;
