import React from 'react';
import './Song.css';

const Song = (props) => {
  return(
    <span>{props.title}</span>
  );
}

export default Song;