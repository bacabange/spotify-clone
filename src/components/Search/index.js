import React from 'react'
import PropTypes from 'prop-types';
import Input from './Input'
import { debounce } from 'lodash';

const Search = ({ onSearch }) => {

  const search = debounce((e) => {
    onSearch(e.target.value);
  }, 500);

  return (
    <div className="search-wrapper">
      <Input placeholder="Busca en spotify tu música favorita" onChange={search} />
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search;