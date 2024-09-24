import React from 'react'
import cart from '../assets/cart.svg'
import './styles/cartWidget.css'

const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt='cart' className='cart' />
      <span>(5)</span>
    </div>
  )
}

export default CartWidget