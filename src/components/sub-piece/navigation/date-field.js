import React, { useState } from "react";
import { OutlinedInput } from "@material-ui/core";
import { today } from "../../../utils/container";
import { formatDate } from "../../../utils/functions";
import { dateField } from "../../../assets/styles/custom";

const DateField = (props) => {
  const [date, setDate] = useState(today);

  return (
    <>
      {props.data ? (
        <OutlinedInput
          style={dateField}
          variant="outlined"
          type="date"
          size="small"
          defaultValue={date}
          onChange={(e) => {
            setDate(formatDate(e.target.value));
          }}
        />
      ) : null}
    </>
  );
};

export default DateField;
