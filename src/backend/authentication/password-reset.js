import { alertBox, successBox } from "../../utils/functions";
import { auth } from "../../firebase";

const ResetPassword = (email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      successBox("Mail sent successfully!");
    })
    .catch((error) => {
      if (error.code == "auth/user-not-found") {
        alertBox("User doesn't exists!");
      } else if (error.code == "auth/network-request-failed") {
        alertBox("Oops You're Offline!");
      } else {
        alertBox("Unable to send mail!");
      }
    });
};

export default ResetPassword;
