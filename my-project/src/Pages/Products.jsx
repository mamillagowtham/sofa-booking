import React from 'react';
import { customFetch } from '../utils';
import {ProductsContainer,Filter}from '../Components/';

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
    <Filter/>
    {/* productContainer  */}
    <ProductsContainer/>
    {/* <ProductsList/> */}
    {/* pagination */}
    </>
  )
}

export default Products