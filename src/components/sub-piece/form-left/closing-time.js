import React from "react";
import { TextField } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { shrink } from "../../../utils/container";

const ClosingTime = (props) => {
  return (
    <TextField
      label="Closing Time"
      type="time"
      style={adjustMargin.topBottom}
      onChange={props.handleData("closingTime")}
      variant="outlined"
      InputLabelProps={shrink}
      required
    />
  );
};

export default ClosingTime;
