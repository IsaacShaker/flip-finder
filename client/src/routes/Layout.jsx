import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
