import React from "react";
import { Paper } from "@material-ui/core";
import ShowSlot from "../sub-piece/slots-container/show-slot";

const Slots = (props) => {
  return (
    <Paper id="slot-screen">
      <ShowSlot details={props.details} />
    </Paper>
  );
};

export default Slots;
