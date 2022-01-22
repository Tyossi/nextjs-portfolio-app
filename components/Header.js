import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 1000);
  });
  return (
    <>
      <div className={styles.my__detailsContainer}>
        <div
          className={
            mounted ? styles.text__detailAnimated : styles.text__detail
          }
        >
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
        <div
          className={
            mounted ? styles.image__containerAnimated : styles.image__container
          }
        >
          <div
            className={
              mounted ? styles.image__shapeRotate : styles.image__shape
            }
          />
          <div
            className={mounted ? styles.image__rotate : styles.image}
            style={{
              backgroundImage: "url(" + "/yossi.jpg" + ")",
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <Image
              src="/yossi.jpg"
              alt="Picture of the author"
              layout="fill"
              className={styles.image__component}
              style={{ backgroundPosition: "top" }}
            /> */}
          </div>
        </div>
      </div>
      <div className={styles.second}></div>
    </>
    // </div>
  );
}
