import React from "react";
import Link from "@docusaurus/Link";
import Imgs from "./Imgs";
import styles from "./styles.module.css";

const Sidebar = () => {
 return (
 <nav className={styles.sidenavbar}>
        <Link className={styles.sidenav_content} to="/">

        <Imgs/>
       </Link>
 </nav>
 );
};

export default Sidebar;