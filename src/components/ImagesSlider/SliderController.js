import React from "react";
import styles from "./styles.module.css";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box } from "@mui/material";
function SliderController() {
  return (
    <Box className={`slider-controler ${styles.sliderControler}`}>
      <Box
        className={`swiper-button-prev slider-arrow ${styles.swiperButtonPrev} ${styles.sliderArrow}`}
      >
        <KeyboardDoubleArrowLeftIcon sx={{ color: "black" }} />
      </Box>
      <Box
        className={`swiper-button-next slider-arrow ${styles.swiperButtonNext} ${styles.sliderArrow}`}
      >
        <KeyboardDoubleArrowRightIcon sx={{ color: "black" }} />
      </Box>
      <Box className={`swiper-pagination ${styles.swiperPagination}`}></Box>
    </Box>
  );
}
export default SliderController;
