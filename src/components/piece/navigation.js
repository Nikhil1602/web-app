import React from "react";
import AdminField from "../sub-piece/navigation/admin-field";
import DateField from "../sub-piece/navigation/date-field";
import VehicleField from "../sub-piece/navigation/vehicle-field";
import logo from "../../assets/images/logo.png";
import TabGroup from "../sub-piece/navigation/tab-group";

const Header = (props) => {
  return (
    <>
      <DateField data={props.data.showDate} />
      <VehicleField data={props.data.showVehicle} />
      <AdminField data={props.data} />
    </>
  );
};

const NavigationPanel = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <div id="navigation">
        <ul>
          <TabGroup />
        </ul>
      </div>
    </>
  );
};

export { Header, NavigationPanel };
