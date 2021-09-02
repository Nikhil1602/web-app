import React from "react";

const BottomLink = (props) => {
  return (
    <p id="bottom-area">
      {props.changes.bottomText}
      <a href="#" onClick={props.changeForm}>
        {props.changes.link}
      </a>
    </p>
  );
};

export default BottomLink;
