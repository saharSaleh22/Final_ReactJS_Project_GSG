import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
const Data = [
  {
    href: "/HomePage",
    item: "Home Page",
  },
  {
    href: "/allproducts",
    item: "shipping",
  },
  {
    href: "/allproducts",
    item: "products",
  },
  {
    href: "/orders",
    item: "orders",
  },
  {
    href: "/profile",
    item: <PersonIcon sx={{ ml: 2 }} />,
  },
  {
    href: "any/link",
    item: <ShoppingCartIcon sx={{ ml: 2 }} />,
  },
];

export default Data;
