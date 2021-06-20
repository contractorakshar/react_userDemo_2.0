import styles from "./InputHolder.module.css";
const InputHolder = (props) => {
  return (
    <div className={styles.input_container}>
      <input className={styles.main_input} {...props}></input>
      <label className={styles.input_label}>{props.label}</label>
    </div>
  );
};
export default InputHolder;
