import React from "react";
import styles from "./ProjectInfo.module.css";
import DataCard from "../DataCard/DataCard";
import { CiGrid41 } from "react-icons/ci";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { BiRefresh } from "react-icons/bi";

import { MdPeopleOutline } from "react-icons/md";
import { RiAlertLine } from "react-icons/ri";

const ProjectInfo = () => {
  return (
    <div className={styles.stats}>
      <DataCard count={5} description="Total Projects">
        <CiGrid41 fill="#14dedf" size={40} />
      </DataCard>
      <DataCard count={1} description="Completed">
        <IoMdCheckmarkCircleOutline fill="#14dedf" size={40} />
      </DataCard>
      <DataCard count={3} description="Ongoing">
        <BiRefresh fill="#14dedf" size={40} />
      </DataCard>
      <DataCard count={1} description="Delayed" alert>
        <RiAlertLine fill="#e12a2a" size={40} />
      </DataCard>
      <DataCard count={5} description="Employees">
        <MdPeopleOutline fill="#14dedf" size={40} />
      </DataCard>
    </div>
  );
};

export default ProjectInfo;
