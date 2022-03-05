import React from "react";
import { Grid, Button, ThemeProvider } from "@material-ui/core";
import FormLeft from "../../../components/piece/form-left";
import FormRight from "../../../components/piece/form-right";
import theme from "../../../assets/theme";
import "../../../assets/styles/common/settings.css";
import { adminData } from "../../../utils/container";
import Database from "../../../backend/database";
import { formAlert, isFormFilled } from "../../../utils/functions";

const Settings = () => {
  const [data, setData] = React.useState(adminData);

  const submitForm = () => {
    if (isFormFilled(data)) {
      Database(data, "admin-data");
      formAlert("Form submitted successfully!", true);
    }
  };

  const resetForm = () => {
    console.log("reset");
    setData(adminData);
  };

  return (
    <Grid container spacing={2}>
      <ThemeProvider theme={theme}>
        <Grid item xs={6}>
          <FormLeft data={data} setData={setData} theme={theme} />
        </Grid>
        <Grid item xs={6}>
          <FormRight data={data} setData={setData} theme={theme} />
          <Button
            variant="outlined"
            size="large"
            onClick={submitForm}
            color="primary"
            id="button-save">
            Submit
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={resetForm}
            color="primary"
            id="button-reset">
            Reset
          </Button>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
};

export default Settings;
