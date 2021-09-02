import React from "react";
import Icon from "@material-ui/icons/AccountCircle";
import { generateName, adjustStyle } from "../../../utils/functions";

const AdminField = (props) => {
  return (
    <div id="admin-profile" style={adjustStyle(props)}>
      <Icon id="admin-icon" />
      <div id="admin-details">
        <h4>{generateName(props.data.getName)}</h4>
        <p>Admin</p>
      </div>
    </div>
  );
};

export default AdminField;
