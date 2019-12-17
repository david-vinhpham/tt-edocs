import React from 'react';
import { objectOf, any } from 'prop-types';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NAVIGATION from '../constants/navBar';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 5),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  categoryLabel: {
    textTransform: 'capitalize',
    margin: theme.spacing(2, 0),
    fontWeight: theme.typography.fontWeightBold,
  },
  list: {
    padding: theme.spacing(0, 1.5),
  },
  listItem: {
    position: 'relative',
    lineHeight: theme.spacing(0.25),
    '&::before': {
      position: 'absolute',
      content: '""',
      background: theme.palette.grey[500],
      width: theme.spacing(0.7),
      height: theme.spacing(0.7),
      borderRadius: '50%',
      left: theme.spacing(-1),
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&::first-letter': {
      paddingLeft: theme.spacing(0.5),
    },
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.dark,
    },
  },
  linkDocs: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
}));

const HomeDocuments = ({ documents }) => {
  const s = useStyles();

  return (
    <Grid
      component="section"
      container
      direction="column"
      justify="center"
      className={s.root}
    >
      <Grid component="div" item>
        <Typography variant="h5" color="textPrimary" className={s.title} align="center">
          SAMPLE DOCUMENTS TO DOWNLOAD
        </Typography>
      </Grid>
      <Grid component="div" item>
        <Grid component="div" container justify="space-evenly" alignItems="flex-start">
          {Object.keys(documents).map(cat => (
            <Grid key={cat} component="div" item>
              <Typography variant="h5" color="textPrimary" className={s.categoryLabel}>
                {cat}
              </Typography>
              <Grid
                component="div"
                container
                alignItems="flex-start"
                direction="column"
                className={s.list}
              >
                {documents[cat].map(item => (
                  <Link
                    key={item.id}
                    to={`/${NAVIGATION.URL.DOCUMENTS.DETAIL}/${item.id}`}
                    replace
                    className={s.linkDocs}
                  >
                    <Typography variant="body1" color="inherit" className={s.listItem}>
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

HomeDocuments.propTypes = {
  documents: objectOf(any).isRequired,
};

export default HomeDocuments;
