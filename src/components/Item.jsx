import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/item.css'

const Item = ({ item }) => {
  return (
    <div className='item-card'>
      <img src={item.pictureUrl} className='item-image' />
      <h2 className='item-title'>{item.title}</h2>
      <span className='item-description'>{item.description}</span>
      <span className='item-price'>${item.price}</span>
      <NavLink to={`/item/${item.id}`}>
        <button className='btn-detail'>Ver detalle</button>
      </NavLink>
    </div>
  )
}

export default Item