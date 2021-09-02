import React from "react";
import { Grid, Button } from "@material-ui/core";
import theme from "../../../assets/theme";
import { ThemeProvider } from "@material-ui/styles";

const ButtonGroup = () => {
  return (
    <Grid item xs={12} id="button-group">
      <ThemeProvider theme={theme}>
        <Button id="button-track" color="primary" variant="outlined">
          Track
        </Button>
        <Button id="button-details" color="primary" variant="outlined">
          View Details
        </Button>
      </ThemeProvider>
    </Grid>
  );
};

export default ButtonGroup;
