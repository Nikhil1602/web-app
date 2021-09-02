import React from "react";
import { InputLabel, FormControl } from "@material-ui/core";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";
import { checkType } from "../../../utils/functions";

const ExtraChargeOther = (props) => {
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
        Extra charge for delay
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={props.data.delayCharge.threeFour}
        style={adjustMargin.left}
        label="Amount to be charge"
        placeholder="3 - 4 wheelers"
        onChange={handleObject("delayCharge", "threeFour")}
        disabled={checkType(false, props, "two")}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
      />
    </FormControl>
  );
};

export default ExtraChargeOther;
