import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaBars, FaTimes, FaInfoCircle, FaVideo, FaPencilAlt, FaUsers, FaClipboardList, FaNewspaper } from "react-icons/fa";

const navbarLogo = {
  logo: {
    Svg: require("@site/static/img/navbarLogo.svg").default,
  },
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);  // Track desktop sidebar state
  const [videoContentOpen, setVideoContentOpen] = useState(false); // Track video content dropdown state

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDesktopSidebar = () => {
    setDesktopSidebarOpen(!desktopSidebarOpen); // Toggle the sidebar
  };

  const toggleVideoContent = () => {
    setVideoContentOpen(!videoContentOpen); // Toggle the video content dropdown
  };

  return (
    <section className={styles.navbar}>
      {/* Sidebar for Desktop */}
      {!isMobile && (
        <div className={`${styles.sidebar} ${desktopSidebarOpen ? styles.sidebar_open : styles.sidebar_closed}`}>
          <div className={styles.sidebar_logo}>
            <a href="/">
              <navbarLogo.logo.Svg className={styles.logo} />
            </a>
          </div>
          <ul className={styles.sidebar_links}>
            <li>
              <a href="#About" style={{ color: "#1B2731" }}>
                <FaInfoCircle className={styles.icon} /> About
              </a>
            </li>
            <li>
              <a onClick={toggleVideoContent} style={{ color: "#1B2731", cursor: "pointer" }}>
                <FaVideo className={styles.icon} /> Video Content
              </a>
              {videoContentOpen && (
                <ul className={styles.dropdown}>
                  <li>
                    <a href="https://www.youtube.com/c/saiyam911/videos" target="_blank" style={{ color: "#1B2731" }}>
                      English Channel
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@kshindi" target="_blank" style={{ color: "#1B2731" }}>
                      Hindi Channel
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="https://blog.kubesimplify.com/" target="_blank" style={{ color: "#1B2731" }}>
                <FaPencilAlt className={styles.icon} /> Blog Content
              </a>
            </li>
            {/* <li>
              <a href="#About" style={{ color: "#1B2731" }}>
                <FaUsers className={styles.icon} /> Mission
              </a>
            </li> */}
            <li>
              <a href="#workshops" style={{ color: "#1B2731" }}>
                <FaClipboardList className={styles.icon} /> Workshops
              </a>
            </li>
            {/* <li>
              <a href="https://saiyampathak.substack.com/" style={{ color: "#1B2731" }}>
                <FaNewspaper className={styles.icon} /> Newsletter
              </a>
            </li> */}
          </ul>

          <button className={styles.navbarbutton}>
            <a
              className={styles.navbar_text}
              href="https://saiyampathak.substack.com/"
            >
              Newsletter
            </a>
          </button>
        </div>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button className={styles.mobile_menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes color={isMobile ? "black" : "black"} /> : <FaBars color={isMobile ? "white" : "black"} />}
        </button>
      )}



      {/* Desktop Toggle Button */}
      {!isMobile && (
        <button className={styles.desktop_menu_icon} onClick={toggleDesktopSidebar}>
          {desktopSidebarOpen ? (
            <FaTimes color={isMobile ? "black" : "black"} />
          ) : (
            <FaBars color={isMobile ? "black" : "black"} />
          )}
        </button>
      )}

      {/* Mobile Slide-in Sidebar */}
      {isMobile && (
        <div className={`${styles.mobile_sidebar} ${menuOpen ? styles.mobile_sidebar_active : ""}`}>
          <ul className={styles.mobile_links}>
            <li>
              <a href="#About" style={{ color: "#1B2731" }}>
                <FaInfoCircle className={styles.icon} /> About
              </a>
            </li>
            <li>
              <a onClick={toggleVideoContent} style={{ color: "#1B2731", cursor: "pointer" }}>
                <FaVideo className={styles.icon} /> Video Content
              </a>
              {videoContentOpen && (
                <ul className={styles.dropdown}>
                  <li>
                    <a href="https://www.youtube.com/c/saiyam911/videos" target="_blank" style={{ color: "#1B2731" }}>
                      English Channel
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@kshindi" target="_blank" style={{ color: "#1B2731" }}>
                      Hindi Channel
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="https://blog.kubesimplify.com/" target="_blank" style={{ color: "#1B2731" }}>
                <FaPencilAlt className={styles.icon} /> Blog Content
              </a>
            </li>
            {/* <li>
                          <a href="#About" style={{ color: "#1B2731" }}>
                <FaUsers className={styles.icon} /> Mission
              </a>
            </li> */}
            <li>
              <a href="#workshops" style={{ color: "#1B2731" }}>
                <FaClipboardList className={styles.icon} /> Workshops
              </a>
            </li>
            {/* <li>
              <a href="https://saiyampathak.substack.com/" style={{ color: "#1B2731" }}>
                <FaNewspaper className={styles.icon} /> Newsletter
              </a>
            </li> */}
          </ul>

          
          <button className={styles.navbarbutton}>
            <a
              className={styles.navbar_text}
              href="https://saiyampathak.substack.com/"
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
