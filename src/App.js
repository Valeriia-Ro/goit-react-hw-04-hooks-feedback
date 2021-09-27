import React, { useState } from "react";
// import PropTypes from "prop-types";
import FeedbackOptions from "./components/FeedbackOption";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Container from "./components/Container";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const varietyOfFeedback = (e) => {
    console.log(e);
    console.log(e.target);
    const { name } = e.target;
    console.log(name);
    switch (name) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number(Math.round((good / countTotalFeedback()) * 100));
  };

  return (
    <Container>
      <FeedbackOptions
        onLeaveFeedback={varietyOfFeedback}
        options={Object.keys({ good, neutral, bad })}
      />

      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}
