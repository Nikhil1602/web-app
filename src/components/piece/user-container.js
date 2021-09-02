import React from "react";
import { Paper } from "@material-ui/core";
import User from "../sub-piece/user-container/users";
import UserSummary from "../sub-piece/user-container/user-summary";
import ButtonGroup from "../sub-piece/user-container/button-group";

const Users = () => {
  return (
    <Paper id="user-summary-screen">
      <User />
      <UserSummary />
      <ButtonGroup />
    </Paper>
  );
};

export default Users;
