import React from "react";
import styles from "./EmployeeCard.module.css";

import { FaUserCircle } from "react-icons/fa";

const EmployeeCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <FaUserCircle size={40} />
        <div>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.profile}>{data.profile}</p>
        </div>
      </div>

      <div className={`${styles.progressBar} `}>
        <div
          className={styles.progress}
          style={{ width: `${data.moodLevel}%` }}></div>
        {data.moodLevel === 0 ? <span>😡</span> : <span>🙂</span>}
      </div>
    </div>
  );
};

export default EmployeeCard;
