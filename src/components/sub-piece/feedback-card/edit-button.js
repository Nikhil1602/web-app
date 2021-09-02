import React from "react";
import { ThemeProvider, CardActions, Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import theme from "../../../assets/theme";

const EditButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardActions id="edit-button-container">
        <Fab id="edit-button" color="primary" aria-label="edit">
          <EditIcon id="edit-icon" />
        </Fab>
      </CardActions>
    </ThemeProvider>
  );
};

export default EditButton;
