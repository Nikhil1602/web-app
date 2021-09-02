import React from "react";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { fields, invisible } from "../../../assets/styles/custom";
import PersonIcon from "@material-ui/icons/Person";
import { userLength } from "../../../utils/container";

const UserField = (props) => {
  const handleChange = (prop) => (event) => {
    props.setValues({ ...props.values, [prop]: event.target.value });
  };

  return (
    <OutlinedInput
      style={props.changes.display ? invisible : fields}
      type="text"
      onChange={handleChange("name")}
      startAdornment={
        <InputAdornment position="start">
          <PersonIcon id="icon" />
        </InputAdornment>
      }
      placeholder="Username"
      inputProps={userLength}
      required={!props.changes.display}
      disabled={!props.changes.showField}
    />
  );
};

export default UserField;
