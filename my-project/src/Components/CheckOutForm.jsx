import React from "react";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { clearCart } from "../Features/cart/cartSlice";

export const action =
  (store,queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData); // Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItem, orderTotal, numberItemsInCart } =
      store.getState().cartStart;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems: cartItem,
      numItemsInCart: numberItemsInCart,
    };
    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      queryClient.removeQueries(["orders"]);

      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error  placing  your oder";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) redirect("/login");
      return null;
    }
  };

const CheckOutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information mom</h4>
      <FormInput type="text" label="first name " name="name" />
      <FormInput type="text" label="address" name="address" />

      <dv className="mt-4">
        <SubmitBtn text="place your order" />
      </dv>
    </Form>
  );
};

export default CheckOutForm;
