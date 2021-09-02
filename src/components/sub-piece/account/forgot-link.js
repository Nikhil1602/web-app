import React from "react";

const ForgotLink = (props) => {
  return (
    <a
      href="#"
      id={props.changes.display ? "forgot-password-link" : "hide-link"}
      onClick={props.changeForm}>
      Forgot Password?
    </a>
  );
};

export default ForgotLink;
