import React, { useEffect, useState } from 'react'
import '../styles/itemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { categoryId } = useParams()

  useEffect(() => {
    (async () => {
      try {

        setLoading(true)
        setError(null)

        let productsFiltered = []
        if (categoryId) {
          console.log("Filtrando por categoría:", categoryId);
          const q = query(
            collection(db, 'products'),
            where("category", "==", categoryId)
          )
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
            productsFiltered.push({ id: doc.id, ...doc.data() })
          })
        } else {
          const querySnapshot = await getDocs(
            collection(db, "products")
          )
          querySnapshot.forEach((doc) => {
            productsFiltered.push({ id: doc.id, ...doc.data() })
          })
        }
        setProducts(productsFiltered)
      } catch (error) {
        setError("Hubo un error al cargar los productos.")
        console.error(error)
      }

      finally {
        setLoading(false)
      }

    })()
  }, [categoryId])

  return loading ?
    <h1 className="loading">Cargando... </h1> :
    <ItemList products={products} />
}

export default ItemListContainer
