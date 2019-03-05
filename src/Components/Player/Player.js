import React, { Component } from "react";
import "./Player.css";
import Song from './Song/Song.js';
import Artist from './Artist/Artist.js';

class Player extends Component {

  state = {
    current: {
      song: 'testing',
      artist: 'oli is a cunt',
      time: {
        elapsed: '',
        left: ''
      }
    }
  }

  render() {

    return(
      //Player bar container (grid)
      <div className="player">
        <div className="now-playing">
          <Song title={this.state.current.song} />
          <Artist name={this.state.current.artist} />
        </div>
        <div className="media-controls">

        </div>
        <div className="volume-control">

        </div>
      </div>
    );
  }
}


//Entire player bar
export default Player;
