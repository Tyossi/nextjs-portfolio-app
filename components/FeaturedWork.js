import VisibilitySensor from "react-visibility-sensor";
import WorkDisplay from "./WorkDisplay";
import AnimatedButton from "./AnimatedButton/AnimatedButton";
import styles from "../styles/FeaturedWork.module.css";

export default function FeaturedWork({ projects }) {
  return (
    <div className={styles.featured__container} id="featuredWork">
      <div className={styles.featuredWork__contentBox}>
        <div className={styles.featured__projects__and__CTA}>
          <span>
            <p className={styles.featured__container__text}>Featured</p>
            <VisibilitySensor>
              {({ isVisible }) => {
                return (
                  <h1
                    data-text="Projects"
                    className={isVisible ? styles.animated__class : null}
                  >
                    Projects
                  </h1>
                );
              }}
            </VisibilitySensor>
          </span>
          {/* <button>View Other Projects</button> */}
        </div>
        <div className={styles.workDisplay__component}>
          <WorkDisplay projects={projects} />
        </div>
        {/* <AnimatedButton /> */}
      </div>
    </div>
  );
}
