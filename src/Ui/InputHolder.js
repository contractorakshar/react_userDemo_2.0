import styles from "./InputHolder.module.css";
const InputHolder = (props) => {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.main_input}
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        required
      ></input>
      <label className={styles.input_label}>{props.label}</label>
    </div>
  );
};
export default InputHolder;
