import React from "react";
import styles from "./DataCard.module.css";

const DataCard = ({ children, count, description, alert }) => {
  return (
    <div className={!alert ? styles.card : styles.alertCard}>
      <div className={styles.iconContainer}>{children}</div>
      <h1>{count}</h1>
      <span>{description}</span>
    </div>
  );
};

export default DataCard;
