import React from "react";
import { ThemeProvider, Grid } from "@material-ui/core";
import VehicleCategory from "../sub-piece/form-right/vehicle-category";
import AmountCharge from "../sub-piece/form-right/amount-charge";
import AmountChargeOther from "../sub-piece/form-right/amount-charge-other";
import ExtraCharge from "../sub-piece/form-right/extra-charge";
import ExtraChargeOther from "../sub-piece/form-right/extra-charge-other";
import DelayDuration from "../sub-piece/form-right/delay-duration";
import ChargeDuration from "../sub-piece/form-right/charge-duration";
import { inline } from "../../assets/styles/custom";

const FormRight = (props) => {
  const handleData = (prop) => (event) => {
    props.setData({ ...props.data, [prop]: event.target.value });
  };

  return (
    <form id="right-form-container" autoComplete="off">
      <ThemeProvider theme={props.theme}>
        <VehicleCategory data={props.data} handleData={handleData} />
        <Grid style={inline}>
          <AmountCharge data={props.data} setData={props.setData} />
          <AmountChargeOther data={props.data} setData={props.setData} />
        </Grid>
        <Grid style={inline}>
          <ExtraCharge data={props.data} setData={props.setData} />
          <ExtraChargeOther data={props.data} setData={props.setData} />
        </Grid>
        <Grid style={inline}>
          <DelayDuration data={props.data} setData={props.setData} />
          <ChargeDuration data={props.data} setData={props.setData} />
        </Grid>
      </ThemeProvider>
    </form>
  );
};

export default FormRight;
