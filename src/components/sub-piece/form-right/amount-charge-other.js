import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const AmountChargeOther = (props) => {
  const handleObject = (prop1, prop2) => (event) => {
    props.setData({ ...props.data, [prop1]: { [prop2]: event.target.value } });
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
        onChange={handleObject("amountCharge", "threeFour")}
        disabled={checkType(false, props, "two")}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
      />
    </FormControl>
  );
};

export default AmountChargeOther;
