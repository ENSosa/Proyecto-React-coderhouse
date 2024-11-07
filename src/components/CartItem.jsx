import React, { useContext } from 'react'
import { Cart as CartContext } from '../contexts/CartProvider'
import '../styles/itemCart.css'

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext)

  const handleRemove = () => {
    removeFromCart(item.id);

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Producto eliminado del carrito',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
  };
  return (
    <div className='cart-item'>
      <img src={`/products-img/${item.pictureUrl}`} className='cart-item-img' />
      <div className="cart-item-info">
        <h2 className="cart-item-title">{item.title}</h2>
        <p className="cart-item-description">{item.description}</p>
        <p className="cart-item-quantity">Cantidad:{item.quantity}</p>
        <p className="cart-item-price">Precio: ${item.price}</p>
        <button onClick={handleRemove}>eliminar</button>

      </div>
    </div>
  )
}

export default CartItem