import React from "react";

import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import FeedbackOptions from "./FeedbackOptions";

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

    // event.currentTarget.blur();
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
        fontSize: 20,
        // textTransform: 'uppercase',
        color: '#010101',
      }}
      >
        <h1>Welcome to Expresso</h1>
        <p>Your feedback is crucial to us and we absolutely totally positively don't throw it out of the window. <br></br> We don't even have windows! That being said...</p>
        <Section title="How do you like our coffee?">
          <FeedbackOptions
            options={[
              { name: "good", title: "Yum!" },
              { name: "neutral", title: "Okay-ish" },
              { name: "bad", title: "Tastes like dirt"},
            ]}
            onLeaveFeedback={this.onFeedbackClick}
          ></FeedbackOptions>
        </Section>   

        <Section title="Coffee statistics">
          {this.countTotalFeedback() === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}>
            </Statistics>
          }
        </Section>
    </div>
  );
  }
}
