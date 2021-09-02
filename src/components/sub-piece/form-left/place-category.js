import React from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { adjustMargin } from "../../../assets/styles/custom";

const PlaceCategory = (props) => {
  return (
    <FormControl variant="outlined" style={adjustMargin.topBottom} required>
      <InputLabel shrink={true} htmlFor="outlined-category-native-simple">
        Place Category
      </InputLabel>
      <Select
        native
        value={props.data.category}
        onChange={props.handleData("category")}
        label="Place Category">
        <option value="hospital">Hospital</option>
        <option value="mall">Shopping Mall</option>
        <option value="bus station">Bus Station</option>
        <option value="railway station">Railway Station</option>
        <option value="university">University/Campus</option>
        <option value="school">School/College</option>
        <option value="stadium">Stadium</option>
        <option value="park/zoo">Park/Zoo</option>
        <option value="airport">Airport</option>
        <option value="others">Others</option>
      </Select>
    </FormControl>
  );
};

export default PlaceCategory;
