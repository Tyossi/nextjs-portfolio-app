import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.my__detailsContainer}>
        <div className={styles.text__detail}>
          <p className={styles.my__name}>Toyosi Ogundairo</p>
          <h3 className={styles.my__jobTitle}>Frontend Developer</h3>
          <p className={styles.coverLetter__CTA}>Web Development</p>
          <h4 className={styles.my__location}>Based in Nigeria</h4>
          <div className={styles.experience}>
            <h1 className={styles.experience__year}>2+</h1>Years of
            <br />
            Experience
          </div>
        </div>
        <div className={styles.image__container}>
          <div className={styles.image__shape}></div>
          <div className={styles.image}>
            <Image
              src="/yossi.jpg"
              alt="Picture of the author"
              layout="fill"
              className={styles.image__component}
            />
          </div>
        </div>
      </div>
      <div className={styles.second}></div>
    </>
    // </div>
  );
}
