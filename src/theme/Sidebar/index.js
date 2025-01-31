import React from "react";
import Link from "@docusaurus/Link";
import Images from "./Images";
import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidenavbar}>
    <a className={styles.sidenav_content} href="/" >
      <Images/>
    </a>
  </nav>
  );
};

export default Sidebar;
