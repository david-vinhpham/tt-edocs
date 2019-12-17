import React from 'react';
import { objectOf, any } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Layout from '../components/layout';
import NAVIGATION from '../constants/navBar';
import TIME from '../constants/time';
import { searchProps } from '../components/commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 4),
  },
  content: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 3),
    margin: `${theme.spacing(2)}px auto`,
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
  },
  noUnderline: {
    textDecoration: 'none',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  document: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 2),
    padding: theme.spacing(0, 0, 2),
    borderBottom: `${theme.spacing(0.125)}px dashed ${theme.palette.primary.lightRgba}`,
  },
  icon: {
    visibility: 'visible',
    transform: 'translateX(-20%)',
    transition: `all ${TIME.CSS.TIMEOUT} ease-in`,
    '&:hover': {
      transform: 'translateX(20%)',
    },
  },
  docTitle: {
    fontWeight: theme.typography.fontWeightMedium,
    width: '100%',
    position: 'relative',
    '&::after': {
      transition: `all ${TIME.CSS.TIMEOUT} ease-in`,
      content: '""',
      position: 'absolute',
      width: '0%',
      height: theme.spacing(0.25),
      top: '100%',
      left: 0,
      borderBottom: `${theme.spacing(0.125)}px solid ${theme.palette.primary.main}`,
    },
    '&:hover::after': {
      width: '100%',
    },
  },
}));

const MoreResults = ({ searchResults }) => {
  const s = useStyles();
  const { searchText, documents } = searchResults;
  const total = documents.length;

  return (
    <Layout>
      <Grid component="section" container direction="column" className={s.root}>
        <Grid component="div" item>
          <Typography variant="h6" color="primary" className={s.title}>
            Search Results
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {total} documents found for <strong>{searchText}</strong>, in order of
            relevance
          </Typography>
        </Grid>
        <Grid component="div" item className={s.content}>
          <Grid
            component="div"
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {searchResults.documents.map(doc => {
              const { id, name } = doc;
              return (
                <Grid
                  key={id}
                  component="div"
                  container
                  justify="flex-start"
                  alignItems="flex-start"
                  className={s.document}
                >
                  <Link
                    to={`/${NAVIGATION.URL.DOCUMENTS.DETAIL}/${id}`}
                    className={s.noUnderline}
                  >
                    <Typography variant="h6" color="primary" className={s.docTitle}>
                      {name}
                    </Typography>
                  </Link>
                  <ChevronRight color="primary" className={s.icon} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

MoreResults.propTypes = {
  searchResults: objectOf(any),
};

MoreResults.defaultProps = {
  searchResults: {},
};

export default connect(searchProps.mapStateToProps)(MoreResults);
