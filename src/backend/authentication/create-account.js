import { auth } from "../../firebase";
import { alertBox, successBox } from "../../utils/functions";

const updateName = (user, userName) => {
  user.updateProfile({
    displayName: userName,
  });
};

const sendVerification = (user) => {
  user
    .sendEmailVerification()
    .then(() => {
      successBox("Verification sent successfully!");
    })
    .catch(() => {
      alertBox("Unable to send verification!");
    });
};

const CreateAccount = (props) => {
  auth
    .createUserWithEmailAndPassword(props.email, props.password)
    .then((userInfo) => {
      updateName(userInfo.user, props.name);
      sendVerification(userInfo.user);
      auth.signOut();
    })
    .catch((error) => {
      if (error.code == "auth/network-request-failed") {
        alertBox("Oops You're Offline!");
      } else {
        alertBox("Account already exists!");
      }
    });
};

export default CreateAccount;
