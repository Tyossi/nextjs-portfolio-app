import Image from "next/image";
import HomeIcon from "../public/icons/home-icon.svg";
import ReactIcon from "../public/icons/react-icon.svg";
import HtmltIcon from "../public/icons/html-icon.svg";
import FirebaseIcon from "../public/icons/firebase-icon.svg";
import JavascriptIcon from "../public/icons/javascript-iconn.svg";
import ReduxIcon from "../public/icons/redux-icon.svg";

import Link from "next/link";
import styles from "../styles/WorkDisplay.module.css";
import { motion } from "framer-motion";

export default function WorkDisplay({ projects }) {
  return (
    <div>
      <div className={styles.image}>
        {projects.map((project) => {
          return (
            <Link href="/project/[id]" as={`/project/${project.id}`}>
              <motion.div
                style={{ cursor: "pointer" }}
                className={styles.project}
                whileHover={{ scale: 1.0 }}
                whileInView={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.tech__logoOne}>
                  <ReactIcon
                  // className={
                  //   project.id === "1"
                  //     ? styles.smooth__zigzag__animOne
                  //     : styles.smooth__zigzag__animThree
                  // }
                  />
                </div>
                <div
                  className={
                    project.id === "1"
                      ? styles.tech__logoTwo
                      : styles.tech__logoTwoFire
                  }
                >
                  {project.id === "2" ? (
                    <FirebaseIcon
                    // className={
                    //   project.id === "1"
                    //     ? styles.smooth__zigzag__animOne
                    //     : styles.smooth__zigzag__animThree
                    // }
                    />
                  ) : (
                    <HtmltIcon />
                  )}
                </div>
                <div
                  className={
                    project.id === "1"
                      ? styles.tech__logoThree
                      : styles.tech__logoThreeRedux
                  }
                >
                  {project.id === "2" ? (
                    <ReduxIcon />
                  ) : (
                    <JavascriptIcon
                    // className={
                    //   project.id === "1"
                    //     ? styles.smooth__zigzag__animOne
                    //     : styles.smooth__zigzag__animThree
                    // }
                    />
                  )}
                </div>
                <Image
                  src={`${project.image}`}
                  alt="project__image"
                  width="750"
                  height="450"
                  className={styles.image__component}
                />
              </motion.div>
            </Link>
          );
        })}

        {/* <div className={styles.project}>
          <div className={styles.tech__logo}>
            <HomeIcon className={styles.smooth__zigzag__animOne} />
          </div>
          <Image
            src="/SC1_4.png"
            alt="project__image"
            width="750"
            height="450"
            className={styles.image__component}
          />
        </div> */}
      </div>
      {/* <div className={styles.project__description}>
        <p className={styles.project__descriptionText}>
          <span className="composition__photo--project-description__text--heading">
            SilverScreen
          </span>
          <br />
          Is a React app which exemplifies the SPA power of React using dynamic
          nested routes.
        </p>
      </div> */}
    </div>
  );
}
