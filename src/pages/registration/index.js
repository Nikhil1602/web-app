import React from "react";
import "../../assets/styles/common/registration.css";
import Account from "../../components/piece/account";

const Registration = () => {
  return (
    <>
      <div id="parent-div">
        <div id="child-div">
          <div id="alert-box"></div>
          <Account />
        </div>
      </div>
    </>
  );
};

export default Registration;
