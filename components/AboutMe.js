import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.about__container} id="aboutMe">
      <h1 className={styles.about__header}>About Me</h1>
      <p className={styles.about__headerSub}>Introducing Myself</p>

      <div className={styles.my__detailsContainer}>
        <div className={styles.my__detailsContent}>
          <VisibilitySensor>
            {({ isVisible }) => {
              return (
                <>
                  <div
                    className={
                      isVisible
                        ? styles.text__detailAnimated
                        : styles.text__detail
                    }
                  >
                    <p className={styles.my__name}>
                      Omotoyosi Stephen Ogundairo
                    </p>
                    <h3 className={styles.my__jobTitle}>Frontend Developer</h3>
                    <p className={styles.coverLetter__CTA}>Web Development</p>
                    <h4 className={styles.my__location}>Based in Nigeria</h4>
                    <div className={styles.experience}>
                      <h1 className={styles.experience__year}>2+</h1>
                      <p>
                        Years of
                        <br />
                        Experience
                      </p>
                    </div>
                    <span>
                      <p
                        style={{
                          fontSize: "1.6rem",
                        }}
                      >
                        Experienced Web Developer with a track record of
                        building web apps according to modern best practices. I
                        am proficient in ReactJs, Javascript, NextJs,
                        Typescript, VueJs, NodeJs, CSS and Googling.
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

                      <Image
                        src="/yossi.jpg"
                        alt="Picture of the author"
                        width={300}
                        height={450}
                        priority
                        objectFit="cover"
                        quality={100}
                        className={styles.main}
                      />
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
