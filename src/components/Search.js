import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/search.css';

export default function Search({ query, onChange }) {
  return (
    <section style={style}>
      <label htmlFor="search">Search
        <input onChange={onChange} id="search" name="query" type="text" placeholder={query} value={query}/>
      </label>
    </section>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func
};
