import React, { useEffect } from 'react';
import { func, number, objectOf, any } from 'prop-types';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchInput from '../components/search/search';
import Activities from '../components/activities';
import Statistics from '../components/statistics';
import HomeDocuments from '../components/homeDocuments';
import Layout from '../components/layout';
import { documentsProps } from '../components/commonProps';
import LAYOUT from '../constants/layout';
import NAVIGATION from '../constants/navBar';
import BackgroundSection from '../components/backgroundSection';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  title: {
    width: '100%',
    margin: theme.spacing(0, 0, 5),
    color: theme.palette.grey[50],
  },
  slogan: {
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: 'center',
    color: theme.palette.background.paper,
  },
  searchWrapper: {
    width: '100%',
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      margin: theme.spacing(3, 0, 10),
    },
  },
  searchInput: {
    width: '100%',
    height: theme.spacing(8),
    fontSize: theme.typography.h6.fontSize,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 0),
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.STANDARD)]: {
      minWidth: theme.spacing(65),
    },
  },
  searchIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    strokeWidth: theme.spacing(0.5),
  },
  activityDesktop: {
    display: 'none',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      display: 'block',
    },
  },
  activityMobile: {
    padding: theme.spacing(0, 2),
    display: 'block',
    [theme.breakpoints.up(LAYOUT.RESPONSIVE.MD)]: {
      display: 'none',
    },
  },
}));

const Home = ({
  subcategories,
  documentsCount,
  totalDownloadStatistics,
  dispatchFetchSubCategories,
  dispatchFetchDocumentsCount,
  dispatchFetchStatisticsCount,
}) => {
  const s = useStyles();
  const handleChooseTemplate = () => {
    navigate(NAVIGATION.URL.DOCUMENTS.ALL);
  };

  useEffect(() => {
    dispatchFetchSubCategories();
    dispatchFetchDocumentsCount();
    dispatchFetchStatisticsCount();
  }, []);
  const searchDocuments = [];
  Object.keys(subcategories).map(cat => searchDocuments.push(...subcategories[cat]));

  return (
    <Layout>
      <Grid
        component="section"
        container
        direction="column"
        alignItems="center"
        className={s.root}
      >
        <Grid component="div" item className={s.title}>
          <BackgroundSection>
            <Grid
              component="div"
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" className={s.slogan}>
                CREATE LEGAL DOCUMENTS QUICKLY AND EASILY!
              </Typography>
              <Typography variant="h6" color="inherit" align="center">
                And it&apos;s completely FREE
              </Typography>
            </Grid>
            <Grid component="div" item className={s.searchWrapper}>
              <SearchInput
                documents={searchDocuments}
                placeholder="Search for a document"
                wrapperClassName={s.searchInput}
                iconClassName={s.searchIcon}
              />
            </Grid>
            <Grid
              component="div"
              item
              className={`${s.activityDesktop} ${s.fullWidth}`}
            >
              <Activities
                onChooseTemplate={handleChooseTemplate}
                total={documentsCount}
              />
            </Grid>
          </BackgroundSection>
        </Grid>
        <Grid component="div" item className={`${s.activityMobile} ${s.fullWidth}`}>
          <Activities onChooseTemplate={handleChooseTemplate} total={documentsCount} />
        </Grid>
        <Grid component="div" item className={s.fullWidth}>
          <Statistics total={documentsCount} downloadCount={totalDownloadStatistics} />
        </Grid>
        <Grid component="div" item className={s.fullWidth}>
          <HomeDocuments documents={subcategories} />
        </Grid>
      </Grid>
    </Layout>
  );
};

Home.propTypes = {
  dispatchFetchSubCategories: func.isRequired,
  dispatchFetchDocumentsCount: func.isRequired,
  dispatchFetchStatisticsCount: func.isRequired,
  subcategories: objectOf(any),
  documentsCount: number.isRequired,
  totalDownloadStatistics: number.isRequired,
};

Home.defaultProps = {
  subcategories: {},
};

export default connect(
  documentsProps.mapStateToProps,
  documentsProps.mapDispatchToProps,
)(Home);
