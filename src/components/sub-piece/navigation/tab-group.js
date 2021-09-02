import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { switchMenu } from "../../../utils/functions";
import { adjustWidth, toggle } from "../../../assets/styles/custom/index";
import { makeStyles } from "@material-ui/core";
import { menu } from "../../../utils/container";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiToggleButton-root:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    "& .MuiToggleButton-root.Mui-selected": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  },
}));

const TabGroup = () => {
  const classes = useStyles();
  const [view, setView] = useState("dashboard");

  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
      switchMenu(nextView);
    }
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      id="toggle-button-group"
      exclusive
      onChange={handleChange}
      style={adjustWidth.width2}
      className={classes.root}>
      {menu.map((item, ind) => {
        return (
          <ToggleButton
            key={ind}
            value={item.value}
            aria-label={item.value}
            style={toggle}>
            <div id={item.id}>
              {item.icon}
              <li>{item.name}</li>
            </div>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default TabGroup;
