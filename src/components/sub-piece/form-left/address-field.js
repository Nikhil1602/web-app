import React from "react";
import { TextField } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const Address = (props) => {
  return (
    <TextField
      label="Address"
      style={adjustMargin.topBottom}
      onChange={props.handleData("address")}
      multiline
      rows={4}
      placeholder="Enter your address here..."
      variant="outlined"
      required
    />
  );
};

export default Address;
