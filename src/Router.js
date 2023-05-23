// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from "./components/Login";
// import SingleProduct from "./components/SingleProduct";
// import Layout from "./Layout";
// import HomePage from "./components/HomePage";
// import Guard1 from "./pages/Guard";

// const isLoggedIn = true; // Replace with your actual login check

// const LoginGuard = ({ children }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <LoginGuard>
//               <HomePage />
//             </LoginGuard>
//           }
//         />
//         <Route
//           path="/login"
//           element={

//               <Login />

//           }
//         />
//         <Route
//           path="/user"
//           element={
//             <Guard1>
//               <SingleProduct />
//             </Guard1>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SingleProduct from "./components/SingleProduct";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/HomePage/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
