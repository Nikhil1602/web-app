import React from "react";
import { Accordion } from "@material-ui/core";
import UserSummary from "../sub-piece/user-data/user-summary";
import UserDetails from "../sub-piece/user-data/user-details";

const UserData = (props) => {
  return (
    <Accordion id="user-container">
      <UserSummary data={props.data} />
      <UserDetails data={props.data} />
    </Accordion>
  );
};

export default UserData;
