import React from "react";
import { Button, Paper, Avatar, ThemeProvider } from "@material-ui/core";
import theme from "../../../assets/theme";

const Refund = (props) => {
  return (
    <Paper id="refunds">
      <Avatar id="avatar">J</Avatar>
      <h3 id="user-name">{props.data}</h3>
      <ThemeProvider theme={theme}>
        <Button
          id="button-refund"
          variant="outlined"
          size="medium"
          color="primary">
          Refund
        </Button>
      </ThemeProvider>
    </Paper>
  );
};

export default Refund;
