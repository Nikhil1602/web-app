import React from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const VehicleCategory = (props) => {
  return (
    <FormControl
      fullWidth
      style={adjustMargin.topBottom}
      variant="outlined"
      required>
      <InputLabel shrink={true} htmlFor="outlined-vehicle-native-simple">
        Vehicle Category
      </InputLabel>
      <Select
        native
        id="outlined-vehicle-native-simple"
        value={props.data.vehicleType}
        onChange={props.handleData("vehicleType")}
        label="Vehicle Category">
        <option value="two">Two-Wheelers</option>
        <option value="three">Three-Wheelers</option>
        <option value="four">Four-Wheelers</option>
        <option value="all">All</option>
      </Select>
    </FormControl>
  );
};

export default VehicleCategory;
