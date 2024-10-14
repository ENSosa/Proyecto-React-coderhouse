import React, { useState, useEffect } from 'react'
import mockProducts from '../MOCK_DATA.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const product = mockProducts.find(productFind => productFind.id === Number(id))
    setProduct(product)
  }, [id])
  return (
    product && <ItemDetail product={product} />)
}

export default ItemDetailContainer