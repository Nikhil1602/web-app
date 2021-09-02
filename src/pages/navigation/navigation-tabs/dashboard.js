import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import "../../../assets/styles/common/dashboard.css";
import Slots from "../../../components/piece/slots-container";
import Users from "../../../components/piece/user-container";

const Dashboard = () => {
  let details = JSON.parse(window.localStorage.getItem("info"));

  return (
    <Grid container spacing={3}>
      <Grid item xs={8} id="slot-container">
        <Slots details={details} />
      </Grid>
      <Grid item xs={4} id="user-summary-container">
        <Users />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
