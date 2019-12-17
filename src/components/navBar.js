import React from 'react';
import { bool, objectOf, any } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import SearchInput from './search/search';
import Logo from '../images/tandt.svg';
import NAVIGATION from '../constants/navBar';
import LAYOUT from '../constants/layout';
import TIME from '../constants/time';
import { authProps } from './commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: theme.zIndex.appBar,
    padding: theme.spacing(0, 4),
    minWidth: theme.spacing(40),
    background: theme.palette.primary.main,
  },
  brand: {
    width: theme.spacing(15),
    background: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'unset',
    height: theme.spacing(8.25),
    transition: `width ${TIME.CSS.TIMEOUT}
     ${theme.transitions.easing.easeInOut} !important`,
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      width: theme.spacing(20),
      height: 'unset',
      padding: theme.spacing(1, 0),
    },
  },
  slogan: {
    color: theme.palette.grey[50],
    display: 'none',
  },
  menu: {
    display: 'none',
  },
  search: {
    display: 'none',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      display: 'block',
    },
  },
  searchInput: {
    marginBottom: theme.spacing(0.5),
  },
  listItem: {
    textDecoration: 'none',
    color: theme.palette.grey[50],
    cursor: 'pointer',
    padding: theme.spacing(2, 0, 1.5),
    borderBottom: `${theme.spacing(1.25)}px solid transparent`,
    transition: `all ${TIME.CSS.TIMEOUT} ${theme.transitions.easing.easeIn}`,
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      margin: theme.spacing(0, 2.2, 0, 0.5),
    },
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      margin: theme.spacing(0, 2.8, 0, 1),
    },
    '&:hover': {
      color: theme.palette.primary.light,
      borderBottom: `${theme.spacing(1.25)}px solid ${theme.palette.primary.light}`,
      textShadow: `${theme.spacing(0.125)}px
        ${theme.spacing(0.125)}px,
        ${theme.spacing(0.25)}px,
        ${theme.palette.primary.dark}
      `,
    },
  },
  activeItem: {
    color: theme.palette.primary.light,
    borderBottom: `${theme.spacing(1.25)}px solid ${theme.palette.primary.light}`,
    textShadow: `${theme.spacing(0.125)}px
        ${theme.spacing(0.125)}px,
        ${theme.spacing(0.25)}px,
        ${theme.palette.primary.dark}
      `,
  },
  svg: {
    fill: theme.palette.grey[50],
    stroke: theme.palette.grey[50],
    transition: `all ${TIME.CSS.TIMEOUT} ${theme.transitions.easing.easeInOut}`,
    '&:hover': {
      transform: `scale(1.1)`,
      cursor: 'pointer',
    },
  },
  hamburg: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  account: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  mobile: {
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      display: 'none',
    },
  },
  desktop: {
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      display: 'block',
    },
  },
}));

const NavBar = ({ isAuth, subcategories }) => {
  const s = useStyles();
  const searchDocuments = [];
  Object.keys(subcategories).map(cat => searchDocuments.push(...subcategories[cat]));

  return (
    <Grid
      component="section"
      container
      justify="space-between"
      className={s.root}
      alignItems="center"
    >
      <Grid component="section" item>
        <Fade in timeout={500}>
          <Grid
            component="div"
            container
            direction="column"
            alignItems="center"
            className={s.brand}
          >
            <Grid component="div" item>
              <Logo />
            </Grid>
            <Grid component="div" item>
              <Typography variant="body2" className={`${s.slogan} ${s.desktop}`}>
                {NAVIGATION.BRAND.SUBTITLE}
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
      <Grid component="section" item className={`${s.menu} ${s.desktop}`}>
        <Grid component="div" container>
          {NAVIGATION.MENU.map(item => {
            const URL =
              item.url.includes(NAVIGATION.URL.ACCOUNT.ROOT) && isAuth
                ? NAVIGATION.URL.ACCOUNT.PROFILE
                : item.url;
            return (
              <Grid component="nav" key={item.name} item>
                <Typography variant="body2" color="inherit">
                  <Link
                    to={`/${URL}`}
                    replace
                    getProps={({ isPartiallyCurrent }) => ({
                      className: isPartiallyCurrent
                        ? `${s.listItem} ${s.activeItem}`
                        : s.listItem,
                    })}
                  >
                    {item.name}
                  </Link>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid component="section" item className={s.search}>
        <SearchInput
          placeholder="search"
          documents={searchDocuments}
          wrapperClassName={s.searchInput}
        />
      </Grid>
      <Grid component="section" item className={s.mobile}>
        <Grid component="div" container alignItems="center" spacing={2}>
          <Grid component="div" item>
            <Person className={`${s.account} ${s.svg}`} />
          </Grid>
          <Grid component="div" item>
            <Menu className={`${s.hamburg} ${s.svg}`} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

NavBar.propTypes = {
  isAuth: bool,
  subcategories: objectOf(any).isRequired,
};

NavBar.defaultProps = {
  isAuth: false,
};

export default connect(authProps.mapStateToProps)(NavBar);
