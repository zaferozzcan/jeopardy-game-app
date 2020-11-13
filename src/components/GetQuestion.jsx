import React, { Component } from "react";

export default class GetQuestion extends Component {
  constructor() {
    super();
    this.getQuestions = this.getQuestions.bind(this);
  }
  getQuestions(event) {
    fetch("http://jservice.io/api/random")
      .then((response) => {
        return response.json();
      })
      .then(
        (json) => this.props.getQuestion(json),
        (err) => console.log(err)
      );
  }
  render() {
    return (
      <div className="get-question">
        <h1>Let's Play</h1>
        <form>
          <input
            onClick={this.getQuestions}
            type="button"
            value="Get Question"
          />
        </form>
      </div>
    );
  }
}
