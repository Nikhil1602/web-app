import React from "react";
import "../../assets/styles/common/place-details.css";
import Grid from "@material-ui/core/Grid";
import LeftDetail from "../sub-piece/place-detail/left-details";
import RightDetail from "../sub-piece/place-detail/right-details";

const PlaceDetails = () => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <LeftDetail />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RightDetail />
      </Grid>
    </>
  );
};

export default PlaceDetails;
