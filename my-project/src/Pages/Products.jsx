import React from "react";
import { customFetch } from "../utils";
import { ProductsContainer, Filter } from "../Components/";
import PaginationContainer from "../Components/PaginationContainer";
import ProductsList from "../Components/ProductsList";

const url = "/products";

export const loader = async ({ request }) => {
  const param =new URL(request.url).searchParams.get("search")
  console.log(param)
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

      {/* productsContainer  */}
      <ProductsContainer />
      
      {/* <ProductsList/> */}

      {/* pagination */}
      <PaginationContainer/>
    </>
  );
};

export default Products;
