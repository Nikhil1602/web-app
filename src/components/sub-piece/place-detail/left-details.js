import React from "react";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";

const LeftDetail = () => {
  const [info, setInfo] = React.useState({
    name: "Place Name",
    add: "City, State - Pincode",
  });

  React.useEffect(() => {
    db.collection("Admin-Database")
      .doc(window.localStorage.getItem("id"))
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInfo({ name: doc.data().placeName, add: doc.data().cityState });
        }
      });
  }, [info]);

  return (
    <Grid id="place-left-detail">
      <h1>{info.name}</h1>
      <p>{info.add}</p>
    </Grid>
  );
};

export default LeftDetail;
