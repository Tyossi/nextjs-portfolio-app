import Image from "next/image";
import HomeIcon from "../public/icons/home-icon.svg";

import styles from "../styles/WorkDisplay.module.css";

export default function WorkDisplay() {
  return (
    <div className={styles.image}>
      <div className={styles.project__description}>
        <p className={styles.project__descriptionText}>
          <span className="composition__photo--project-description__text--heading">
            SilverScreen
          </span>
          <br />
          Is a React app which exemplifies the SPA power of React using dynamic
          nested routes.
        </p>
      </div>
      <div className={styles.tech__logo}>
        <HomeIcon className={styles.smooth__zigzag__animOne} />
      </div>
      <Image src="/nx1.JPG" alt="project__image" width="550" height="350" />
    </div>
  );
}
