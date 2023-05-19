import React from "react";
import { MenuItemLink } from "../../StyledComponents";

function MenuItem(props) {
  return <MenuItemLink href={props.href}>{props.item}</MenuItemLink>;
}
export default MenuItem;
