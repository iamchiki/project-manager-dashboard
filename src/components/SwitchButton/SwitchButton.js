import React from "react";
import styles from "./SwitchButton.module.css";

const SwitchButton = ({ switchOption }) => {
  return (
    <div>
      <span style={{ fontWeight: 100 }}>{switchOption[0]}</span>
      <label className={styles.switch}>
        <input type="checkbox"></input>
        <span className={styles.slider}></span>
      </label>
      <span style={{ fontWeight: 600 }}>{switchOption[1]}</span>
    </div>
  );
};

export default SwitchButton;
