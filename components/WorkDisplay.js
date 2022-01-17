import Image from "next/image";
import styles from "../styles/WorkDisplay.module.css";

export default function WorkDisplay() {
  return (
    <div className={styles.FeaturedWork__component}>
      <div className={styles.image}>
        <Image
          src="/nx1.JPG"
          alt="project__image"
          layout="fill"
          className={styles.image__component}
        />
      </div>
    </div>
    //   <Image
    //     src="/nx2.JPG"
    //     alt="project__image"
    //     layout="fill"
    //     className={styles.image__component}
    //   />
    //   <Image
    //     src="/nx3.JPG"
    //     alt="project__image"
    //     layout="fill"
    //     className={styles.image__component}
    //   />
  );
}
