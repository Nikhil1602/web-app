import React from "react";

const SubmitButton = (props) => {
  return (
    <div id={props.changes.display ? "original-div" : "modified-div"}>
      <button type="submit" id="submit-button" onSubmit={props.submitForm}>
        {props.changes.button}
      </button>
    </div>
  );
};

export default SubmitButton;
