import React from "react";
import styles from "./ChartData.module.css";

import SwitchButton from "../SwitchButton/SwitchButton";

const ChartData = ({ children, title, switchOption }) => {
  return (
    <div className={styles.chart}>
      <div className={styles.chartHeader}>
        <h5>{title}</h5>
        <SwitchButton switchOption={switchOption}></SwitchButton>
      </div>

      {children}
    </div>
  );
};

export default ChartData;
