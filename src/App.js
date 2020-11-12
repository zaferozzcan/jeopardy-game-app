import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
    };

    // bind
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(event) {
    event.preventDefault();
    fetch("http://jservice.io/api/random")
      .then((response) => {
        return response.json();
      })
      .then(
        (json) =>
          this.setState({
            questions: json,
          }),
        (err) => console.log(err)
      );
  }

  render() {
    return (
      <div className="App">
        <main id="game-board">
          <div className="container">
            <h1>Welcome to Jeopardy</h1>
            <form onSubmit={this.getQuestions}>
              <input type="submit" value="Get Question" />
            </form>
          </div>
        </main>
      </div>
    );
  }
}
