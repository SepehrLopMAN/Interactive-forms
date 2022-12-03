import styles from "./button.module.css";
function Button({ type, btnTitle }) {
  return (
    <button className={styles.btn} type={type}>
      {btnTitle}
    </button>
  );
}

export default Button;
