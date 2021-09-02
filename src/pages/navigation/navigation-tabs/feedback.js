import React from "react";
import "../../../assets/styles/common/feedback.css";
import FeedbackCard from "../../../components/piece/feedback-card";

const Feedback = () => {
  const [value, setValue] = React.useState(2);

  return (
    <>
      <FeedbackCard value={value} setValue={setValue} />
      <FeedbackCard value={value} setValue={setValue} />
      <FeedbackCard value={value} setValue={setValue} />
    </>
  );
};

export default Feedback;
