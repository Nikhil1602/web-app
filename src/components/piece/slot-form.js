import React from "react";
import { Grid } from "@material-ui/core";
import FillDetails from "../sub-piece/slot-form/fill-details";
import Preview from "../sub-piece/slot-form/preview";

const SlotForm = () => {
  let [value, setValue] = React.useState(false);
  const [state, setState] = React.useState({
    area: {
      row: "",
      col: "",
    },
    slot: {
      row: "",
      col: "",
    },
  });

  return (
    <>
      <Grid container xs={5}>
        <FillDetails
          value={value}
          setValue={setValue}
          state={state}
          setState={setState}
        />
      </Grid>
      <Grid item xs={7}>
        <Preview value={value} state={state} />
      </Grid>
    </>
  );
};

export default SlotForm;
