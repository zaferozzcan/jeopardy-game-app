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
    this.getQuestions = this.getQuestions.bind(this);
  }

  render() {
    return (
      <div className="App">
        <main id="game-board"></main>
        <h1>Welcome to Jeopardy</h1>
      </div>
    );
  }
}
