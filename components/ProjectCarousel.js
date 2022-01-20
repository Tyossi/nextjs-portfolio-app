import React from "react";
import Slider from "react-slick";

export default function ProjectCarousel(props) {
  const settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return <Slider {...settings}>{props.children}</Slider>;
}
