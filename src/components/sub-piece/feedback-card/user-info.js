import React from "react";
import { Typography, Avatar } from "@material-ui/core";

const UserInfo = () => {
  return (
    <>
      <Avatar id="avatar-feedback">J</Avatar>
      <Typography variant="h5" id="feedback-username" component="h2">
        John Cena
      </Typography>
    </>
  );
};

export default UserInfo;
