import React from "react";
import { Button } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../../../assets/theme";
import { details } from "../../../utils/container";
import { checkpoint, numConverter, setDetails } from "../../../utils/functions";
import { FieldOne, FieldTwo } from "./fields";

const FillDetails = (props) => {
  const submitForm = () => {
    const [num1, num2, num3, num4] = numConverter(props.state);

    if (checkpoint(num1, num2, num3, num4)) {
      setDetails(
        props.state.area.row,
        props.state.area.col,
        props.state.slot.row,
        props.state.slot.col
      );
      props.setValue(true);
      window.localStorage.setItem("info", JSON.stringify(details));
    }
  };

  return (
    <>
      <p className="parking-type">Area:</p>
      <ThemeProvider theme={theme}>
        <FieldOne state={props.state} setState={props.setState} />
        <p className="parking-type">Slot:</p>
        <FieldTwo state={props.state} setState={props.setState} />
        <Button
          variant="outlined"
          color="primary"
          onClick={submitForm}
          id="button-submit">
          OK
        </Button>
      </ThemeProvider>
    </>
  );
};

export default FillDetails;
