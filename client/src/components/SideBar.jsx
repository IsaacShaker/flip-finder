import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        <Link to={"/"}>
          <li
            className={activeLink === "overview" ? styles.active : ""}
            onClick={() => handleLinkClick("overview")}
          >
            Overview
          </li>
        </Link>
        <Link to={"/products"}>
          <li
            className={activeLink === "products" ? styles.active : ""}
            onClick={() => handleLinkClick("products")}
          >
            Products
          </li>
        </Link>
        <Link to={"/instances"}>
          <li
            className={activeLink === "instances" ? styles.active : ""}
            onClick={() => handleLinkClick("instances")}
          >
            Instances
          </li>
        </Link>
        <Link to={"/favorites"}>
          <li
            className={activeLink === "favorites" ? styles.active : ""}
            onClick={() => handleLinkClick("favorites")}
          >
            Favorites
          </li>
        </Link>
        <Link to={"/settings"}>
          <li
            className={activeLink === "settings" ? styles.active : ""}
            onClick={() => handleLinkClick("settings")}
          >
            Settings
          </li>
        </Link>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default SideBar;
