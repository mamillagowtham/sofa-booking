import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { 
  About,
  Cart,
  CheckoutPage, 
  Error, 
  HomeLayout, 
  Landing,  
  Login, 
  Order,
  Products,
  Register,
  SingleProduct,
} from "./Pages";
import { ErrorElement } from "./Components";
import  {loader as landingLoader}  from "./Pages/Landing";
import {loader as singleProductLoader} from "./Pages/SingleProduct";
import {loader as productsLoader} from "./Pages/Products";
import {loader as checkoutLoader} from "./Pages/CheckoutPage"
import {action as CheckoutAction} from "./Components/CheckOutForm"
import {loader as ordersLoader} from "./Pages/Order"
//actions
import {action as registerAction} from  "./Pages/Register";
import {action as loginAction} from "./Pages/Login"; 

import {store} from "./store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5min
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader(queryClient)
      },
      {
        path:"products",
        element:<Products/>,
        errorElement:<ErrorElement/>,
        loader:productsLoader,
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:singleProductLoader,
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path:"checkout",
        element:<CheckoutPage/>,
        loader : checkoutLoader(store),
        action :CheckoutAction(store,queryClient)
      },
      {
        path:"orders",
        element:<Order/>,
        loader: ordersLoader(store)
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action :loginAction(store)
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <Error />,
    action: registerAction,
  }
]);

const  App=() => {
  return   <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />;
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
}

export default App;