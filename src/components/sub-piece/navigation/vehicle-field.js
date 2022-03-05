import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { db } from "../../../firebase";
import CarIcon from "@material-ui/icons/DriveEta";
import BikeIcon from "@material-ui/icons/DirectionsBike";

const VehicleField = (props) => {
  const [formats, setFormats] = useState(() => ["car"]);
  const [value, setValue] = useState("two");

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  React.useEffect(() => {
    db.collection("Admin-Database")
      .doc(window.localStorage.getItem("id"))
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (doc.data().vehicleType == "two") {
            setValue("two");
          } else if (
            doc.data().vehicleType == "three" ||
            doc.data().vehicleType == "four"
          ) {
            setValue("threeFour");
          } else {
            setValue("all");
          }
        }
      });
  }, [value]);

  return (
    <>
      {props.data ? (
        <div id="vertical-div">
          <ToggleButtonGroup
            id="vehicle-selection"
            value={formats}
            onChange={handleFormat}
            aria-label="device">
            {value == "three" || value == "four" || value == "all" ? (
              <ToggleButton value="car" aria-label="car">
                <CarIcon />
              </ToggleButton>
            ) : null}
            {value == "two" || value == "all" ? (
              <ToggleButton value="bike" aria-label="bike">
                <BikeIcon />
              </ToggleButton>
            ) : null}
          </ToggleButtonGroup>
        </div>
      ) : null}
    </>
  );
};

export default VehicleField;
