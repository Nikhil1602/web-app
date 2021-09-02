import React from "react";
import { Grid } from "@material-ui/core";
import Refund from "../sub-piece/user-refund/refunds";

const UserRefund = (props) => {
  return (
    <Grid item xs={12} id="user-refunds">
      <Refund data={props.data} />
    </Grid>
  );
};

export default UserRefund;
