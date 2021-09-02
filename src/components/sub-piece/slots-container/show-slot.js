import React from "react";
import GenerateSlot from "../slot-form/slot-generator";
import { checkpoint, numConverter } from "../../../utils/functions";

const ShowSlot = (props) => {
  const [num1, num2, num3, num4] = numConverter(props.details);

  return (
    <>
      {checkpoint(num1, num2, num3, num4) ? (
        <GenerateSlot data={props.details} />
      ) : (
        <p id="show-text">No Slots Alloted!</p>
      )}
    </>
  );
};

export default ShowSlot;
