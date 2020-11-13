import React, { Component } from "react";

export default class ScoreGroup extends Component {
  render() {
    return (
      <div className="score-group">
        <h1 className="score-group-header">Score:</h1>
        <button className="score-group-button button-pink">Decrease</button>
        <button className="score-group-button button-blue">Increase</button>
        <button className="score-group-button button-red">Reset</button>
      </div>
    );
  }
}
