import React from "react";
import { CardContent } from "@material-ui/core";
import UserInfo from "./user-info";
import Ratings from "./ratings";

const CardDetails = (props) => {
  return (
    <CardContent>
      <UserInfo />
      <div id="feedback-text">"It helps me a lot thanks :)"</div>
      <Ratings value={props.value} setValue={props.setValue} />
    </CardContent>
  );
};

export default CardDetails;
