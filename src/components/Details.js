import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDetail } from "../Redux/productSlice";
import Header from "./Header";
const Details = () => {
  const details = useSelector(selectDetail);
  return (
    <>
      <Header />

      <div
        style={{
          backgroundColor: "#EAEDED",
          height: "max-content",
          padding: "10px",
        }}
      >
        <div className="details flex flex-col py-5  border border-whitesmoke m-20 bg-white">
          <div
            style={{ objectFit: "contain", width: "400x" }}
            className="flex items-center justify-center "
          >
            <img
              alt="Product"
              style={{ width: "350px" }}
              className="p-10"
              src={details.image}
            />
            <div className="mx-20 flex flex-col items-center ">
              <p className="text-xl my-2 ">{details.category.toUpperCase()}</p>

              <p className="md:text-5xl sm:text-2xl font-bold my-2">
                {details.title}
              </p>
              <p className="text-xl font-bold my-2">
                Original Price: {details.price}$
              </p>
              {details.discount ? (
                <p className="text-xl font-bold">
                  After {details.discount}% discount:{" "}
                  {Math.round(details.price - details.price / details.discount)}
                  $
                </p>
              ) : (
                <p className="text-xl font-bold">{details.price}$</p>
              )}
              <div className="product-rating flex text-lg md:text-xl my-2 mb-6">
                {Array(details.rating)
                  .fill()
                  .map((_, i) => (
                    <p className="h-5" key={i}>
                      ⭐
                    </p>
                  ))}
              </div>
              <Link to="/">
                <button className="mt-auto text-lg md:text-xl bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 p-2">
                  Back to Items Menu
                </button>
              </Link>
            </div>
          </div>

          <div
            style={{ width: "100%" }}
            className="flex flex-col items-center p-5"
          >
            <p className="text-lg mx-10">
              {details.description}
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
