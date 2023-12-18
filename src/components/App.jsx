import React, { Component } from 'react'
import { Section } from "./Section/Section";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
  const total = this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage = () => {
    const positivePercentage = this.total ? Math.round((this.state.good / this.total) * 100) : 0;
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
        {this.total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    )
  }
  handleFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }))
  }
};