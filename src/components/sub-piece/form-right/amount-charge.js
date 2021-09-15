import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const AmountCharge = (props) => {
  const handleObject = (event) => {
    props.setData({
      ...props.data,
      amountCharge: { ...props.data.amountCharge, two: event.target.value },
    });
  };

  return (
    <FormControl
      fullWidth
      style={adjustMargin.topBottom}
      variant="outlined"
      required={checkType(true, props, "other")}>
      <InputLabel htmlFor="outlined-adornment-amount">
        Amount to be charge
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.data.amountCharge.two}
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

export default AmountCharge;
