import React from "react";
import { InputLabel, MenuItem, Input } from "@material-ui/core";
import { Chip, FormControl, Select } from "@material-ui/core";
import { days, MenuProps } from "../../../utils/container";
import { getStyles } from "../../../utils/functions";
import theme from "../../../assets/theme";
import { adjustMargin } from "../../../assets/styles/custom";

const WorkingDays = (props) => {
  return (
    <FormControl variant="outlined" style={adjustMargin.topBottom} required>
      <InputLabel id="demo-mutiple-chip-label">Working Days</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        label="Working Days"
        value={props.data.workingDays}
        onChange={props.handleData("workingDays")}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div id="chips-container">
            {selected.map((value) => (
              <Chip key={value} label={value} className="chips" />
            ))}
          </div>
        )}
        MenuProps={MenuProps}>
        {days.map((day) => (
          <MenuItem
            key={day}
            value={day}
            style={getStyles(day, props.data.workingDays, theme)}>
            {day}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default WorkingDays;
