import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const carouselImages = [hero1, hero2, hero3, hero4];
const Frontpage = () => {
  return (
    <div className=" grid grid-cols-1  lg:grid-cols-2  gap-20  items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          This is a store where you can shop anything
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          At out Royal store, we offer an extensive range of furniture to suit
          every space, style, and need. Whether you're furnishing your living
          room, bedroom, dining area, office, or outdoor spaces, you'll find
          everything from classic designs to modern trends under one roof.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>

      <div className="lg:carousel  carousel-center hidden  h-[28rem] p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frontpage;
