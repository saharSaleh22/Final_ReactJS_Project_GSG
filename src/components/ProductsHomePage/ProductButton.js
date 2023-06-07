import React from "react";
import { ButtonForProduct } from "../../StyledComponents";
import { Link } from "react-router-dom";

function ProductButton(props) {
  return props.type === "all" ? (
    <Link to={`/allProducts/${props.productId}`}>
      <ButtonForProduct ml={props.ml}>{props.value}</ButtonForProduct>
    </Link>
  ) : (
    <Link to={`/alluserproducts/${props.productId}`}>
      <ButtonForProduct ml={props.ml}>{props.value}</ButtonForProduct>
    </Link>
  );
}
export default ProductButton;
