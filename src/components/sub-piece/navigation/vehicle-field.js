import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import CarIcon from "@material-ui/icons/DriveEta";
import BikeIcon from "@material-ui/icons/DirectionsBike";

const VehicleField = (props) => {
  const [formats, setFormats] = useState(() => ["car"]);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  return (
    <>
      {props.data ? (
        <div id="vertical-div">
          <ToggleButtonGroup
            id="vehicle-selection"
            value={formats}
            onChange={handleFormat}
            aria-label="device">
            <ToggleButton value="car" aria-label="car">
              <CarIcon />
            </ToggleButton>
            <ToggleButton value="bike" aria-label="bike">
              <BikeIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      ) : null}
    </>
  );
};

export default VehicleField;
