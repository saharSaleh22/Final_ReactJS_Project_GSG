import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Box, Typography } from "@mui/material";
import SliderController from "./SliderController";

function ImageSlider() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/products");
    result = await result.json();
    setProducts(result);
  };
  return (
    <Box className={styles.container1}>
      <Typography variant="h5" gutterBottom>
        Top Sellers
      </Typography>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {products.map((slide, i) => (
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide.image} alt="slide_image" />
          </SwiperSlide>
        ))}

        <SliderController />
      </Swiper>
    </Box>
  );
}

export default ImageSlider;
