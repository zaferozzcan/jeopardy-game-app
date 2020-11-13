import "./App.css";

import React, { Component } from "react";
import ScoreGroup from "./components/ScoreGroup";
import GetQuestion from "./components/GetQuestion";
import QuestionGroup from "./components/QuestionGroup";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 800,
      questionReveal: false,
    };

    // bind
    this.getQuestion = this.getQuestion.bind();
  }

  getQuestion(q) {
    console.log(q);
  }
  render() {
    return (
      <div className="App">
        <main id="game-board">
          <h1 className="game-board-header">Welcome to Jeopardy</h1>
          <ScoreGroup />
          <GetQuestion getQuestion={this.getQuestion} />
          <QuestionGroup />
        </main>
      </div>
    );
  }
}
