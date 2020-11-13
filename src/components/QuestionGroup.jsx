import React, { Component } from "react";

export default class QuestionGroup extends Component {
  constructor(props) {
    super(props);
    this.reveall = this.reveall.bind(this);
  }

  reveall() {
    this.props.reveal();
  }

  render() {
    return (
      <div>
        <div className="question-group-cat-pts">
          {/* category */}
          <h2>
            <span className="span-header">Category:</span>
            <span>
              {this.props.question[0]
                ? this.props.question[0].category.title
                : "To get a category click the button above"}
            </span>
          </h2>
          {/* point */}
          <h3>
            {" "}
            <span className="span-header">Point:</span>
            <span>
              {this.props.question[0] ? this.props.question[0].value : null}
            </span>
          </h3>
          {/* answer */}
          <h4>
            <span className="span-header">Answer:</span>
            <span>
              {this.props.question[0] ? this.props.question[0].answer : null}
            </span>
          </h4>
        </div>

        {/* question */}

        <div className="question-group-qts">
          <button
            onClick={this.reveall}
            className="question-group-reveal-button"
          >
            Click to Reveal Question
          </button>
          <div>
            <span className="span-header">
              {this.props.question[0]
                ? this.props.question[0].questionReveal
                  ? "Question:"
                  : null
                : null}
            </span>
            <h2>
              <span>
                {this.props.question[0]
                  ? this.props.question[0].questionReveal
                    ? this.props.question[0].question
                    : null
                  : null}
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
