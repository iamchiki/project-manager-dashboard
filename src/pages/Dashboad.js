import React from "react";
import styles from "./Dashboard.module.css";
import Header from "../components/Header/Header";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo";
import ChartData from "../components/ChartData/ChartData";
import BudgetData from "../components/BudgetData/BudgetData";
import Sideview from "../components/Sideview/Sideview";
import { Line, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: [
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
  ],
  datasets: [
    {
      label: "",

      data: [0, 1000, 3500, 3200, 4000, 5500, 6500],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const donutData = {
  labels: ["Over Budget", "On Budget", "Under Budget"],
  datasets: [
    {
      data: [48, 33, 19],
      backgroundColor: ["#16e0e7", "#654bdb", "#e01709"],
      borderWidth: 1,
    },
  ],
};

const lineSwitchOptions = ["Month", "Week"];
const donutSwitchOptions = ["Profitability", "Status"];

const Dashboad = () => {
  return (
    <>
      <Header />
      <div className={styles.dashboardContainer}>
        <div className={styles.mainContent}>
          <div>
            <ProjectInfo />
            <div className={styles.chartsSection}>
              <div style={{ flex: 3, display: "flex" }}>
                <ChartData
                  switchOption={lineSwitchOptions}
                  title="Total Revenue">
                  <Line data={lineData} options={options} />
                </ChartData>
              </div>
              <div style={{ flex: 2 }}>
                <ChartData switchOption={donutSwitchOptions} title="Budget">
                  <Doughnut data={donutData} />
                </ChartData>
              </div>
            </div>
          </div>
          <Sideview />
        </div>
        <BudgetData />
      </div>
    </>
  );
};

export default Dashboad;
