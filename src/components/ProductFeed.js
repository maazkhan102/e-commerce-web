import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { selectProduct } from "../Redux/productSlice";
import "./ProductFeed.css";
import { Alert, Skeleton, Typography } from "@mui/material";

const ProductFeed = () => {
  const products = useSelector(selectProduct);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
  function getPrime(max) {
    const num = Math.floor(Math.random() * max);
    return num === 0 ? true : false;
  }

  return (
    <>
      {products ? (
        <div className="movetop grid grid-flow-row-dense lg:grid-cols-3   2xl:grid-cols-4  md:grid-cols-2 w-full  md:-mt-72 sm:-mt-48">
          {products.slice(0, 3).map((product, i) => (
            <Product
              key={i}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={getRandomInt(5)}
              image={product.image}
              category={product.category}
              prime={getPrime(2)}
              discount={0}
            />
          ))}
          {products.slice(3, 6).map((product, i) => (
            <Product
              key={i}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={getRandomInt(5)}
              image={product.image}
              category={product.category}
              prime={getPrime(2)}
              discount={10}
            />
          ))}

          {products ? (
            <img
              alt="Product"
              className="md:col-span-full "
              src="https://links.papareact.com/dyz"
            />
          ) : (
            <Typography variant="h1">
              <Skeleton />
            </Typography>
          )}
          <div className="md:col-span-2">
            {products.slice(5, 6).map((product, i) => (
              <Product
                key={i}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={getRandomInt(5)}
                image={product.image}
                category={product.category}
                prime={getPrime(2)}
                discount={0}
              />
            ))}
          </div>
          <div className="md:col-span-1">
            {products.slice(6, 7).map((product, i) => (
              <Product
                key={i}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={getRandomInt(5)}
                image={product.image}
                category={product.category}
                prime={getPrime(2)}
                discount={14}
              />
            ))}
          </div>
          <div className="md:col-span-3">
            {products.slice(7, 8).map((product, i) => (
              <Product
                key={i}
                title={product.title}
                description={product.description}
                price={product.price}
                rating={getRandomInt(5)}
                image={product.image}
                category={product.category}
                prime={getPrime(2)}
                discount={8}
              />
            ))}
          </div>
          {products[0]?.title ? (
            <img
              alt="advertisement"
              style={{ height: "350px", width: "100%" }}
              className="md:col-span-full"
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            />
          ) : (
            <Typography variant="h1">
              <Skeleton className="m-20" />
            </Typography>
          )}
          {products.slice(8, products.length).map((product, i) => (
            <Product
              key={i}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={getRandomInt(5)}
              image={product.image}
              category={product.category}
              prime={getPrime(2)}
              discount={0}
            />
          ))}
        </div>
      ) : (
        Alert("Loading")
      )}
    </>
  );
};

export default ProductFeed;
