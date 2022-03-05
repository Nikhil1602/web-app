import React from "react";
import { TextField } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const CityStatePin = (props) => {
  return (
    <TextField
      label="City/State"
      onChange={props.handleData("cityState")}
      placeholder="City, State - Pincode"
      variant="outlined"
      style={adjustMargin.topBottom}
      required
    />
  );
};

export default CityStatePin;
