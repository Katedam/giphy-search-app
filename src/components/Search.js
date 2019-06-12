import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ query, onChange }) {
  return (
    <section>
      <input onChange={onChange} name="query" type="text" placeholder={query} value={query}/>
    </section>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func
};