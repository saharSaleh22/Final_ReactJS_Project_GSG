import React, { useContext } from "react";
import Header from "../Header";
import Hero from "../hero";
import ProductsHome from "../ProductsHomePage";
import Values from "../Values";
import Contacts from "../Contacts";
import ImageSlider from "../ImagesSlider/ImageSlider";
import BlogsSection from "../BlogsSection/BlogsSection";
import Footer from "../Footer";
import { EmailContext } from "../../EmailContext";

function HomePage() {
  const {email} = useContext(EmailContext);

  return (
    <>
      <Header />
      <Hero />
      <ProductsHome />
      <Values />
      <Contacts />
      <ImageSlider />
      <BlogsSection />
      <Footer />
    </>
  );
}
export default HomePage;
