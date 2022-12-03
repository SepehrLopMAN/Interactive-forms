import styles from "./inputField.module.css";

function InputField({ type, valueProps: { value, changeHandler } }) {
  return (
    <div className={styles["form-control"]}>
      <label className={styles["form-control__label"]}>
        {type}
        <br />
        <br />
        <input
          className={styles["form-control__input"]}
          type={type}
          value={value}
          onChange={(event) => {
            changeHandler(event.target.value);
          }}
        />
      </label>
    </div>
  );
}

export default InputField;
