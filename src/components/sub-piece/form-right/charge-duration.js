import React from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const ChargeDuration = (props) => {
  const handleObject = (prop1, prop2) => (event) => {
    props.setData({ ...props.data, [prop1]: { [prop2]: event.target.value } });
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      style={adjustMargin.exceptRight}
      required>
      <InputLabel shrink={true} variant="outlined">
        Charge Duration
      </InputLabel>
      <Select
        native
        value={props.data.duration.charge}
        onChange={handleObject("duration", "charge")}
        label="Charge Duration">
        <option value={15}>15-min</option>
        <option value={30}>30-min</option>
        <option value={60}>1-hour</option>
      </Select>
    </FormControl>
  );
};

export default ChargeDuration;
