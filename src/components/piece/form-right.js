import React, { useState } from "react";
import { ThemeProvider, Grid, Button } from "@material-ui/core";
import VehicleCategory from "../sub-piece/form-right/vehicle-category";
import AmountCharge from "../sub-piece/form-right/amount-charge";
import AmountChargeOther from "../sub-piece/form-right/amount-charge-other";
import ExtraCharge from "../sub-piece/form-right/extra-charge";
import ExtraChargeOther from "../sub-piece/form-right/extra-charge-other";
import DelayDuration from "../sub-piece/form-right/delay-duration";
import ChargeDuration from "../sub-piece/form-right/charge-duration";
import { inline, location_button } from "../../assets/styles/custom";
import PreviewMap from "../sub-piece/form-right/preview-map";
import { defaultLocation } from "../../utils/container";

const FormRight = (props) => {
  const [preview, setPreview] = useState(defaultLocation);
  const [show, setShow] = useState(false);

  const handleData = (prop) => (event) => {
    props.setData({ ...props.data, [prop]: event.target.value });
  };

  const handlePreview = (e) => {
    if (show === false) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPreview({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
      setTimeout(() => {
        setShow(true);
      }, 1000);
    }
    setTimeout(() => {
      props.setData({
        ...props.data,
        location: { latitude: preview.lat, longitude: preview.lng },
      });
    }, 500);
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
        {show && <PreviewMap preview={preview} setPreview={setPreview} />}
        <Button
          style={location_button}
          onClick={handlePreview}
          variant="contained"
          color="primary">
          Set Location
        </Button>
      </ThemeProvider>
    </form>
  );
};

export default FormRight;
