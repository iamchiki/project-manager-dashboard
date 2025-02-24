import React from "react";
import styles from "./BudgetCard.module.css";

import { FaUserCircle } from "react-icons/fa";

import { RiAlertLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const BudgetCard = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <h3>{data.title}</h3>
          <p>{data.subtitle}</p>
        </div>
        <FaUserCircle size={40} />
      </div>
      <div className={styles.cardBody}>
        <p>
          Total Budget: <span className={styles.boldFont}>{data.total}€</span>
        </p>
        <p>
          Profitability (100%):
          <span
            className={`${styles.boldFont} ${
              data.level === "danger" && styles.overBudget
            }`}>
            {data.profitability}€
          </span>
        </p>
        <div className={styles.progressBarContainer}>
          {data.width === 100 && data.level === "danger" && (
            <RiAlertLine fill="#e12a2a" />
          )}
          {data.width === 100 && data.level === "success" && (
            <IoMdCheckmarkCircleOutline fill="#008000" />
          )}
          {data.width !== 100 && <div style={{ height: "16px" }}></div>}

          <div className={`${styles.progressBar} ${styles[data.level]}`}>
            <div
              className={styles.progress}
              style={{ width: `${data.width}%` }}></div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.boldFont}>Actual Hours: 1.100</p>
          <p
            className={`${styles.boldFont} ${
              data.level === "danger" && styles.overBudget
            }`}>
            {`${data.soldHrs} ${
              data.level === "danger" ? "hours over Budget" : "sold hours"
            }`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
