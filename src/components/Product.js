import React, { useEffect, useState } from "react";
import "./Product.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useDispatch } from "react-redux";
import { addDetails, incItem, quantityAdd } from "../Redux/productSlice";
import { Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({
  title,
  image,
  rating,
  price,
  description,
  category,
  prime,
  discount,
}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(true);
  const [products, setProducts] = useState({});
  const newprice = discount ? Math.round(price - price / discount) : price;

  // function discount(amount, discount) {
  //   return amount - amount / 10;
  // }

  // const removeItem = (e) => {
  //   e.preventDefault();
  //   dispatch(decItem());
  //   Alert("Items");
  // };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addDetails(products));
  };

  useEffect(() => {
    setProducts(() => ({
      title,
      image,
      rating,
      price,
      newprice,
      description,
      category,
      prime,
      discount,
      quantity: 1,
    }));
  }, [
    title,
    rating,
    image,
    price,
    newprice,
    description,
    category,
    prime,
    discount,
  ]);
  const addItem = (e) => {
    e.preventDefault();

    if (count === true) {
      dispatch(incItem(products));
      const subtotal = Math.round(discount ? price - price / discount : price);
      const data = {
        subtotal: subtotal,
        title: title,
        quantity: 1,
      };
      dispatch(quantityAdd(data));
      setCount(false);
    }
  };
  return (
    <>
      {title ? (
        <div className="product mx-5 bg-white relative flex flex-col p-5  z-30 my-5">
          <p className="text-xl absolute top-2 right-2 italic  text-gray-400 ">
            {category.toUpperCase()}
          </p>
          <div className="product-image p-3">
            <img alt="Product" src={image} />
          </div>
          <h4 className="my-3 font-bold">{title}</h4>
          <div className="product-rating flex text-lg">
            Rating:{" "}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p className="h-5" key={i}>
                  ⭐
                </p>
              ))}
          </div>
          <p className="text-xl my-2 text-left line-clamp">{description}</p>
          {discount ? (
            <div>
              <strike className="text-xl font-bold mb-5 strike-through">
                Original Price: {price}$
              </strike>
              <h1 className="text-xl font-bold mb-5">
                Discounted Price: {Math.round(price - price / discount)}$ (
                {discount}
                %)
              </h1>
            </div>
          ) : (
            <h1 className="text-xl font-bold mb-5">
              Price: {price}
              <AttachMoneyIcon />
            </h1>
          )}
          {!prime && (
            <div className="flex items-center space-x-2 -mt-5">
              <img
                className="w-16 mx-2"
                alt="prime pic"
                src="https://links.papareact.com/fdw"
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery!</p>
            </div>
          )}
          <button
            disabled={count === false}
            onClick={addItem}
            className=" mt-auto text-sm md:text-lg bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 "
          >
            Add to Cart
          </button>
          <button
            onClick={handleClick}
            className="mt-2 text-sm md:text-lg bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 "
          >
            <Link className="w-max" to="/details">
              Details
            </Link>
          </button>
        </div>
      ) : (
        <div style={{ fontSize: "500px" }} className="flex items-center">
          <Typography variant="h1">
            <Skeleton />
          </Typography>
        </div>
      )}
    </>
  );
};

export default Product;
