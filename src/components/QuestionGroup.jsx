import React, { Component } from "react";

export default class QuestionGroup extends Component {
  render() {
    return (
      <div>
        <div className="question-group-cat-pts">
          <h1>Category</h1>
          <h3>Poinst</h3>
        </div>
        <div className="question-group-qts">
          <button className="question-group-reveal-button">
            Click to Reveal Question
          </button>
          <h2>question</h2>
        </div>
      </div>
    );
  }
}
