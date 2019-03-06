import React, { Component } from "react";
import "./Player.css";

class Player extends Component {
  state = {};
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
    </div>; 
  }
}

export default Player;
