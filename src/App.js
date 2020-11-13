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
    this.getQuestion = this.getQuestion.bind(this);
    this.questionReveall = this.questionReveall(this);
  }

  questionReveall() {
    this.setState({
      questionReveal: !this.state.questionReveal,
    });
  }

  getQuestion(q) {
    this.setState({
      questions: q,
    });
  }
  render() {
    console.log(this.state.questions);
    return (
      <div className="App">
        <main id="game-board">
          <div>
            <h1 className="game-board-header">Welcome to Jeopardy</h1>
            <ScoreGroup score={this.state.score} />
            <GetQuestion getQuestion={this.getQuestion} />
            <QuestionGroup
              reveal={this.questionReveall}
              question={this.state.questions}
            />
          </div>
        </main>
      </div>
    );
  }
}
