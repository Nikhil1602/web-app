import React from "react";
import "../../../assets/styles/common/cancel-refund.css";
import UserRefund from "../../../components/piece/user-refund";

const CancelRefund = () => {
  const [data, setData] = React.useState("John Carter");

  return (
    <div id="user-refund-container">
      <UserRefund data={data} />
      <UserRefund data={data} />
      <UserRefund data={data} />
    </div>
  );
};

export default CancelRefund;
