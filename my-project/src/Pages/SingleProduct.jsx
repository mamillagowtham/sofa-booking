import React, { useState } from "react";
import { customFetch, formatPrice } from "../utils";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const dispatch = useDispatch();

  const { image, title, price, colors, description, company } =
    product.attributes;
  console.log(product);

  const IndianAmount = formatPrice(price);
  const [ProductColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + ProductColor,
    productID: product.id,
    image,
    title,
    price,
    quantity,
    ProductColor,
    company,
  };

  //add to cart login
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products"> Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product info */}
        <div>
          <h1 className="capitalize  text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{IndianAmount}</p>
          <p className="mt-6 leading-8 ">{description}</p>
        </div>
        {/* colors */}

        <div className="mt-6">
          <h4 className="text-md font-medium tracking-wider capitalize">
            colors
          </h4>
          <div className="mt-2">
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === ProductColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
        </div>
        {/* amount */}
        <div className="w-full max-w-xs">
          <label className="label">
            <h4 className="text-md font-medium tracking-wider capitalize">
              amount
            </h4>
          </label>  
          <select
            className=" select select-secondary select-bordered select-md"
            value={quantity}
            onChange={handleQuantity}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        {/* cart button  */}
        <div className="mt-10">
          <button className="btn btn-secondary btn-md" onClick={addToCart}>
            Add to bag
          </button>
        </div>
      </div>
    </section>
  );
  
};

export default SingleProduct;
