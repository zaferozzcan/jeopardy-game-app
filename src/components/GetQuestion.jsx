import React, { Component } from "react";

export default class GetQuestion extends Component {
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
      <div className="get-question">
        <h1>Let's Play</h1>
        <form onSubmit={this.getQuestions}>
          <input type="submit" value="Get Question" />
        </form>
      </div>
    );
  }
}
