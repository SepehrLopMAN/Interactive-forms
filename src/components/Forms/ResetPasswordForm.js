import { useState } from "react";
import Button from "../Button/button";
import InputField from "../InputField/inputField";
import styles from "./formStyles.module.css";
import { changeHandler } from "./signUpForm";

function ResetPasswordForm() {
  const [formState, setFormState] = useState({
    email: "hello@reallygreatsite.com",
  });

  return (
    <form action="javascript:void(0)" className={styles.signupForm}>
      <div className={styles.form_details}>
        <h1>Forgot password</h1>
        <p>New password</p>
      </div>
      <div className={styles["form__input-container"]}>
        <InputField
          type="email"
          valueProps={{
            value: formState.email,
            changeHandler: changeHandler("email", setFormState, formState),
          }}
        />
        <Button btnTitle="Send" type="submit" />
      </div>
    </form>
  );
}

export default ResetPasswordForm;
