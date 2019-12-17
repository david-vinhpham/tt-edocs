import React from 'react';
import { number } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LAYOUT from '../constants/layout';
import Letters from '../images/letters.svg';
import Download from '../images/download.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0, 3),
    padding: theme.spacing(3, 0),
    borderTop: `${theme.spacing(0.25)}px solid ${theme.palette.grey[400]}`,
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.grey[400]}`,
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      borderTop: 'none',
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  board: {
    margin: theme.spacing(3, 2),
    width: theme.spacing(50),
    height: theme.spacing(30),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    flexDirection: 'column',
    color: theme.palette.grey[50],
  },
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2),
  },
}));

const Statistics = ({ total, downloadCount }) => {
  const s = useStyles();

  return (
    <Grid
      component="section"
      container
      direction="column"
      alignItems="center"
      className={s.root}
    >
      <Grid component="div" item>
        <Grid
          component="div"
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" className={s.title}>
            WE HELP YOU WRITE YOUR DOCUMENTS!
          </Typography>
          <Typography variant="body1" color="inherit" className={s.text}>
            A team of layers and legal experts creates the template
          </Typography>
        </Grid>
      </Grid>
      <Grid component="div" item>
        <Grid component="section" container justify="center" alignItems="center">
          <Grid component="div" item className={s.board}>
            <Grid component="div" container justify="center" alignItems="center">
              <Grid component="div" item>
                <Letters className={s.icon} />
              </Grid>
              <Grid component="div" item>
                <Typography variant="h3" color="secondary" align="center" gutterBottom>
                  {total}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" color="inherit" align="center">
              templates of letters and contracts
            </Typography>
          </Grid>
          <Grid component="div" item className={s.board}>
            <Grid component="div" container justify="center" alignItems="center">
              <Grid component="div" item>
                <Download className={s.icon} />
              </Grid>
              <Grid component="div" item>
                <Typography variant="h3" color="secondary" align="center" gutterBottom>
                  {downloadCount}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" color="inherit" align="center">
              downloads of our letters and templates
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Statistics.propTypes = {
  total: number,
  downloadCount: number,
};

Statistics.defaultProps = {
  total: 0,
  downloadCount: 0,
};

export default Statistics;
