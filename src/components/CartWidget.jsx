import React, { useContext } from 'react';
import cart from '../assets/cart.svg';
import '../styles/cartWidget.css';
import { Cart as CartContext } from '../contexts/CartProvider';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

  return (
    <NavLink to={'/cart'} className="cart-widget">
      <div>
        <img src={cart} alt='cart' className='cart' />
        {totalQuantity > 0 && <span>({totalQuantity})</span>}
      </div>
    </NavLink>

  );
};

export default CartWidget;
