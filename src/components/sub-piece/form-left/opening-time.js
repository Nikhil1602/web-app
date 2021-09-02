import React from "react";
import { TextField } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { shrink } from "../../../utils/container";

const OpeningTime = (props) => {
  return (
    <TextField
      label="Opening Time"
      type="time"
      style={adjustMargin.topBottom}
      onChange={props.handleData("openingTime")}
      variant="outlined"
      InputLabelProps={shrink}
      required
    />
  );
};

export default OpeningTime;
