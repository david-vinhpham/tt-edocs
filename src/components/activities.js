import React from 'react';
import { func, number } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LibraryBooks from '../images/letters.svg';
import Edit from '../images/edit.svg';
import LocalPrintshop from '../images/print.svg';
import LAYOUT from '../constants/layout';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    color: theme.palette.primary.dark,
    background: 'unset',
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1.5, 1, 3.5),
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      background: 'rgba(0, 0, 0, 0.6)',
      flexDirection: 'column',
      maxWidth: theme.spacing(100),
      alignItems: 'center',
    },
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      flexDirection: 'row',
    },
  },
  items: {
    padding: theme.spacing(1),
    maxWidth: theme.spacing(60),
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      color: theme.palette.grey[50],
    },
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      maxWidth: theme.spacing(35),
    },
  },
  itemSmall: {
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      maxWidth: theme.spacing(30),
    },
  },
  wrappedHeader: {
    margin: theme.spacing(1, 0, 1.5),
  },
  header: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: 'center',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2),
    border: `${theme.spacing(0.125)}px solid ${theme.palette.primary.dark}`,
    borderRadius: '50%',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      border: `${theme.spacing(0.125)}px solid ${theme.palette.grey[50]}`,
    },
  },
  icons: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    fill: theme.palette.primary.dark,
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      fill: theme.palette.grey[50],
    },
  },
  cta: {
    cursor: 'pointer',
  },
}));

const Activities = ({ onChooseTemplate, total }) => {
  const s = useStyles();

  return (
    <Grid
      component="section"
      container
      justify="center"
      alignItems="flex-start"
      className={s.root}
    >
      <Grid
        component="div"
        item
        className={`${s.items} ${s.itemSmall} ${s.cta}`}
        onClick={onChooseTemplate}
      >
        <Grid component="div" direction="column" container alignItems="center">
          <Grid component="div" item className={s.iconWrapper}>
            <LibraryBooks className={s.icons} />
          </Grid>
          <Grid component="div" item className={s.wrappedHeader}>
            <Typography className={s.header}>1. Choose a template</Typography>
          </Grid>
          <Grid component="div" key={total} item>
            <Typography
              variant="body2"
              color="inherit"
              className={s.text}
              align="center"
            >
              Choose from any of our {total} available documents.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid component="div" item className={s.items}>
        <Grid component="div" direction="column" container alignItems="center">
          <Grid component="div" item className={s.iconWrapper}>
            <Edit className={s.icons} />
          </Grid>
          <Grid component="div" item className={s.wrappedHeader}>
            <Typography className={s.header}>2. Complete the document</Typography>
          </Grid>
          <Grid component="div" item>
            <Typography
              variant="body2"
              color="inherit"
              className="s.text"
              align="center"
            >
              Answer a few questions and your document is created automatically.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid component="div" item className={`${s.items} ${s.itemSmall}`}>
        <Grid component="div" direction="column" container alignItems="center">
          <Grid component="div" item className={s.iconWrapper}>
            <LocalPrintshop className={s.icons} />
          </Grid>
          <Grid component="div" className={s.wrappedHeader}>
            <Typography className={s.header}>3. Save - Print</Typography>
          </Grid>
          <Grid component="div" item>
            <Typography
              variant="body2"
              color="inherit"
              className="s.text"
              align="center"
            >
              Your document is ready! Use it however you wish. For FREE.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Activities.propTypes = {
  onChooseTemplate: func.isRequired,
  total: number,
};

Activities.defaultProps = {
  total: 0,
};

export default Activities;
