import React from "react";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <>
      <div className="banner ">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          transitionTime={1500}
        >
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/61ASx7NHTWL._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            />
          </div>
          <div>
            <img
              alt="Banner"
              src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
            />
          </div>
        </Carousel>
      </div>
      <div className="imaginary md:h-40 h-12 z-29 relative md:-mt-24 -mt-7"></div>
    </>
  );
};

export default Banner;
