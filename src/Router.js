import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SingleProduct from "./components/SingleProduct";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import AllProductsPage from "./components/AllProductsPage";
import Orders from "./components/Orders";
import UserProducts from "./components/BlogsSection/UserProducts";
import Likes from "./components/FavoritesPage";
import ConfirmedOrders from "./components/ConfirmedOrders";
import Profile from "./components/Profile";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route index element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/alluserProducts" element={<UserProducts />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Orders />} />
          <Route path="/orders" element={<ConfirmedOrders />} />
          <Route path="/favorites" element={<Likes />} />
          <Route
            path="/allProducts/:id"
            element={<SingleProduct type={"all"} />}
          />
          <Route
            path="/alluserproducts/:id"
            element={<SingleProduct type={"user"} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
