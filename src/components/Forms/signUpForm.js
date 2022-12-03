import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";
import InputField from "../InputField/inputField";
import styles from "./formStyles.module.css";

function FormComponent({ children }) {
  const [formState, setFormState] = useState({
    name: "Jiara Martins",
    email: "hello@reallygreatsite.com",
    password: "123456",
  });

  // console.log(formState);
  return (
    <form action="javascript:void(0)" className={styles.signupForm}>
      <div className={styles.form_details}>
        <h1>Create new account</h1>
        <p>
          Already registered? <Link to="/login"> Login</Link>
        </p>
      </div>
      <div className={styles["form__input-container"]}>
        <InputField
          type="name"
          valueProps={{
            value: formState.name,
            changeHandler: changeHandler("name", setFormState, formState),
          }}
        />
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
        {children}
        <Button btnTitle="Sign Up" type="submit" />
      </div>
    </form>
  );
}

export default FormComponent;

export const changeHandler = (field, setter, state) => {
  const newFormState = { ...state };
  return (value) => {
    newFormState[`${field}`] = value;
    setter(newFormState);
  };
};
