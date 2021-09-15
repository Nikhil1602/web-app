import React from "react";
import ReactDOM from "react-dom";
import { tab, details } from "../container";
import { auth } from "../../firebase";
import Navigation from "../../pages/navigation";
import PlaceDetails from "../../components/piece/place-detail";
import { adjustWidth } from "../../assets/styles/custom";
import { Alert } from "@material-ui/lab";
import { Grid, Paper } from "@material-ui/core";

const generateName = (name) => {
  if (name == "" || name == null) {
    const user = auth.currentUser;
    return user.displayName;
  }
  return name;
};

const switchMenu = (item) => {
  ReactDOM.render(
    item == "settings" ? tab.settings : <PlaceDetails />,
    document.getElementById("header")
  );
  if (item != "log-out") {
    ReactDOM.render(
      item == "dashboard"
        ? tab.dashboard
        : item == "add-slots"
        ? tab.addslots
        : item == "cancel-refund"
        ? tab.cancelrefund
        : item == "user-details"
        ? tab.userdetails
        : item == "feedback"
        ? tab.feedback
        : null,
      document.getElementById("screen")
    );
  } else {
    ReactDOM.render(tab.logout, document.getElementById("root"));
    auth.signOut();
  }
};

const checkpoint = (ar, ac, sr, sc) => {
  if (ar != null && ac != null && sr != null && sc != null) {
    if (ar != 0 && ac != 0 && sr != 0 && sc != 0) {
      if (ar > 0 && ac > 0 && sr > 0 && sc > 0) {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

const generator = (n) => {
  return n < 10 ? `S0${n}` : `S${n}`;
};

const getStyles = (day, workingDays, theme) => {
  return {
    fontWeight:
      workingDays.indexOf(day) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const formatDate = (date) => {
  let mm = date.substring(5, 7);
  let dd = date.substring(8, 10);
  let yyyy = date.substring(0, 4);

  return `${dd}-${mm}-${yyyy}`;
};

const showScreen = (props) => {
  ReactDOM.render(
    <>
      <Navigation showDate={true} showVehicle={true} getName={props.name} />
      <div id="header">
        <PlaceDetails />
        {/* <Settings /> */}
      </div>
      <div id="screen">{tab.dashboard}</div>
    </>,
    document.getElementById("root")
  );
};

const alertBox = (message) => {
  ReactDOM.render(
    <div style={{ marginBottom: "-30px" }}>
      <Alert severity="error">{message}</Alert>
    </div>,
    document.getElementById("alert-box")
  );
};

const successBox = (message) => {
  ReactDOM.render(
    <div style={{ marginBottom: "-30px" }}>
      <Alert severity="success">{message}</Alert>
    </div>,
    document.getElementById("alert-box")
  );
};

const RenderScreen = (show, props) => {
  if (show) {
    showScreen(props);
  } else {
    if (props.code == "auth/wrong-password") {
      alertBox("Sorry Password is incorrect!");
    } else if (props.code == "auth/network-request-failed") {
      alertBox("Oops You're Offline!");
    } else {
      alertBox("Account doesn't exists!");
    }
  }
};

const adjustStyle = (props) => {
  return !props.data.showDate && props.data.showVehicle
    ? adjustWidth.width1
    : !props.data.showData && !props.data.showVehicle
    ? adjustWidth.width2
    : props.data.showDate && !props.data.showVehicle
    ? adjustWidth.width3
    : adjustWidth.width4;
};

const numConverter = (num) => {
  return [
    Number(num.area.row),
    Number(num.area.col),
    Number(num.slot.row),
    Number(num.slot.col),
  ];
};

const setDetails = (ar, ac, sr, sc) => {
  details.area.row = ar;
  details.area.col = ac;
  details.slot.row = sr;
  details.slot.col = sc;
};

const fillArray = (props) => {
  let x = [
    Array(Number(props.area.row)).fill(1),
    Array(Number(props.area.col)).fill(2),
    Array(Number(props.slot.row)).fill(3),
    Array(Number(props.slot.col)).fill(4),
  ];
  return x;
};

const checkType = (value, props, type) => {
  if (type == "other") {
    if (value) {
      if (
        props.data.vehicleType == "three" ||
        props.data.vehicleType == "four"
      ) {
        return false;
      }
      return true;
    } else {
      if (
        props.data.vehicleType == "three" ||
        props.data.vehicleType == "four"
      ) {
        return true;
      }
      return false;
    }
  } else {
    if (value) {
      if (props.data.vehicleType == "two") {
        return false;
      }
      return true;
    } else {
      if (props.data.vehicleType == "two") {
        return true;
      }
      return false;
    }
  }
};

const createGrid = (value_1, value_2, value_3) => {
  let i = 0;
  if (value_1 != null && value_2 == null) {
    return (
      <Grid item>
        {value_1.map(() => {
          return createGrid();
        })}
      </Grid>
    );
  }

  if (value_2 != null && value_3 == null) {
    return (
      <Paper className="area-column-generator">
        {value_1.map(() => {
          return createGrid(value_2);
        })}
      </Paper>
    );
  }

  if (value_1 == null) {
    return (
      <Paper className="slot-row-generator">
        <p className="slot-number">{generator(i++)}</p>
      </Paper>
    );
  }

  return (
    <Grid item className="area-row-generator">
      {value_1.map(() => {
        return createGrid(value_2, value_3);
      })}
    </Grid>
  );
};

const isFormFilled = (data) => {
  if (
    data.placeName != "" &&
    data.address != "" &&
    data.openingTime != "" &&
    data.closingTime != "" &&
    data.workingDays != [] &&
    data.vehicleType == "two" &&
    data.amountCharge.two != "" &&
    data.delayCharge.two != ""
  ) {
    if (data.amountCharge.threeFour == "" && data.delayCharge.threeFour == "") {
      return true;
    }
    return false;
  } else if (
    data.placeName != "" &&
    data.address != "" &&
    data.openingTime != "" &&
    data.closingTime != "" &&
    data.workingDays != [] &&
    data.vehicleType == "three" &&
    data.amountCharge.threeFour != "" &&
    data.delayCharge.threeFour != ""
  ) {
    if (data.amountCharge.two == "" && data.delayCharge.two == "") {
      return true;
    }
    return false;
  } else if (
    data.placeName != "" &&
    data.address != "" &&
    data.openingTime != "" &&
    data.closingTime != "" &&
    data.workingDays != [] &&
    data.vehicleType == "four" &&
    data.amountCharge.threeFour != "" &&
    data.delayCharge.threeFour != ""
  ) {
    if (data.amountCharge.two == "" && data.delayCharge.two == "") {
      return true;
    }
    return false;
  } else if (
    data.placeName != "" &&
    data.address != "" &&
    data.openingTime != "" &&
    data.closingTime != "" &&
    data.workingDays != [] &&
    data.vehicleType == "all"
  ) {
    if (
      data.amountCharge.threeFour != "" &&
      data.delayCharge.threeFour != "" &&
      data.amountCharge.two != "" &&
      data.delayCharge.two != ""
    ) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};

const formAlert = (message, value) => {
  // const [open, setOpen] = React.useState(true);
  if (value) {
    ReactDOM.render(
      <div style={adjustWidth.width2}>
        <Alert severity="success">{message}</Alert>
      </div>,
      document.getElementById("header")
    );
  }
};

export { generateName, switchMenu, checkpoint, RenderScreen, createGrid };
export { generator, getStyles, formatDate, alertBox, successBox, isFormFilled };
export { adjustStyle, numConverter, setDetails, fillArray, checkType };
export { formAlert };
