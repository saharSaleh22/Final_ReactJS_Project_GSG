import React from "react";
import { MenuItemLink } from "../../StyledComponents";

function MenuItem(props) {
  return (
    <MenuItemLink to={props.href}>
      {props.item} {props.email}
    </MenuItemLink>
  );
}
export default MenuItem;
