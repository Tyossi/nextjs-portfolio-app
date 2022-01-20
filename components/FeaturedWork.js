// import { useState, useRef, useMemo, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "../styles/FeaturedWork.module.css";
import WorkDisplay from "./WorkDisplay";

export default function FeaturedWork() {
  // const targetRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // const options = useMemo(() => {
  //   return {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.3,
  //   };
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options);
  //   const currentTarget = targetRef.current;
  //   if (currentTarget) observer.observe(currentTarget);

  //   return () => {
  //     if (currentTarget) observe.unobserve(currentTarget);
  //   };
  // }, [targetRef, options]);

  return (
    <div className={styles.featured__container}>
      <div className={styles.featuredWork__contentBox}>
        <p className={styles.featured__container__text}>Portfolio</p>
        <VisibilitySensor>
          {({ isVisible }) => {
            return (
              <h1
                data-text="Featured Work"
                // ref={targetRef}
                className={isVisible ? styles.animated__class : null}
              >
                Featured Work
              </h1>
            );
          }}
        </VisibilitySensor>
        <div className={styles.workDisplay__component}>
          <WorkDisplay />
        </div>
      </div>
    </div>
  );
}
