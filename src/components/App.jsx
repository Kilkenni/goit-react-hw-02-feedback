import React from "react";

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onFeedbackClick = (event) => {
    const statName = event.currentTarget.name;
    this.setState((currentState) => {
      return { [statName] : currentState[statName] + 1};
    });
  }

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((totalFeedback, feedbackTypeAmount) => {
      return totalFeedback + feedbackTypeAmount;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce((totalFeedback, feedbackTypeAmount) => {
      return totalFeedback + feedbackTypeAmount;
    }, 0);

    if (total === 0) {
      return false;
    }

    return ( Math.round((this.state.good / total * 100) * 100) / 100);
  }

  render() {
    return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        // textTransform: 'uppercase',
        color: '#010101',
      }}
      >
        {/* <h1>Welcome to Expresso</h1> */}
        <h2>Please leave feedback</h2>
        
        <button type="button" name="good" onClick={this.onFeedbackClick}>Good</button>
        <button type="button" name="neutral" onClick={this.onFeedbackClick}>Neutral</button>
        <button type="button" name="bad" onClick={this.onFeedbackClick}>Bad</button>

        <h2>Coffee statistics</h2>
        <p>Good service: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad service: {this.state.bad}</p>
        <p>Total feedback: {this.countTotalFeedback()}</p>
        <p>Positive feedback: { this.countPositiveFeedbackPercentage() === false? "unavailable" : this.countPositiveFeedbackPercentage() + "%" }</p>
    </div>
  );
  }
}
