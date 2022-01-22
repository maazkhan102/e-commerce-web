import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../Redux/productSlice";
const Header = () => {
  const cartItems = useSelector(selectCart);
  return (
    <div>
      <div className="header-top text-xl sm:space-x-3 md:space-x-6  ">
        <Link to="/">
          <div className="header-left header-cart">
            <img
              alt="HeaderImg"
              className=""
              src="https://atghar.com/static/media/appbarlogo3.9e6405f2.png"
            />
          </div>
        </Link>
        <div className="hidden md:flex search">
          <input type="text" />
          <SearchIcon className="mx-3" />
        </div>
        <div className="header-right hidden sm:flex items-center flex-col hover:underline ">
          {/* <h4>Been here ?</h4> */}
          <button className="w-24">Sign In</button>
        </div>
        <div className="text-md hidden sm:inline cursor-pointer text-white  hover:underline">
          <p>
            Returns &<strong> Orders</strong>
          </p>
        </div>
        <Link to="/cart">
          <div className="header-cart text-white font-bold  cursor-pointer flex items-center  p-2">
            <ShoppingCartOutlinedIcon
              style={{ color: "white", fontSize: "40px" }}
            />
            <div className="relative bottom-5 right-1 bg-yellow-400 rounded-2xl w-8 flex items-center justify-center mt-2">
              <span
                style={{ color: "white", underline: "none", fontSize: "17px" }}
              >
                {cartItems.length}
              </span>
            </div>
            <p className="hidden sm:inline hover:underline">Basket</p>
          </div>
        </Link>
      </div>
      <div className="text-white header-bottom flex  items-center justify-start md:text-lg space-x-3">
        <p className="nav-2">
          <MenuIcon /> All
        </p>
        <p className="nav-2">Today's Deals</p>
        <p className="nav-2 ">Customer Service</p>
        <p className="nav-2">Registry</p>
        <p className="nav-2">Gift Cards</p>
        <p className="nav-2">Sell</p>
      </div>
    </div>
  );
};

export default Header;
