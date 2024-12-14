import React from "react";
import { Frontpage } from "../Components";

import { customFetch } from "../utils";
import FeaturedProducts from "../Components/FeaturedProducts";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  console.log(products)
  return { products };
};

const Landing = () => {
  return (
    <>
      <Frontpage />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
