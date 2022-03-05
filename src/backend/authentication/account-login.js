import { auth } from "../../firebase";
import { RenderScreen, alertBox, showScreen } from "../../utils/functions";

const AccountLogin = (props) => {
  auth
    .signInWithEmailAndPassword(props.email, props.password)
    .then((userInfo) => {
      userInfo.user.emailVerified
        ? RenderScreen(true, props)
        : alertBox("You're not verfied!");
      userInfo.user.emailVerified &&
        window.localStorage.setItem("id", props.email);
    })
    .catch((error) => {
      RenderScreen(false, error);
    });
};

export default AccountLogin;
