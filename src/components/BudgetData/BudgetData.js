import React from "react";
import styles from "./BudgetData.module.css";
import ActionButton from "../ActionBtn/ActionButton";
import { GoDownload, GoPlus } from "react-icons/go";
import { LuSlidersHorizontal } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import BudgetCard from "../BudgetCard/BudgetCard";

const budgetData = [
  {
    title: "Insurance App",
    subtitle: "Veri",
    total: 70000,
    profitability: -2500,
    soldHrs: 100,
    width: 100,
    level: "danger",
  },
  {
    title: "Neo",
    subtitle: "Bankia",
    total: 70000,
    profitability: 4000,
    soldHrs: 1000,
    width: 50,
    level: "warning",
  },
  {
    title: "VR Website",
    subtitle: "Barca",
    total: 70000,
    profitability: 4000,
    soldHrs: 2000,
    width: 50,
    level: "success",
  },
  {
    title: "VR Website",
    subtitle: "Barca",
    total: 70000,
    profitability: 4000,
    soldHrs: 1100,
    width: 100,
    level: "success",
  },
];

const BudgetData = () => {
  return (
    <div className={styles.budgetContainer}>
      <div className={styles.budgetStatus}>
        <h2>Budget Status</h2>

        <div className={styles.btnContainer}>
          <ActionButton active>
            <GoPlus />
            Add New Project
          </ActionButton>
          <ActionButton>
            <GoDownload />
            Download Report
          </ActionButton>
          <ActionButton>
            <CiCalendarDate />
            <input type="date" className={styles.dateFilter} />
          </ActionButton>

          <ActionButton>
            <LuSlidersHorizontal />
            Filter
          </ActionButton>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {budgetData.map((data) => (
          <BudgetCard data={data}></BudgetCard>
        ))}
      </div>
    </div>
  );
};

export default BudgetData;
