import { useState } from "react";
import Button from "../Button/button";
import InputField from "../InputField/inputField";
import styles from "./formStyles.module.css";
import { changeHandler } from "./signUpForm";

function LoginForm() {
  const [formState, setFormState] = useState({
    email: "hello@reallygreatsite.com",
    password: "123456",
  });

  return (
    <form action="javascript:void(0)" className={styles.signupForm}>
      <div className={styles.form_details}>
        <h1>Login</h1>
        <p>sign in to continue</p>
      </div>
      <div className={styles["form__input-container"]}>
        <InputField
          type="email"
          valueProps={{
            value: formState.email,
            changeHandler: changeHandler("email", setFormState, formState),
          }}
        />
        <InputField
          type="password"
          valueProps={{
            value: formState.password,
            changeHandler: changeHandler("password", setFormState, formState),
          }}
        />
        <Button btnTitle="Login" type="submit" />
      </div>
    </form>
  );
}

export default LoginForm;
