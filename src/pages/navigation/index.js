import React from "react";
import "../../assets/styles/common/navigation.css";
import { NavigationPanel, Header } from "../../components/piece/navigation";

const Navigation = (props) => {
  return (
    <>
      <div id="header-container">
        <Header data={props} />
      </div>
      <div id="navigation-container">
        <NavigationPanel />
      </div>
    </>
  );
};

export default Navigation;
