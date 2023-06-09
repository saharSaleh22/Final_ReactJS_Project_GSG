import React, { useCallback } from "react";
import { useContext, useEffect, useState } from "react";
import { EmailContext } from "../../EmailContext";
import { StyledBadge, StyledBadgeCount } from "../../StyledComponents";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartIcon() {
  const [orders, setOrders] = useState([]);
  const { email } = useContext(EmailContext);

  const getOrders = useCallback(async () => {
    let result = await fetch("http://localhost:3006/orders");
    result = await result.json();
    const filteredOrders = result.filter((order) => {
      if (order.email === email && order.confirm === 0) {
        return true; // Add order to filteredOrders
      }
      return false; // Exclude order from filteredOrders
    });    setOrders(filteredOrders);
  }, [email, orders]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);
  return (
    <StyledBadge>
      <ShoppingCartIcon sx={{ ml: 1 }} />
      {orders.length > 0 && <StyledBadgeCount>{orders.length }</StyledBadgeCount>}
    </StyledBadge>
  );
}

export default CartIcon;
