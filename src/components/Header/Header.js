import React, { useState } from "react";
import styles from "./Header.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <header className={styles.header}>
      <h1>
        <span style={{ color: "#14dedf" }}>H</span>OURS
      </h1>
      <nav>
        <a
          href="#"
          className={activeTab === "Dashboard" ? styles.active : ""}
          onClick={() => setActiveTab("Dashboard")}>
          Dashboard
        </a>

        <a
          href="#"
          className={activeTab === "Projects" ? styles.active : ""}
          onClick={() => setActiveTab("Projects")}>
          Projects
        </a>
        <a
          href="#"
          className={activeTab === "Team" ? styles.active : ""}
          onClick={() => setActiveTab("Team")}>
          Team
        </a>
        <a
          href="#"
          className={activeTab === "Clients" ? styles.active : ""}
          onClick={() => setActiveTab("Clients")}>
          Clients
        </a>
        <a
          href="#"
          className={activeTab === "Time" ? styles.active : ""}
          onClick={() => setActiveTab("Time")}>
          Time
        </a>
        <a
          href="#"
          className={activeTab === "Reports" ? styles.active : ""}
          onClick={() => setActiveTab("Reports")}>
          Reports
        </a>
      </nav>
      <div className={styles.profileContainer}>
        <IoMdNotificationsOutline fill="#fff" size={20} />
        <FaUserCircle size={40} />
        <div className={styles.menuItem}>
          <p>Mario</p>
          <MdOutlineKeyboardArrowDown fill="#fff" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
