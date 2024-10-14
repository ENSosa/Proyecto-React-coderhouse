import React, { useEffect, useState } from 'react'
import './styles/itemListContainer.css'
import { useParams } from 'react-router-dom'
import mockProducts from '../MOCK_DATA.json'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { categoryId } = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const products = await new Promise((resolve, reject) => {
          setTimeout(() => resolve(mockProducts), 2000)
        })

        const productsFiltered = categoryId
          ? products.filter(
            (product) => product.category.toLowerCase() === categoryId.toLowerCase()
          )
          : products

        setProducts(productsFiltered)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [categoryId])

  return loading ?
    <h1 className="loading">Cargando... </h1> :
    <ItemList products={products} />
}

export default ItemListContainer
