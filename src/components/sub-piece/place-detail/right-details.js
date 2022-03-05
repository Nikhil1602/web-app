import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { db } from "../../../firebase";
import { formatTime } from "../../../utils/functions";

const RightDetail = () => {
  const [data, setData] = useState({
    time: "00:00 am - 00:00 pm",
    days: "from - to",
  });

  useEffect(() => {
    db.collection("Admin-Database")
      .doc(window.localStorage.getItem("id"))
      .get()
      .then((doc) => {
        if (doc.exists) {
          let temp = doc.data();
          let tm = `${formatTime(temp.openingTime)} - ${formatTime(
            temp.closingTime
          )}`;
          let dy = `${temp.workingDays[0]} - ${
            temp.workingDays[temp.workingDays.length - 1]
          }`;
          setData({ time: tm, days: dy });
        }
      });
  }, [data]);

  return (
    <Grid id="place-right-detail">
      <p>{data.time}</p>
      <p>{data.days}</p>
    </Grid>
  );
};

export default RightDetail;
