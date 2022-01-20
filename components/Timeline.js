import InfoIcon from "../public/icons/info-icon.svg";
import HomeIcon from "../public/icons/home-icon.svg";
import { timelineData } from "../timelineData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "../styles/Timeline.module.css";

export default function Timeline() {
  const workIconStyles = { background: "#06d5a0" };
  const schoolIconStyle = { background: "#f9c74f" };

  return (
    <div
      className={styles.timeline__container}
      //   className="vertical-timeline-element-content"
    >
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
              key={timeline.key}
              date={timeline.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyle}
              icon={isWorkIcon ? <InfoIcon /> : <HomeIcon />}
            >
              <div className={styles.timeline__contentBox}>
                <h3 className="vertical-timeline-element-title">
                  {timeline.title}
                </h3>
                <h5 className="vertical-timeline-elementsubtitle">
                  {timeline.location}
                </h5>
                <p id="description">{timeline.description}</p>
                {showButton && (
                  <a
                    href="#"
                    className={isWorkIcon ? "workButton" : "schoolButton"}
                  >
                    {timeline.buttonText}
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
