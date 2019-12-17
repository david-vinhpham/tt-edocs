import React, { useState } from 'react';
import { string, arrayOf, any } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import Collapse from '@material-ui/core/Collapse';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import INPUT from '../../constants/input';
import Results from './results';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  collapse: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    background: theme.palette.background.default,
  },
  search: {
    background: theme.palette.grey[50],
    borderRadius: theme.spacing(5),
    padding: theme.spacing(0.5, 2, 0.625, 2.5),
    color: theme.palette.primary.dark,
    alignItems: 'center',
  },
  icon: {
    fill: theme.palette.error.dark,
    transition: `all 0.3s ${theme.transitions.easing.easeOut}`,
    '&:hover': {
      cursor: 'pointer',
      transform: `translateX(${theme.spacing(1)}px)`,
    },
  },
  inputSearchResult: {
    position: 'relative',
    margin: 'auto',
  },
}));

const SearchInput = ({ placeholder, wrapperClassName, iconClassName, documents }) => {
  const s = useStyles();
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState({ found: false, results: [] });
  const handleSearch = evt => {
    if (evt) evt.preventDefault();
    const {
      target: { value },
    } = evt;
    setSearchText(value);
    let results = [];
    if (value.length > 2) {
      results = documents.filter(doc =>
        doc.name.toLowerCase().includes(value.toLowerCase()),
      );
      setSearchResult({
        found: !!results.length,
        results,
      });
    } else {
      setSearchResult({ found: false, results: [] });
    }
  };
  const handleCloseSearch = () => {
    setSearchResult({ found: false, results: [] });
    setSearchText('');
  };
  const EndAdornment = (
    <InputAdornment position="end">
      {searchResult.results.length < 1 ? (
        <Search className={`${s.icon} ${iconClassName}`} />
      ) : (
        <Clear className={`${s.icon} ${iconClassName}`} onClick={handleCloseSearch} />
      )}
    </InputAdornment>
  );
  return (
    <Grid component="div" container className={s.root}>
      <Grid component="div" item className={s.inputSearchResult}>
        <InputBase
          fullWidth
          placeholder={placeholder}
          name={INPUT.SEARCH.NAME}
          value={searchText}
          onChange={handleSearch}
          endAdornment={EndAdornment}
          className={`${s.search} ${wrapperClassName}`}
        />
        <Collapse
          component="div"
          timeout="auto"
          in={searchResult.found}
          className={s.collapse}
        >
          <Results
            searchText={searchText}
            documents={searchResult.results}
            onClose={handleCloseSearch}
          />
        </Collapse>
      </Grid>
    </Grid>
  );
};

SearchInput.propTypes = {
  placeholder: string,
  wrapperClassName: string,
  iconClassName: string,
  documents: arrayOf(any),
};

SearchInput.defaultProps = {
  placeholder: INPUT.SEARCH.PH,
  wrapperClassName: '',
  iconClassName: '',
  documents: [],
};

export default SearchInput;
