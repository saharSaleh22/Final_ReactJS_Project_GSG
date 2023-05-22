import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ items, children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2500, min: 1024 },
      items: items,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return <Carousel responsive={responsive}>{children}</Carousel>;
};
export default MyCarousel;
