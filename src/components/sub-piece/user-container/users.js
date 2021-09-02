import React from "react";
import { Grid, Avatar } from "@material-ui/core";

const User = () => {
  return (
    <Grid item xs={12} id="user-summary-details-container">
      <Avatar id="user-summary-avatar">J</Avatar>
      <div id="user-summary-details">
        <h4>John@1234</h4>
        <p>User</p>
      </div>
    </Grid>
  );
};

export default User;
