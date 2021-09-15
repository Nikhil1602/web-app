import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const ExtraCharge = (props) => {
  const handleObject = (event) => {
    props.setData({
      ...props.data,
      delayCharge: { ...props.data.delayCharge, two: event.target.value },
    });
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
        onChange={handleObject}
        disabled={checkType(false, props, "other")}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
      />
    </FormControl>
  );
};

export default ExtraCharge;
