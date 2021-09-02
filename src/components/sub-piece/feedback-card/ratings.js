import React from "react";
import Rating from "@material-ui/lab/Rating";

const Ratings = (props) => {
  return (
    <div id="feeback-ratings">
      <Rating
        name="hover-feedback"
        value={props.value}
        color="primary"
        precision={0.5}
        onChange={(event, newValue) => {
          props.setValue(newValue);
        }}
      />
    </div>
  );
};

export default Ratings;
