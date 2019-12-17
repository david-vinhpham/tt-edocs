import React from 'react';
import { string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0),
  },
}));

const Download = () => {
  const s = useStyles();

  return (
    <Grid component="" container direction="column" className={s.root}>
      <Grid component="" item>
        <Typography variant="" color="">
          Download
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Download;
