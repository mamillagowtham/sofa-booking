import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { OrderList, PaginationContainer, SectionTitle } from "../Components";
import { toast } from "react-toastify";
import { customFetch } from "../utils";


export const orderQuery = (params, user) => {
  return {
    queryKey: ["order", user.username, params.page ? parseInt(params.page) : 1],
    queryFn: () =>
      customFetch.get("/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};


export const loader =
  (queryClient,store) =>
  async ({ request }) => {
    const user = store.getState().user;
    if (!user) {
      toast.warn("you must be logged in to to view orders");
      return redirect("/");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    
    try {
      const response = await queryClient.ensureQueryData(
        orderQuery(params, user)
          );
          return  {orders :response.data.data,meta:response.data.meta}
    } catch (error) {
      console.log(error);
      const errorMessage =
      error?.response?.data?.error?.message ||
      "there was an error  accessing your oder";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) redirect("/login");
      return null;
    };
}

const Order = () => {
  const {meta} =useLoaderData();
  if(meta.pagination.title <1)
  {
    return <SectionTitle text="place make an order"/>
  }
  return (<>
    <SectionTitle text ="your Order"/>
    <OrderList/>
    <PaginationContainer/>
    </>
  )
};

export default Order;
