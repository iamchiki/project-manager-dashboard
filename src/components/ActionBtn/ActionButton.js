import React from "react";
import styles from "./ActionButton.module.css";

const ActionButton = ({ children, active }) => {
  return (
    <button className={active ? styles.active : styles.actionBtn}>
      {children}
    </button>
  );
};

export default ActionButton;
