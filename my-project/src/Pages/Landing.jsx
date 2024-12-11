import React from "react";
import { Frontpage } from "../Components";
import { customFetch } from "../utils";
import FeaturedProducts from "../Components/FeaturedProducts";
const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Frontpage />
      <FeaturedProducts/> 
    </>
  );
};

export default Landing;
