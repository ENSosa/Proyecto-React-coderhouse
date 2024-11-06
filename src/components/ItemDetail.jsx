import React, { useContext, useState } from 'react'
import '../styles/itemDetail.css'
import ItemCount from './ItemCount'
import { Cart } from '../contexts/CartProvider'
import { NavLink } from 'react-router-dom'

const ItemDetail = ({ product }) => {

  const { addCart } = useContext(Cart)

  const [itemCountVisibility, setItemCountVisibility] = useState(true)

  const handleCart = (quantity) => {
    setItemCountVisibility(false)
    addCart(product, quantity)

    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
  }
  return (
    <div className="item-detail">
      <img src={product.pictureUrl} alt={product.title} className="item-img" />
      <div className="item-info">
        <h2 className="item-title">{product.title}</h2>
        <span className="item-description">{product.description}</span>
        <p className="item-price">Precio: ${product.price}</p>

        {itemCountVisibility ? (
          <ItemCount addCart={handleCart} />
        ) : (
          <div className="item-buttons">
            <button>
              <NavLink to={'/cart'}>Mis Compras</NavLink>
            </button>
            <button>
              <NavLink to={'/'}>Continuar Comprando</NavLink>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail
