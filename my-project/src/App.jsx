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
import  {loader as LandingLoader}  from "./Pages/Landing";
import {loader as SingleProductLoader} from "./Pages/SingleProduct";
import {loader as ProductsLoader} from "./Pages/Products";


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
        loader:LandingLoader
      },
      {
        path:"products",
        element:<Products/>,
        errorElement:<ErrorElement/>,
        loader:ProductsLoader,
      },
      {
        path:"products/:id",
        element:<SingleProduct/>,
        errorElement:<ErrorElement/>,
        loader:SingleProductLoader,
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path: "About",
        element:<About/>
      },
      {
        path:"checkout",
        element:<CheckoutPage/>
      },
      {
        path:"orders",
        element:<Order/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Register",
    element: <Register/>,
    errorElement: <Error />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
