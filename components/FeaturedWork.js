import VisibilitySensor from "react-visibility-sensor";
import WorkDisplay from "./WorkDisplay";
import styles from "../styles/FeaturedWork.module.css";

export default function FeaturedWork({ projects }) {
  return (
    <div className={styles.featured__container} id="featuredWork">
      <div className={styles.featuredWork__contentBox}>
        <p className={styles.featured__container__text}>Featured</p>
        <VisibilitySensor>
          {({ isVisible }) => {
            return (
              <h1
                data-text="Portfolio"
                className={isVisible ? styles.animated__class : null}
              >
                Portfolio
              </h1>
            );
          }}
        </VisibilitySensor>
        <div className={styles.workDisplay__component}>
          <WorkDisplay projects={projects} />
        </div>
      </div>
    </div>
  );
}
