import React from "react";
import { Card } from "@material-ui/core";
import CardDetails from "../sub-piece/feedback-card/card-details";
import EditButton from "../sub-piece/feedback-card/edit-button";

const FeedbackCard = (props) => {
  return (
    <Card id="feedback-container" variant="outlined">
      <CardDetails value={props.value} setValue={props.setValue} />
      <EditButton />
    </Card>
  );
};

export default FeedbackCard;
