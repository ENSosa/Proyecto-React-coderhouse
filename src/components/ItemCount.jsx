import React, { useState } from 'react'
import '../styles/itemCount.css'

const ItemCount = ({ addCart }) => {
  const [count, setCount] = useState(1)

  const handleIncrement = () => setCount((prev) => prev + 1)
  const handleDecrement = () => {
    if (count > 1) setCount((prev) => prev - 1)
  }

  return (
    <div>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className='add-to-cart' onClick={() => addCart(count)}>Agregar al Carrito </button>
    </div>
  )
}
export default ItemCount
