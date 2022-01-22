import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect } from "react";
import ProductFeed from "./components/ProductFeed";
import { setproducts } from "./Redux/productSlice";
import { useDispatch } from "react-redux";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const productinfo = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    dispatch(setproducts(productinfo));
  };
  useEffect(() => {
    const gettingit = () => {
      getData();
    };
    return gettingit();
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="app">
                <Header />
                <Banner />
                <ProductFeed />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
