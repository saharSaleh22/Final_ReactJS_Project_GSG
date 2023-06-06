import PersonIcon from "@mui/icons-material/Person";
import FavIcon from "./Fav";
import CartIcon from "./orders";
import ConfirmedOrders from "./confirmedOrders";




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
    item: <ConfirmedOrders/>,
  },
  {
    href: "/profile",
    item: <PersonIcon sx={{ ml: 1 }} />,
  },
  {
    href: "/cart",
    item: <CartIcon/>
  },       

  {
    href: "/favorites",
    item: <FavIcon/>
  },
];

export default Data;
