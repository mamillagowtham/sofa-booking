import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../Components/SectionTitle";
import CartItemsList from "../Components/CartItemsList";
import { Link } from "react-router-dom";
import CartTotals from "../Components/CartTotals";

const Cart = () => {
  const numItemsInCart = useSelector(
    (state) => state.cartState.numberItemsInCart
  );

  const user  = useSelector((state) => state.userState.user);
  console.log(user);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="shopping cart" />
      <div className="mt-8 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          {/* cartTotal */}
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to check
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Please Login{" "}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
