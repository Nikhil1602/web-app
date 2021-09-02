import React from "react";
import { InputAdornment, OutlinedInput } from "@material-ui/core";
import { fields } from "../../../assets/styles/custom";
import EmailIcon from "@material-ui/icons/Email";

const MailField = (props) => {
  const handleChange = (prop) => (event) => {
    props.setValues({ ...props.values, [prop]: event.target.value });
  };

  return (
    <OutlinedInput
      style={fields}
      type="email"
      onChange={handleChange("email")}
      startAdornment={
        <InputAdornment position="start">
          <EmailIcon id="icon" />
        </InputAdornment>
      }
      placeholder="Email address"
      required
    />
  );
};

export default MailField;
