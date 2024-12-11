import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const {cartTotal,shipping,tax,orderTotal} = useSelector((state)=>state.cartState)
  return (
    <div className='card bg-base-200'>
      <div className='card-body'>
           {/* subtotal */}
           <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>Subtotal</span>
            <span className='font-medium'>{formatPrice(cartTotal)}</span>
           </p>
           {/* shipping */}
           
           <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>Shipping</span>
            <span className='font-medium'>{formatPrice(shipping)}</span>
           </p>
           {/* tax */}
           <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
            <span>Tax</span>
            <span className='font-medium'>{formatPrice(tax)}</span>
           </p>
           {/* orderTotal */}
           <p className='flex justify-between text-xs mt-4 pb-2'>
            <span>Order Total</span>
            <span className='font-medium'>{formatPrice(orderTotal)}</span>
           </p>
      </div>
    </div>
  );
};

export default CartTotals;