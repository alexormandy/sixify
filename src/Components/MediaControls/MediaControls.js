import React, {Component} from 'react';
import './MediaControls.css';

class MediaControls extends Component {
  render() {
    return(
      <div>
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
    <i class="fas fa-step-backward"></i>
  );
}

const PlayButton = () => {
  return(
    <i class="fas fa-play"></i>
    // <i class="fas fa-pause"></i>
  );
}

const SkipButton = () => {
  return(
    <i class="fas fa-step-forward"></i>
  );
}

const RepeatButton = () => {
  return(
    <i class="fas fa-redo"></i>
  );
}

export default MediaControls;