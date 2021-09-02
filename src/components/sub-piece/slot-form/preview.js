import React from "react";
import { Paper } from "@material-ui/core";
import GenerateSlot from "./slot-generator";

const Preview = (props) => {
  return (
    <Paper id="preview-container">
      {props.value ? (
        <GenerateSlot data={props.state} />
      ) : (
        <p id="preview-text">Fill Details and Click OK to Preview</p>
      )}
    </Paper>
  );
};

export default Preview;
