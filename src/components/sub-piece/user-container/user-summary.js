import React from "react";
import { Grid } from "@material-ui/core";

const UserSummary = () => {
  return (
    <Grid item xs={12} id="user-summary-data-container">
      <ul id="user-summary-data">
        <li>Slot No.: 1</li>
        <li>Phone: 9876543210</li>
        <li>Status: Running</li>
        <li>Time Slot: 4 hours</li>
      </ul>
    </Grid>
  );
};

export default UserSummary;
