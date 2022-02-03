import { timelineData } from "../timelineData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styles from "../styles/Timeline.module.css";

export default function Timeline() {
  return (
    <div className={styles.timeline__container} id="timeline">
      <h1 className={styles.timelineContainer__title}>Timeline</h1>
      <VerticalTimeline>
        {timelineData.flatMap((timeline) => {
          const isWorkIcon = timeline.icon === "work";
          const showButton =
            timeline.buttonText !== undefined &&
            timeline.buttonText !== null &&
            timeline.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={timeline.id}
              date={timeline.date}
              dateClassName="vertical-timeline-element-date"
              iconStyle={{
                background: timeline.background,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              icon={timeline.icon}
            >
              <div className={styles.timeline__contentBox}>
                <h3 className="vertical-timeline-element-title">
                  {timeline.title}
                </h3>
                <h5 className="vertical-timeline-elementsubtitle">
                  {timeline.location}
                </h5>
                <p id="description">{timeline.description}</p>
              </div>
              {showButton && (
                <a
                  href={`${timeline.url}`}
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.button}
                  style={{
                    backgroundColor: timeline.background,
                    color: "#fff",
                  }}
                >
                  {timeline.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
