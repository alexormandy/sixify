import React, { Component } from "react";
import "./Player.css";
// import CurrentSong from '../CurrentSong/CurrentSong';
// import CurrentArtist from '../CurrentArtist/CurrentArtist';
import MediaControls from '../MediaControls/MediaControls';

class Player extends Component {
  state = {
    previousSong: {
      song: "",
      artist: ""
    },
    currentSong: {
      song: "testing",
      artist: "oli is a nice guy",
      time: {
        elapsed: "",
        left: ""
      }
    },
    nextSong: {
      song: "",
      artist: ""
    }
  };

  render() {
    return (
      <div className="player">
        <div className="player-left">
        </div>
        <div className="player-middle">
          <div className="controls-top">
            {/* <button className="control-button shuffle">Shuffle</button>
            <button className="control-button back">Back</button>
            <button className="control-button play">Play</button>
            <button className="control-button skip">Forward</button>
            <button className="control-button repeat">Repeat</button> */}
            <MediaControls />
          </div>

          <div className="controls-bottom">
            <div className="timer">
              {/* <Timer /> */}
            </div>
          </div>
        </div>
        <div className="player-Right">
          {/* <Volume /> */}
          <button className="control-button volume">Volume</button>
        </div>
      </div>
    );
  }
}

//Entire player bar
export default Player;
