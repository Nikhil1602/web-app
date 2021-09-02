import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../../assets/styles/common/add-slots.css";
import SlotForm from "../../../components/piece/slot-form";

const AddSlots = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container id="main-container">
            <SlotForm />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AddSlots;
