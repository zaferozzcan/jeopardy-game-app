import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 800,
      questionReveal: false,
    };

    // bind
  }

  render() {
    return (
      <div className="App">
        <main id="game-board">
          <h1 className="game-board-header">Welcome to Jeopardy</h1>
        </main>
      </div>
    );
  }
}
