import React from "react";
import logo from "../../../assets/images/logo.png";

const Greeting = (props) => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <h1>Welcome!</h1>
      <p>{props.changes.text}</p>
    </>
  );
};

export default Greeting;
