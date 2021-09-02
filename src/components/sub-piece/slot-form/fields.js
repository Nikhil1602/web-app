import React from "react";
import { TextField } from "@material-ui/core";

const FieldOne = (props) => {
  const handleData = (event) => {
    if (event.target.id == "area-row") {
      props.setState({
        ...props.state,
        area: { ...props.state.area, row: event.target.value },
      });
    } else {
      props.setState({
        ...props.state,
        area: { ...props.state.area, col: event.target.value },
      });
    }
  };

  return (
    <>
      <TextField
        className="text-field"
        label="Rows"
        variant="outlined"
        type="number"
        onChange={handleData}
        id="area-row"
        required
      />
      <TextField
        className="text-field"
        label="Columns"
        variant="outlined"
        onChange={handleData}
        type="number"
        id="area-column"
        required
      />
    </>
  );
};

const FieldTwo = (props) => {
  const handleData = (event) => {
    if (event.target.id == "slot-row") {
      props.setState({
        ...props.state,
        slot: { ...props.state.slot, row: event.target.value },
      });
    } else {
      props.setState({
        ...props.state,
        slot: { ...props.state.slot, col: event.target.value },
      });
    }
  };

  return (
    <>
      <TextField
        className="text-field"
        label="Rows"
        variant="outlined"
        type="number"
        onChange={handleData}
        id="slot-row"
        required
      />
      <TextField
        className="text-field"
        label="Columns"
        variant="outlined"
        onChange={handleData}
        type="number"
        id="slot-column"
        required
      />
    </>
  );
};

export { FieldOne, FieldTwo };
