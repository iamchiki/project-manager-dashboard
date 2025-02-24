import React from "react";
import styles from "./Sideview.module.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const employeeData = [
  { name: "Andrea", profile: "UX Junior", moodLevel: 20 },
  { name: "Alvaro", profile: "Backend Developer", moodLevel: 100 },
  { name: "Juan", profile: "UX Senior", moodLevel: 80 },
  { name: "Jose", profile: "Marketing", moodLevel: 0 },
  { name: "Maria", profile: "UX Junior", moodLevel: 50 },
];
const Sideview = () => {
  return (
    <div className={styles.sideViewContainer}>
      <h4>Team Mood</h4>
      {employeeData.map((employee) => (
        <EmployeeCard data={employee}></EmployeeCard>
      ))}
    </div>
  );
};

export default Sideview;
