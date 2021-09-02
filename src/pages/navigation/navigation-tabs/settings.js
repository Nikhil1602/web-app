import React from "react";
import { Grid, Button, ThemeProvider } from "@material-ui/core";
import FormLeft from "../../../components/piece/form-left";
import FormRight from "../../../components/piece/form-right";
import theme from "../../../assets/theme";
import "../../../assets/styles/common/settings.css";

const Settings = () => {
  const [data, setData] = React.useState({
    placeName: "",
    category: "others",
    address: "",
    openingTime: "",
    closingTime: "",
    workingDays: [],
    vehicleType: "two",
    amountCharge: {
      two: "",
      threeFour: "",
    },
    delayCharge: {
      two: "",
      threeFour: "",
    },
    duration: {
      delay: 15,
      charge: 60,
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormLeft data={data} setData={setData} theme={theme} />
      </Grid>
      <Grid item xs={6}>
        <FormRight data={data} setData={setData} theme={theme} />
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            id="button-save">
            Save
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            id="button-reset">
            Reset
          </Button>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default Settings;
