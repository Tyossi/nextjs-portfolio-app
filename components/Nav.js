import MenuIcon from "../public/icons/menu-icon.svg";
import CancelIcon from "../public/icons/cancel-icon.svg";
import HomeIcon from "../public/icons/navhome-icon.svg";
import AboutMeIcon from "../public/icons/aboutme-icon2.svg";
import WorkIcon from "../public/icons/work-icon.svg";
import SkillsIcon from "../public/icons/skills-icon.svg";
import TimelineIcon from "../public/icons/timeline-icon.svg";
import ContactIcon from "../public/icons/contact-icon.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Nav.module.css";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Nav() {
  const [show, setShow] = useState(false);

  console.log(show);
  console.log("rendered");

  return (
    <>
      <motion.nav
        initial={{ x: 0, opacity: 0 }}
        animate={show ? { opacity: 1, x: 100 } : { x: -100, opacity: 0 }}
        // variants={variants}
        transition={{ duration: 0.5 }}
        className={styles.nav__container}
      >
        <motion.div className={styles.inner__nav}>
          <ul>
            <a href="#header" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <HomeIcon className={styles.navIcon} />
                <li>Home</li>
              </span>
            </a>
            <a href="#aboutMe" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <AboutMeIcon className={styles.navIcon} />
                <li>About Me</li>
              </span>
            </a>
            <a href="#featuredWork" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <WorkIcon className={styles.navIcon} />
                <li>Featured Works</li>
              </span>
            </a>
            <a href="#skills" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <SkillsIcon className={styles.navIcon} />
                <li>Skills</li>
              </span>
            </a>
            <a href="#timeline" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <TimelineIcon className={styles.navIcon} />
                <li>Timeline</li>
              </span>
            </a>
            <a href="#contact" onClick={() => setShow(!show)}>
              <span className={styles.navItem}>
                <ContactIcon className={styles.navIcon} />
                <li>Contact Me</li>
              </span>
            </a>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className={styles.toggle}
        onClick={() => setShow(!show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {show ? <CancelIcon /> : <MenuIcon />}
      </motion.button>
    </>
  );
}
