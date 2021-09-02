import React from "react";
import { Grid, AccordionDetails } from "@material-ui/core";

const UserDetails = (props) => {
  return (
    <AccordionDetails>
      <Grid item xs={6} id="user-info-first-column">
        <h4>Vehicle Number : {props.data.Vnum}</h4>
        <h4>Phone Number : {props.data.Pnum}</h4>
        <h4>Status : {props.data.status}</h4>
      </Grid>
      <Grid item xs={6} id="user-info-second-column">
        <h4>Slot Number : {props.data.Snum}</h4>
        <h4>Vehicle Type : {props.data.Vtype}</h4>
        <h4>Parking Time : {props.data.Ptime}</h4>
      </Grid>
    </AccordionDetails>
  );
};

export default UserDetails;
