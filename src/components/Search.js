import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/search.css';

export default function Search({ query, onChange }) {
  return (
    <section style={style}>
      <input onChange={onChange} name="query" type="text" placeholder={query} value={query}/>
    </section>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func
};
