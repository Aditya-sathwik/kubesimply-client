import React, { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.css";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaVideo,
  FaUsers,
  FaPencilAlt,
  FaClipboardList,
} from "react-icons/fa";

const navbarLogo = {
  logo: {
    Svg: require("@site/static/img/navbarLogo.svg").default,
  },
};

const navLinks = [
  { href: "#About", icon: <FaInfoCircle />, label: "About" },
  { href: "https://blog.kubesimplify.com/", icon: <FaPencilAlt />, label: "Blog Content", external: true },
  { href: "#workshops", icon: <FaClipboardList />, label: "Workshops" },
  { href: "#Sponsers", icon: <FaUsers />, label: "Collaborators" },
];

const videoLinks = [
  { href: "https://www.youtube.com/c/saiyam911/videos", label: "English Channel" },
  { href: "https://www.youtube.com/@kshindi", label: "Hindi Channel" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [videoContentOpen, setVideoContentOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 880);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = useCallback((setter) => setter((prev) => !prev), []);
  const closeMobileMenu = () => {
    setMenuOpen(false);
    setVideoContentOpen(false);
  };

  const renderLinks = (isMobileView = false) => (
    <ul className={isMobileView ? styles.mobile_links : styles.sidebar_links}>
      {navLinks.map(({ href, icon, label, external }) => (
        <li key={label}>
          <a
            href={href}
            target={external ? "_blank" : "_self"}
            onClick={isMobileView ? closeMobileMenu : undefined}
            style={{ color: "#1B2731" }}
          >
            {icon} {label}
          </a>
        </li>
      ))}
      <li>
        <a onClick={() => toggle(setVideoContentOpen)} style={{ cursor: "pointer", color: "#1B2731" }}>
          <FaVideo /> Video Content
        </a>
        {videoContentOpen && (
          <ul className={styles.dropdown}>
            {videoLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  onClick={isMobileView ? closeMobileMenu : undefined}
                  style={{ color: "#1B2731" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );

  return (
    <section className={styles.navbar}>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebar_open : styles.sidebar_closed}`}>
          <div className={styles.sidebar_logo}>
            <a href="/">
              <navbarLogo.logo.Svg className={styles.logo} />
            </a>
          </div>
          {renderLinks()}
          <button className={styles.navbarbutton}>
            <a href="https://saiyampathak.substack.com/" className={styles.navbar_text}>Newsletter</a>
          </button>
        </div>
      )}

      {/* Toggle Buttons */}
      <button
        className={isMobile ? styles.mobile_menu_icon : styles.desktop_menu_icon}
        onClick={() => (isMobile ? toggle(setMenuOpen) : toggle(setSidebarOpen))}
      >
        {isMobile ? (menuOpen ? <FaTimes color="black" /> : <FaBars color="white" />) : sidebarOpen ? <FaTimes color="black" /> : <FaBars color="black" />}
      </button>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className={`${styles.mobile_sidebar} ${menuOpen ? styles.mobile_sidebar_active : ""}`}>
          {renderLinks(true)}
          <button className={styles.navbarbutton}>
            <a
              className={styles.navbar_text}
              href="https://saiyampathak.substack.com/"
              onClick={closeMobileMenu}
            >
              Newsletter
            </a>
          </button>
        </div>
      )}
    </section>
  );
};

export default React.memo(Navbar);