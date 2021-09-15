import React from "react";
import { db } from "../../firebase";

const Database = (data, value) => {
  if (value == "admin-data") {
    db.collection("Database")
      .doc("admin-data")
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  } else if (value == "slot-data") {
    db.collection("Database")
      .doc("slot-data")
      .set(data)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }
};

export default Database;
