import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SingleProduct from "./components/SingleProduct";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import AllProductsPage from "./components/AllProductsPage";
import Orders from "./components/Orders";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/allProducts/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
