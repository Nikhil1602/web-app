import React from "react";
import { InputAdornment, OutlinedInput, IconButton } from "@material-ui/core";
import { fields } from "../../../assets/styles/custom";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { passwordLength } from "../../../utils/container";

const PasswordField = (props) => {
  const handleChange = (prop) => (event) => {
    props.setValues({ ...props.values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    props.setValues({
      ...props.values,
      showPassword: !props.values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <OutlinedInput
      style={fields}
      type={props.values.showPassword ? "text" : "password"}
      value={props.values.password}
      inputProps={passwordLength}
      onChange={handleChange("password")}
      startAdornment={
        <InputAdornment position="start">
          <LockIcon id="icon" />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}>
            {props.values.showPassword ? (
              <Visibility id="eye-icon" />
            ) : (
              <VisibilityOff id="eye-icon" />
            )}
          </IconButton>
        </InputAdornment>
      }
      placeholder="Password"
      autoComplete="off"
      required={props.changes.showField}
      disabled={!props.changes.showField}
    />
  );
};

export default PasswordField;
