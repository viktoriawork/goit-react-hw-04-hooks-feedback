
import React from "react";
import FeedbackOptions from "./components/reviewsSection/feedBack/FeedbackOptions";
import Statistics from "./components/reviewsSection/statistics/Statistics";
import Section from "./components/Section/Section";
import { useState } from "react";

const App = () => {
  const[good,setGood]= useState(0)
  const[neutral,setNeutral]= useState(0)
  const[bad,setBad]= useState(0)
  const onLeaveFeedback = (option) => {
    console.log(option);
    switch (option)
   {
      case "good":
        setGood (prev=>prev+1)
        break;
        case "neutral":
          setNeutral (prev=>prev+1)
          break;
          case "bad":
        setBad (prev=>prev+1)
        break;
      default:
        break;
    }
    };

    const countTotalFeedback = () =>
    good + neutral + bad;
const total= countTotalFeedback();
    const countPositiveFeedbackPercentage = () => {
  
      const resSum = Math.floor((good * 100) / countTotalFeedback());
      return resSum;
    };
const positiveFeedback = countPositiveFeedbackPercentage();
  return (
    <>
    <Section title={"Please leave feedback"}>
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={["good", "neutral", "bad"]}
      />
    </Section>
    <Section title={"Statistics"}>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positiveFeedback}
      />
    </Section>
  </>
  );
}

export default App;


