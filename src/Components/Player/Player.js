import React, { Component } from "react";
import "./Player.css";
// import Song from './Song/Song.js';
// import Artist from './Artist/Artist.js';

class Player extends Component {

  state = {
    current: {
      song: 'testing',
      artist: 'oli is a nice guy',
      time: {
        elapsed: '',
        left: ''
      }
    }
  }

  render() {

    return <div className="player">
        <div className="player-Flex-Container"> 
            <div className="player-Left">
            </div>
            <div className="player-Left-Center">
            </div>
            <div className="player-middle">
                <div className="shuffle">
                    <button className="shuffle-Button">Shuffle</button>
                </div>
                <div className="back">
                    <button className="back-Button">Back</button>
                </div> 
                <div className="play">
                    <button className="play-Button">Play</button>
                </div>
                <div className="forward">
                    <button className="forward-Button">Forward</button>
                </div>
                <div className="repeat">
                    <button className="repeat-Button">Repeat</button>
                </div>
                <div className="timer">
                    Timer
                </div>
            </div>
            <div className="player-Right-Center">
            </div>
            <div className="player-Right">
                <div className="volume">
                    <button className="volume-Button">Volume</button> 
                </div>
            </div>
        </div>
    </div>
  }
}


//Entire player bar
export default Player;
