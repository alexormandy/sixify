import React, {Component} from 'react';
import './MediaControls.css';

class MediaControls extends Component {
  render() {
    return(
      <div className="controls-top">
        <ShuffleButton className="control-button shuffle" />
        <BackButton className="control-button back" />
        <PlayButton className="control-button play" />
        <SkipButton className="control-button skip" />
        <RepeatButton className="control-button repeat" />
      </div>
    );
  }
}

const ShuffleButton = () => {
  return(
    <p>ff</p>
  );
}

const BackButton = () => {
  return(
    <p>ff</p>
  );
}

const PlayButton = () => {
  return(
    <p>ff</p>
  );
}

const SkipButton = () => {
  return(
    <p>ff</p>
  );
}

const RepeatButton = () => {
  return(
    <p>ff</p>
  );
}

export default MediaControls;