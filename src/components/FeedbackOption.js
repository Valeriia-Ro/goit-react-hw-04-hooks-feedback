import React from "react";
import Section from "./Section";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    <div>
      {options.map((option) => (
        <button
          style={{
            marginRight: "5px",
          }}
          key={option}
          type="button"
          onClick={(e) => {
            onLeaveFeedback(e);
          }}
          name={option}
        >
          {option}
        </button>
      ))}
    </div>
  </Section>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
