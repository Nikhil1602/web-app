import React from "react";
import { TextField } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const PlaceName = (props) => {
  return (
    <TextField
      label="Place Name"
      onChange={props.handleData("placeName")}
      variant="outlined"
      style={adjustMargin.topBottom}
      required
    />
  );
};

export default PlaceName;
