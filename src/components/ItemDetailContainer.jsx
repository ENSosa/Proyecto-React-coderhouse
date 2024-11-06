import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

function ItemDetailContainer() {

  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      try {
        const docRef = doc(db, "products", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProduct({ ...docSnap.data(), id })
        } else {
          setError("El producto solicitado no existe.")
        }
      } catch {
        setError("Hubo un error al cargar el producto.")
        console.error("Error al cargar el producto:", err)
      }
    })()
  }, [id])
  if (error) {
    return <h2 className="error">{error}</h2>
  }
  return product && <ItemDetail product={product} />

}

export default ItemDetailContainer