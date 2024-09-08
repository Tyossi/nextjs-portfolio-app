"use client";
import { useEffect } from "react";
// import "../../styles/globals.css";
// import "./animatedButton.css";

const AnimatedButton = ({ icon, className, textClassName, text }) => {
  useEffect(() => {
    const glowEffects = document.querySelectorAll(".glow-effect");

    glowEffects.forEach((glowEffect) => {
      const glowLines = glowEffect.querySelectorAll("rect");
      const rx = getComputedStyle(glowEffect).borderRadius;

      glowLines.forEach((line) => {
        line.setAttribute("rx", rx);
      });
    });
  }, []);

  return (
    <>
      <button
        className="section__four-CTA glow-effect"
        // onClick={fetchRelease}
      >
        <p className={`${textClassName}`}>{text}</p>
        {icon ? icon : null}
        <svg className="glow-container">
          <rect
            pathLength="100"
            strokeLinecap="round"
            className="glow-blur"
          ></rect>
          <rect
            pathLength="100"
            strokeLinecap="round"
            className="glow-line"
          ></rect>
        </svg>
      </button>
    </>
  );
};

export default AnimatedButton;
