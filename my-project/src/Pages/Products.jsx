import React from 'react';
import ProductsList from '../Components/ProductsList';
import { customFetch } from '../utils';

const url = "/products"



export const loader = async({request})=>{
  const response =await customFetch(url);
  const products = response.data.data;
  const  meta =response.data.meta;
  return  {products,meta};

}
const Products = () => {
  return (
    <>
    {/* filter */}
    {/* productContainer */} 
    <ProductsList/>
    {/* pagination */}
    </>
  )
}

export default Products