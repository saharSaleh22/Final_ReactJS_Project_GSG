import React from "react";
import { ButtonForProduct } from "../../StyledComponents";
import { Link } from "react-router-dom";

function ProductButton(props) {
  return (
    <Link to={`/HomePage/${props.productId}`}>
      <ButtonForProduct ml={props.ml}>
        {props.value}
      </ButtonForProduct>
    </Link>
  );
}
export default ProductButton;
