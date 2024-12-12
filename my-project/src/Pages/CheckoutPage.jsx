import React from 'react'
import { CartTotals, CheckOutForm, SectionTitle } from '../Components';

export const loader  = (store)=>async()=>{
  const user = store.getState().userState.user;

  if(!user )
  {
    toast.warn("you must be logged in checkout");
    return redirect("/login")
  }
  return null;
}


const CheckoutPage = () => {
  const CartTotal = useSelector((state)=>state.cartState.CartTotal);  
  if(CartTotal === 0)
  {
      return <SectionTitle  text="Your cart is empty "/>
  }
  return  <>
      <SectionTitle text= "place your order"/>
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-center'>
        <CheckOutForm/>
        <CartTotals/>
      </div>
    </>
  
}

export default CheckoutPage