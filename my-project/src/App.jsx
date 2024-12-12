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
        loader:landingLoader
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
        action :CheckoutAction(store)
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
  return <RouterProvider router={router} />;
}

export default App;