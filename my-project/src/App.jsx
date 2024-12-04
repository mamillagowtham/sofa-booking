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


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index:true,
        element:<Landing/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"products/:id",
        element:<SingleProduct/>
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
