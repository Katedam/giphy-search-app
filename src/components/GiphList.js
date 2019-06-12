import React from 'react';
import PropTypes from 'prop-types';
import GiphItem from './GiphItem';

export default function GiphList({ giphs }) {
  const giphList = giphs.map((giph, i) => {
    return <GiphItem key={i} giph={giph}/>;
  });

  return (
    <ul>{giphList}</ul>
  );
}

GiphList.propTypes = {
  giphs: PropTypes.array.isRequired
};
