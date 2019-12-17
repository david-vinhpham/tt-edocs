import React from 'react';
import { arrayOf, any, func, string } from 'prop-types';
import { Link, navigate } from 'gatsby';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NAVIGATION from '../../constants/navBar';
import DOCUMENTS from '../../constants/documents';
import { searchProps } from '../commonProps';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: theme.spacing(0),
    background: theme.palette.background.paper,
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    border: `${theme.spacing(0.125)}px solid ${theme.palette.primary.lightRgba}`,
  },
  itemLink: {
    textDecoration: 'none',
  },
  linkDocs: {
    '&:hover': {
      color: theme.palette.primary.dark,
      cursor: 'pointer',
    },
  },
  more: {
    color: theme.palette.secondary.dark,
    padding: theme.spacing(1, 0),
    borderTop: `${theme.spacing(0.125)}px solid ${theme.palette.primary.lightRgba}`,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
    },
  },
}));

const Results = ({ searchText, documents, dispatchSetSearchResults, onClose }) => {
  const s = useStyles();
  const suggested =
    documents.length > DOCUMENTS.SHOW_SEARCH_LIMIT
      ? [...documents.slice(0, DOCUMENTS.SHOW_SEARCH_LIMIT)]
      : [...documents];
  const isMore = documents.length > DOCUMENTS.SHOW_SEARCH_LIMIT;

  const handleMoreResults = () => {
    dispatchSetSearchResults({ searchText, documents });
    navigate('/more-result');
    onClose();
  };

  return (
    <Grid component="section" container className={s.root}>
      <Grid component="div" item>
        <Grid
          component="div"
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {suggested.map(doc => (
            <Grid key={doc.id} component="div" item>
              <Link
                to={`/${NAVIGATION.URL.DOCUMENTS.DETAIL}/${doc.id}`}
                replace
                key={doc.id}
                className={s.itemLink}
                onClick={onClose}
              >
                <Typography variant="body1" color="primary" className={s.linkDocs}>
                  {doc.name}
                </Typography>
              </Link>
            </Grid>
          ))}
          {isMore && (
            <Grid component="div" item>
              <Grid component="div" container justify="center" alignItems="center">
                <Grid component="div" item>
                  <Typography
                    href=""
                    color="secondary"
                    className={s.more}
                    onClick={handleMoreResults}
                  >
                    More results ...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

Results.propTypes = {
  searchText: string.isRequired,
  documents: arrayOf(any).isRequired,
  dispatchSetSearchResults: func.isRequired,
  onClose: func.isRequired,
};

export default connect(null, searchProps.mapDispatchToProps)(Results);
