import React from "react";
import { ButtonForProduct } from "../../StyledComponents";

function ProductButton(props) {
  return <ButtonForProduct size="small">{props.value}</ButtonForProduct>;
}
export default ProductButton;
