import React from "react";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../Features/cart/cartSlice";
import { formatPrice } from "../utils";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleQuantity = (e) => {
    dispatch(editItem({ cartID, quantity: parseInt(e.target.value) }));
    console.log(e);
  };

  const { cartID, title, price, image, quantity, ProductColor, company } =
    cartItem;
  console.log(cartItem);
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32  object-cover"
      />
      {/* info   */}
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color :{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: ProductColor }}
          ></span>
        </p>
      </div>
      {/* quantity */}

      <div className="form-control max-w-xs">
        <label htmlFor="quantity" className="label p-0 ">
          <span className="label-text">Quantity</span>
        </label>
        <select
          name="quantity"
          id="quantity"
          className="mt-2 select select-base  select-bordered select-xs"
          value={quantity}
          onChange={handleQuantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {/* remove */}
        <button
          className="mt-2 link link-primary  link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          Remove
        </button>
      </div>
      {/* price  */}
      <p className="font-medium sm:ml-auto ">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
