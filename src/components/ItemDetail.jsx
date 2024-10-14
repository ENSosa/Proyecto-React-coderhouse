import React, { useState } from 'react'
import './styles/itemDetail.css'

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(1) 

  // Funciones para aumentar y disminuir la cantidad
  const handleIncrement = () => setCount((prev) => prev + 1)
  const handleDecrement = () => {
    if (count > 1) setCount((prev) => prev - 1)
  }

  const handleAddToCart = () => {
    alert(`Agregaste ${count} ${product.title} al carrito`)
  }

  return (
    <div className="item-detail">
      <img src={product.pictureUrl} alt={product.title} className="item-img" />
      <h2 className='item-title'>{product.title}</h2>
      <span className='item-description'>{product.description}</span>
      <p className='item-price'>Precio: ${product.price}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail
