import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from  './CartItem';

const CartItemsList = () => {
  const cartItems =   useSelector((state)=>state.cartState.cartItem); 
  return (
  <div>
   {cartItems.map((item,index)=>{
       return <CartItem key={index} cartItem = {item} />
       
   })}
   </div>
  )
}

export default CartItemsList