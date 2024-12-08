import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");


  const setActiveStyles = (pattern)=>{
  return `"text-xl btn  btn-circle btn-sm" ${
    pattern === layout ? "btn-primary text-primary-content": "btn-ghost" 
  }
 ` }

  return (
    <>
      {/* header */}
      <div className="flex justify-between  items-center mt-8  border-b border-base-300 p-5 ">
        <h4 className="font-medium text-md">
          {totalProducts}product {totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-5">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button onClick={() => setLayout("list")}
            className={setActiveStyles("list")}>
            <BsList />
          </button>
        </div>
      </div>
      {/* products */}
      <div>
        {totalProducts === 0 ? (
          <h5>sorry, no products matches your search</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
  return <div>ProductsContainer</div>;
};

export default ProductsContainer;
