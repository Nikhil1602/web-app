import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, AccordionSummary } from "@material-ui/core";

const UserSummary = (props) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="user">
      <Avatar id="avatar">J</Avatar>
      <h3>{props.data.userName}</h3>
    </AccordionSummary>
  );
};

export default UserSummary;
