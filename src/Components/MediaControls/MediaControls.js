import React, {Component} from 'react';
import './MediaControls.css';

class MediaControls extends Component {
  render() {
    return(
      <div className="controls-top">
        <ShuffleButton />
        <BackButton />
        <PlayButton />
        <SkipButton />
        <RepeatButton />
      </div>
    );
  }
}

const ShuffleButton = () => {
  return(
    <i className="fas fa-random"></i>
  );
}

const BackButton = () => {
  return(
    <button className="control-button back">Back</button>
  );
}

const PlayButton = () => {
  return(
    <button className="control-button play">Play</button>
  );
}

const SkipButton = () => {
  return(
    <button className="control-button skip">Skip</button>
  );
}

const RepeatButton = () => {
  return(
    <button className="control-button repeat">Repeat</button>
  );
}

export default MediaControls;