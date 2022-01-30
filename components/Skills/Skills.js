import VisibilitySensor from "react-visibility-sensor";
import styles from "../../styles/Skills.module.css";
// import "react-circular-progressbar/dist/styles.css";
import SkillCircleBar from "./SkillCircleBars";

export default function Skill() {
  const score = 20;
  return (
    <div className={styles.skill__container}>
      <div className={styles.skillGauge__andText}>
        <div className={styles.skill__containerText}>
          <p>Skills</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              return (
                <h1
                  className={isVisible ? styles.animated__class : null}
                  data-text={"Programming Skills"}
                >
                  Programming Skills
                </h1>
              );
            }}
          </VisibilitySensor>
        </div>
        <SkillCircleBar />
      </div>
    </div>
  );
}
