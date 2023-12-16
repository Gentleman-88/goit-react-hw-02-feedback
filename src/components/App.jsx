import React, { Component } from 'react'
import { Section } from "./Section/Section";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total}
            positivePercentage={this.positivePercentage}
          />
        </Section>
      </div>
    )
  }
  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }))
  }
};