import React from "react";
import { customFetch } from "../utils";
import { ProductsContainer, Filter } from "../Components/";
import PaginationContainer from "../Components/PaginationContainer";

const url = "/products";

export const loader = async ({ request }) => {
  // const params =new URL(request.url).searchParams.get("search")
  // console.log(params)
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  console.log(params)
  const response = await customFetch(url,{
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta , params};
};
const Products = () => {
  return (
    <>
      {/* filter */}  
      <Filter />
      {/* productContainer  */}
      <ProductsContainer />
      {/* <ProductsList/> */}
      {/* pagination */}
      <PaginationContainer/>
    </>
  );
};

export default Products;
