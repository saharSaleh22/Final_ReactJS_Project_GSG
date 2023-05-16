import React from "react";
import "./styles.css";
import Header from "../Header";
import Hero from "../hero";
import ProductsHome from "../ProductsHomePage";
import Values from "../Values";

function HomePage() {
  return (
   <>
     <Header/>
     <Hero/>
     <ProductsHome/>
     <Values/>
   </>
  );
}
export default HomePage;
