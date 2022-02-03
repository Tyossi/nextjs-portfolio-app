import Image from "next/image";
import ReactIcon from "../public/icons/react-icon.svg";
import HtmltIcon from "../public/icons/html-icon.svg";
import FirebaseIcon from "../public/icons/firebase-icon.svg";
import JavascriptIcon from "../public/icons/javascript-iconn.svg";
import ReduxIcon from "../public/icons/redux-icon.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/WorkDisplay.module.css";

export default function WorkDisplay({ projects }) {
  return (
    <div>
      <div className={styles.image}>
        {projects.map((project) => {
          return (
            <Link
              href="/project/[id]"
              as={`/project/${project.id}`}
              scroll={false}
              passHref
              key={project.id}
            >
              <motion.div
                style={{ cursor: "pointer" }}
                className={styles.project}
                whileHover={{ scale: 1.0 }}
                whileInView={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={styles.tech__logoOne}>
                  <ReactIcon />
                </div>
                <div
                  className={
                    project.id === "1"
                      ? styles.tech__logoTwo
                      : styles.tech__logoTwoFire
                  }
                >
                  {project.id === "2" ? <FirebaseIcon /> : <HtmltIcon />}
                </div>
                <div
                  className={
                    project.id === "1"
                      ? styles.tech__logoThree
                      : styles.tech__logoThreeRedux
                  }
                >
                  {project.id === "2" ? <ReduxIcon /> : <JavascriptIcon />}
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
      </div>
    </div>
  );
}
