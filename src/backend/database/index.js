import React from "react";
import { db } from "../../firebase";

const Database = (data, value) => {
  if (value == "admin-data") {
    db.collection("Admin-Database")
      .doc(window.localStorage.getItem("id"))
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  } else if (value == "slot-data") {
    db.collection("Admin-Database")
      .doc(window.localStorage.getItem("id"))
      .set(data, { merge: true })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
};

export default Database;
