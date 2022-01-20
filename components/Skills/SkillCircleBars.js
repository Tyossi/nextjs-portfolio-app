import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "../../styles/Skills.module.css";
import "react-circular-progressbar/dist/styles.css";

export default function SkillCircleBar() {
  const score = 20;
  return (
    <div className={styles.skill__circlesCon}>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 90 : 0;
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                circleRatio={
                  0.75
                } /* Make the circle only 0.75 of the full diameter */
                styles={{
                  trail: {
                    strokeLinecap: "round",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    textSize: "40px",
                    strokeLinecap: "round",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 40 : 0;
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                circleRatio={
                  0.75
                } /* Make the circle only 0.75 of the full diameter */
                styles={{
                  trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 40 : 0;
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                circleRatio={
                  0.75
                } /* Make the circle only 0.75 of the full diameter */
                styles={{
                  trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
      </div>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 40 : 0;
            return (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                circleRatio={
                  0.75
                } /* Make the circle only 0.75 of the full diameter */
                styles={{
                  trail: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
      </div>
    </div>
  );
}
