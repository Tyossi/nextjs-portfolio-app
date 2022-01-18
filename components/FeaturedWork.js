import Image from "next/image";

import styles from "../styles/FeaturedWork.module.css";
import WorkDisplay from "./WorkDisplay";

export default function FeaturedWork() {
  return (
    <div className={styles.featured__container}>
      <div className={styles.FeaturedWork__contentBox}>
        <p className={styles.featured__container__text}>Portfolio</p>
        <h1>Featured Work</h1>
        <WorkDisplay />
      </div>
    </div>
  );
}
