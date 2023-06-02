import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Data = [
  {
    href: "/HomePage",
    item: "Home Page",
  },
  {
    href: "/allproducts",
    item: "products",
  },
  {
    href: "/allUserProducts",
    item: "pre-owned",
  },
  {
    href: "/orders",
    item: "orders",
  },
  {
    href: "/profile",
    item: <PersonIcon sx={{ ml: 1 }} />,
  },
  {
    href: "/orders",
    item: <ShoppingCartIcon sx={{ ml: 1 }} />,
  },
  {
    href: "/favorites",
    item: <FavoriteIcon sx={{ ml: 1 }} />,
  },
];

export default Data;
