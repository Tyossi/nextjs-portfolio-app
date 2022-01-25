import { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.about__container}>
      <h1>About Me</h1>
      <span>Introducing Myself</span>

      <div className={styles.my__detailsContainer}>
        <div className={styles.my__detailsContent}>
          <VisibilitySensor>
            {({ isVisible }) => {
              console.log(isVisible);
              return (
                <>
                  <div
                    className={
                      isVisible
                        ? styles.text__detailAnimated
                        : styles.text__detail
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
                    <span>
                      <p>
                        Experienced front end software Developer with a track
                        record of building web apps according to mordern best
                        practices. I am proficient in ReactJs, Javascript,
                        NextJs, Typescript, VueJs, NodeJs, and googling.
                      </p>
                    </span>
                  </div>
                  <div
                    className={
                      isVisible
                        ? styles.image__containerAnimated
                        : styles.image__container
                    }
                  >
                    <div
                      className={
                        isVisible
                          ? styles.image__contentAnimated
                          : styles.image__content
                      }
                    >
                      <div
                        className={
                          isVisible
                            ? styles.image__shapeRotate
                            : styles.image__shape
                        }
                      />
                      {/* <div
                      style={{
                        backgroundImage: "url(" + "/yossi.jpg" + ")",

                        backgroundPosition: "top",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        transition: "all 0.4s ease",
                        minWidth: "100%",
                      }}
                    /> */}

                      <Image
                        src="/yossi.jpg"
                        alt="Picture of the author"
                        width={300}
                        height={450}
                        // layout="fill"
                        objectFit="cover"
                        quality={100}
                        className={styles.main}
                      />
                      {/* </div> */}
                    </div>
                  </div>
                </>
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
}
