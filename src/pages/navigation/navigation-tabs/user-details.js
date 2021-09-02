import React, { useState } from "react";
import "../../../assets/styles/common/user-details.css";
import UserData from "../../../components/piece/user-data";

const UserDetails = () => {
  const [state, setState] = useState({
    userName: "John Cena",
    Vnum: "GJ10XB1234",
    Pnum: "9876543210",
    status: "Running",
    Snum: "2",
    Vtype: "4 - wheeler",
    Ptime: "3.00 pm",
  });

  return (
    <div id="user-details-container">
      <UserData data={state} />
      <UserData data={state} />
      <UserData data={state} />
    </div>
  );
};

export default UserDetails;
