import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/HomePage" element={<HomePage/>} />
          <Route path="/products/:id" element={""} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
