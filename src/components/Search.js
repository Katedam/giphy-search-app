import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ query, handleChange }) {
  return (
    <section>
      <input onChange={handleChange} type="text" placeholder="mood" value={query}/>
    </section>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func
};
