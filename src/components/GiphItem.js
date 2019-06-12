import React from 'react';
import PropTypes from 'prop-types';

export default function GiphItem({ giph }) {
  const url = giph.images.original.url;
  const title = giph.title;
  return (
    <li><img src={url} alt={title}/></li>
  );
}

GiphItem.propTypes = {
  giph: PropTypes.object.isRequired
};
