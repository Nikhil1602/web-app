import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
// import {
//   marginRight,
//   setMargin,
// } from "../../../assets/styles/components/custom/styles";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const ExtraCharge = (props) => {
  const handleObject = (prop1, prop2) => (event) => {
    props.setData({ ...props.data, [prop1]: { [prop2]: event.target.value } });
  };

  return (
    <FormControl
      fullWidth
      style={adjustMargin.topBottom}
      variant="outlined"
      required={checkType(true, props, "other")}>
      <InputLabel htmlFor="outlined-adornment-amount">
        Extra charge for delay
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.data.delayCharge.two}
        label="Amount to be charge"
        placeholder="2 wheelers"
        style={adjustMargin.right}
        onChange={handleObject("delayCharge", "two")}
        disabled={checkType(false, props, "other")}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
      />
    </FormControl>
  );
};

export default ExtraCharge;
