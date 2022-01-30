import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../styles/Skills.module.css";

export default function SkillCircleBar() {
  const score = 20;
  return (
    <div className={styles.skill__circlesCon}>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 98 : 0;
            return (
              <CircularProgressbar
                // className={styles.CircularProgressbar__text}
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
                    stroke: "hsla(0,0%,100%,.09)",
                  },
                  path: {
                    strokeLinecap: "round",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                    stroke: "#00CC92",
                  },
                  text: {
                    fill: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "1rem",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
        <h1 style={{ textAlign: "center" }} className={styles.skill}>
          React
        </h1>
      </div>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 88 : 0;
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
                    stroke: "hsla(0,0%,100%,.09)",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                    stroke: "#00CC92",
                  },

                  text: {
                    fill: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "1rem",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
        <h1 style={{ textAlign: "center" }} className={styles.skill}>
          JavaScript
        </h1>
      </div>
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
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    stroke: "hsla(0,0%,100%,.09)",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                    stroke: "#00CC92",
                  },
                  text: {
                    fill: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "1rem",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
        <h1 style={{ textAlign: "center" }} className={styles.skill}>
          CSS
        </h1>
      </div>
      <div className={styles.circle__bar}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? 70 : 0;
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
                    stroke: "hsla(0,0%,100%,.09)",
                  },
                  path: {
                    strokeLinecap: "butt",
                    transform: "rotate(-135deg)",
                    transformOrigin: "center center",
                    transition: "stroke-dashoffset 1.5s ease .5s",
                    stroke: "#00CC92",
                  },
                  text: {
                    fill: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "1rem",
                  },
                }}
              />
            );
          }}
        </VisibilitySensor>
        <h1 style={{ textAlign: "center" }} className={styles.skill}>
          Typescript
        </h1>
      </div>
    </div>
  );
}
