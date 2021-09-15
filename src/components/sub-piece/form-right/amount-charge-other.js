import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const AmountChargeOther = (props) => {
  const handleObject = (event) => {
    props.setData({
      ...props.data,
      amountCharge: {
        ...props.data.amountCharge,
        threeFour: event.target.value,
      },
    });
  };

  return (
    <FormControl
      fullWidth
      style={adjustMargin.topBottom}
      variant="outlined"
      required={checkType(true, props, "two")}>
      <InputLabel htmlFor="outlined-adornment-amount">
        Amount to be charge
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.data.amountCharge.threeFour}
        label="Amount to be charge"
        placeholder="3 - 4 wheelers"
        style={adjustMargin.left}
        onChange={handleObject}
        disabled={checkType(false, props, "two")}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
      />
    </FormControl>
  );
};

export default AmountChargeOther;
