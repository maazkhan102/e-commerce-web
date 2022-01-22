import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decItem,
  selectCart,
  quantityDec,
  quantityTest,
} from "../Redux/productSlice";
import Header from "./Header";
import AnnouncementIcon from "@mui/icons-material/Announcement";
const Cart = () => {
  const [grandTotal, setgrandTotal] = useState(0);
  var sum = 0;
  const cartItems = useSelector(selectCart);

  useEffect(() => {
    for (var i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].newprice;
    }
    setgrandTotal(sum);
  }, [cartItems]);

  return (
    <>
      <Header />
      <div className="cart">
        <div>
          <img
            alt="add"
            className="h-40 w-full pl-12 pr-12"
            src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1389&q=80"
          />
        </div>
        <div className="backdrop flex m-10 p-5  flex-wrap md:flex-nowrap sm:flex-wrap-reverse	rounded-md">
          <div className="leftdiv">
            <h1 className="text-2xl font-bold antialiased mt-5">
              Shopping Basket
            </h1>
            <button className=" text-lg md:text-xl bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 mt-2 p-1 px-3">
              <Link to="/"> Shop more </Link>
            </button>
            {cartItems[0] ? (
              <>
                {cartItems.map((item, i) => (
                  <>
                    <Items
                      key={i}
                      title={item.title}
                      image={item.image}
                      category={item.category}
                      description={item.description}
                      rating={item.rating}
                      price={item.price}
                      discount={item.discount}
                      prime={item.prime}
                    />
                  </>
                ))}
              </>
            ) : (
              <p className="text-5xl font-bold p-20">
                Your Cart Is empty <AnnouncementIcon fontSize="20px" />
              </p>
            )}
          </div>
          <div className="rightdiv border border-whitesmoke ml-3 mt-16">
            <div className="flex flex-col items-center p-5 ">
              <h1 className="text-2xl">
                Subtotal ( {cartItems.length} Items )
              </h1>
              <span className="font-bold text-5xl">{grandTotal}$</span>
              <button className=" text-lg md:text-xl bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 mt-10 p-1 px-3">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Items = (props) => {
  const Items = useSelector(selectCart);
  const index = Items.findIndex((item) => item.title === props.title);

  const [quantity, setQuantity] = useState(Items[index].quantity);

  const dispatch = useDispatch();
  // const cartItems = useSelector(selectCart);

  const addnewQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
    // var index = cartItems.findIndex((item) => item.title === props.title);

    // const subtotal =
    //   Math.round(props.price - props.price / props.discount) * quantity;
    const newprice = props.discount
      ? Math.round(props.price - props.discount / props.price)
      : props.price;
    const data = {
      newprice: newprice,
      title: props.title,
    };
    console.log("Add: ", newprice);
    dispatch(quantityTest(data));
  };

  const decnewQuantity = (e) => {
    e.preventDefault();

    if (quantity > 1) {
      setQuantity(() => quantity - 1);
      // const subtotal =
      //   Math.round(props.price - props.price / props.discount) * (quantity - 1);

      const newprice = props.discount
        ? Math.round(props.price - props.discount / props.price)
        : props.price;
      const data = {
        newprice: newprice,
        title: props.title,
      };
      console.log("Remove: ", newprice);

      dispatch(quantityDec(data));
    } else {
      setQuantity(quantity);
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(decItem(props.title));
  };

  return (
    <div className=" item flex border border-whitesmoke my-5 p-5 rounded-lg items-center">
      <img
        alt="CartImg"
        style={{ width: "180px", height: "200px" }}
        src={props.image}
      />
      <div
        style={{ width: "500px" }}
        className="flex flex-col items-start mx-5 "
      >
        <h1 className="text-xl font-bold">{props.title}</h1>
        <div className="product-rating flex text-lg my-2">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p className="h-5" key={i}>
                ⭐
              </p>
            ))}
        </div>
        <p className="text-md ">{props.description}</p>
        {props.discount ? (
          <p className="text-xl font-bold">
            After {props.discount}% discount:{" "}
            {Math.round(props.price - props.price / props.discount)}$
          </p>
        ) : (
          <p className="text-xl font-bold">{props.price}$</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-evenly  h-32 w-40">
        <span className="text-5xl font-bold">{quantity}</span>

        <button
          onClick={addnewQuantity}
          className=" mt-auto text-sm md:text-lg bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 w-40"
        >
          Add More
        </button>
        <button
          onClick={decnewQuantity}
          className=" mt-3 text-sm md:text-lg bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 w-40 "
        >
          Less
        </button>
        <button
          onClick={handleRemove}
          className="w-max px-3 mt-5 text-sm md:text-lg bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm  hover:from-yellow-500 w-40 "
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};
export default Cart;
