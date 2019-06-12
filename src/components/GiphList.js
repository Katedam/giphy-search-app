import React from 'react';
import PropTypes from 'prop-types';
import GiphItem from './GiphItem';
import style from '../styles/giphList.css';

export default function GiphList({ giphs }) {
  const giphList = giphs.map((giph, i) => {
    return <GiphItem key={i} giph={giph}/>;
  });

  return (
    <ul className={style.list}>{giphList}</ul>
  );
}

GiphList.propTypes = {
  giphs: PropTypes.array.isRequired
};
