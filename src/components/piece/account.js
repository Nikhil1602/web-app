import React, { useState } from "react";
import SubmitButton from "../sub-piece/account/submit-button";
import UserField from "../sub-piece/account/user-field";
import MailField from "../sub-piece/account/mail-field";
import PasswordField from "../sub-piece/account/password-field";
import Greeting from "../sub-piece/account/greetings";
import ForgotLink from "../sub-piece/account/forgot-link";
import BottomLink from "../sub-piece/account/bottom-link";
import AccountLogin from "../../backend/authentication/account-login";
import CreateAccount from "../../backend/authentication/create-account";
import ResetPassword from "../../backend/authentication/password-reset";
import { userAccount } from "../../utils/container";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../../assets/theme";

const Account = () => {
  const [changes, setChanges] = useState(userAccount.accountLogin);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (changes.display) {
      AccountLogin(values);
    } else if (changes.button != "Send Mail") {
      CreateAccount(values);
      setChanges(userAccount.accountLogin);
    }

    if (changes.button == "Send Mail") {
      ResetPassword(values.email);
      setChanges(userAccount.accountLogin);
    }
  };

  const changeForm = (event) => {
    changes.display
      ? setChanges(userAccount.createAccount)
      : setChanges(userAccount.accountLogin);

    if (event.target.id == "forgot-password-link") {
      setChanges(userAccount.passwordReset);
    }
  };

  return (
    <form id="registration-form" onSubmit={submitForm}>
      <ThemeProvider theme={theme}>
        <Greeting changes={changes} />
        <UserField
          changes={changes}
          setChanges={setChanges}
          values={values}
          setValues={setValues}
        />
        <MailField values={values} setValues={setValues} />
        <PasswordField
          changes={changes}
          setChanges={setChanges}
          values={values}
          setValues={setValues}
        />
        <ForgotLink changes={changes} changeForm={changeForm} />
        <SubmitButton
          changes={changes}
          setChanges={setChanges}
          values={values}
          setValues={setValues}
          submitForm={submitForm}
        />
        <BottomLink changes={changes} changeForm={changeForm} />
      </ThemeProvider>
    </form>
  );
};

export default Account;
