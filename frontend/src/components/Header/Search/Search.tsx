import React, { useRef } from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';

import { useStyles } from '../useStyles';
import { onSearch } from '../../../redux/countriesReducer';

const Search = ({ searchValue, ...props }: { searchValue: string; onSearch: any }) => {
  const classes = useStyles();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: any) => {
    props.onSearch(event.target.value);
  };

  const handleSearchClear = () => {
    props.onSearch('');
  };

  const handleEnterPress = (event: any) => {
    if (event.key === 'Enter') {
      searchRef?.current?.blur();
    }
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        autoFocus
        inputRef={searchRef}
        placeholder="Search…"
        value={searchValue}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <button type="button" className={classes.clear} onClick={handleSearchClear}>
        <ClearIcon />
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    searchValue: state.countries.searchValue,
  };
};

export default connect(mapStateToProps, { onSearch })(Search);
