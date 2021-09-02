import { auth } from "../../firebase";
import { RenderScreen, alertBox } from "../../utils/functions";

const AccountLogin = (props) => {
  auth
    .signInWithEmailAndPassword(props.email, props.password)
    .then((userInfo) => {
      if (userInfo.user.emailVerified) {
        RenderScreen(true, props);
      } else {
        alertBox("You're not verfied!");
      }
    })
    .catch((error) => {
      // console.log(error.code);
      RenderScreen(false, error);
    });
};

export default AccountLogin;
