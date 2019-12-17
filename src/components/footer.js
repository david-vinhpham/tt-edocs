import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import Info from '@material-ui/icons/Info';
import Copyright from '@material-ui/icons/Copyright';
import Mail from '@material-ui/icons/Mail';
import LAYOUT from '../constants/layout';
import Facebook from '../images/facebook.svg';
import Brand from '../images/tandt.svg';
import LangBox from './languageBox';
import FORM from '../constants/form';
import TIME from '../constants/time';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0),
    background: theme.palette.primary.dark,
    minHeight: LAYOUT.FOOTER.HEIGHT,
  },
  content: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      padding: theme.spacing(2, 0, 3),
    },
  },
  title: {
    textTransform: 'uppercase',
    margin: theme.spacing(1, 0),
  },
  itemColumn: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  },
  item: {
    width: '100%',
    margin: theme.spacing(1.5, 0),
    position: 'relative',
    '&::after': {
      position: 'absolute',
      content: '""',
      width: '100%',
      borderBottom: `${theme.spacing(0.125)}px solid ${theme.palette.secondary.light}`,
      bottom: theme.spacing(-2),
      transition: `all ${TIME.CSS.TIMEOUT} ease-in`,
    },
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      maxWidth: theme.spacing(30),
      justifyContent: 'flex-start',
      '&::after': {
        width: 0,
      },
    },
  },
  brand: {
    width: theme.spacing(7),
    fill: theme.palette.secondary.light,
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fill: theme.palette.primary.light,
    margin: theme.spacing(0, 1),
  },
  iconText: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: theme.spacing(0.5, 0),
  },
  social: {
    display: 'flex',
    alignItem: 'center',
  },
  wrappedCopy: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    transition: `all ${TIME.CSS.TIMEOUT} ease-in`,
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      borderTop: `${theme.spacing(0.125)}px solid ${theme.palette.primary.light}`,
    },
  },
}));

const Footer = () => {
  const s = useStyles();

  return (
    <Grid component="footer" container direction="column" className={s.root}>
      <Grid component="div" item className={s.content}>
        <Grid component="div" container justify="space-evenly" className={s.itemColumn}>
          <Grid component="div" item className={s.item}>
            <Grid component="div" container direction="column">
              <Grid component="div" item className={s.iconText}>
                <Mail className={s.icon} />
                <Typography variant="body1" color="textSecondary">
                  Contacts
                </Typography>
              </Grid>
              <Grid component="div" item className={s.iconText}>
                <PhoneIphone className={s.icon} />
                <Typography variant="body1" color="textSecondary">
                  Support
                </Typography>
              </Grid>
              <Grid component="div" item className={s.iconText}>
                <Info className={s.icon} />
                <Typography variant="body1" color="textSecondary">
                  Terms and conditions
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid component="div" item className={s.item}>
            <LangBox
              label="Language"
              onChange={() => {}}
              name={FORM.FIELD_NAMES.LANGUAGE}
            />
          </Grid>
          <Grid component="div" item className={s.item}>
            <Grid component="div" container direction="column">
              <Grid component="div" item>
                <Typography variant="body2" color="textSecondary" className={s.title}>
                  Like us. Follow us. :)
                </Typography>
              </Grid>
              <Grid component="div" item className={s.social}>
                <Facebook className={s.icon} />
                <Typography variant="body1" color="textSecondary">
                  Facebook
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid component="div" item className={s.wrappedCopy}>
        <Typography variant="subtitle2" color="secondary">
          {new Date().getFullYear()}
        </Typography>
        <Copyright className={s.icon} />
        <Brand className={s.brand} />
      </Grid>
    </Grid>
  );
};

export default Footer;
