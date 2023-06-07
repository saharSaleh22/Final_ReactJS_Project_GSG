import React from "react";
import { useContext, useEffect, useState } from "react";
import { EmailContext } from "../../EmailContext";
import { StyledBadge, StyledBadgeCount } from "../../StyledComponents";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavIcon() {
  const [products, setProducts] = useState([]);
  const { email } = useContext(EmailContext);

  const getProducts = async () => {
    let result = await fetch("http://localhost:3006/likes");
    result = await result.json();
    const filteredProducts = result.filter(
      (product) => product.email === email
    );
    setProducts(filteredProducts);
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <StyledBadge>
      <FavoriteIcon sx={{ ml: 1 }} />
      {products.length > 0 && <StyledBadgeCount>{products.length }</StyledBadgeCount>}
    </StyledBadge>
  );
}

export default FavIcon;
