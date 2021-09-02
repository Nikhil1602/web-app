import React from "react";
import { ThemeProvider, FormControl } from "@material-ui/core";
import PlaceName from "../sub-piece/form-left/place-name";
import PlaceCategory from "../sub-piece/form-left/place-category";
import Address from "../sub-piece/form-left/address-field";
import OpeningTime from "../sub-piece/form-left/opening-time";
import WorkingDays from "../sub-piece/form-left/working-days";

const FormLeft = (props) => {
  const handleData = (prop) => (event) => {
    props.setData({ ...props.data, [prop]: event.target.value });
  };

  return (
    <form id="left-form-container" autoComplete="off">
      <ThemeProvider theme={props.theme}>
        <FormControl variant="outlined" id="left-form-fields" required>
          <PlaceName handleData={handleData} />
          <PlaceCategory data={props.data} handleData={handleData} />
          <Address handleData={handleData} />
          <OpeningTime handleData={handleData} />
          <WorkingDays handleData={handleData} data={props.data} />
        </FormControl>
      </ThemeProvider>
    </form>
  );
};

export default FormLeft;
