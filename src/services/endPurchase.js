import {
  addDoc,
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

const endPurchase = async (cart, buyer) => {
  const productsToUpdateRefs = [];
  const orderCollectionRef = collection(db, "orders");

  // Crear referencias a los productos del carrito
  for (const cartProduct of cart) {
    const productRef = doc(db, "products", cartProduct.id);
    productsToUpdateRefs.push({ ref: productRef, id: cartProduct.id });
  }

  try {
    const order = await runTransaction(db, async (transaction) => {
      const stocksUpdated = [];

      // Verificar el stock de cada producto
      for (const productToUpdate of productsToUpdateRefs) {
        const { ref } = productToUpdate;
        const product = await transaction.get(ref);
        if (!product.exists()) {
          throw "Product does not exist!";
        }

        const productInCart = cart.find(
          (cartElement) => cartElement.id === product.id
        );

        const resultStock = product.data().stock - productInCart.quantity;

        if (resultStock < 0)
          throw `Product: ${product.data().title}, doesn't have enough stock.`;

        stocksUpdated.push({
          productId: product.id,
          stock: resultStock,
        });
      }

      // Actualizar stock
      for (const product of productsToUpdateRefs) {
        const { ref, id } = product;
        const stockUpdated = stocksUpdated.find(
          (stock) => stock.productId === id
        );
        transaction.update(ref, {
          stock: stockUpdated.stock,
        });
      }

      // Crear la orden
      const orderData = {
        buyer,
        products: cart,
        total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        timestamp: serverTimestamp(),
      };

      const orderRef = await addDoc(orderCollectionRef, orderData);
      return orderRef.id;
    });

    console.log("Order created successfully!", order);
    return order;
  } catch (e) {
    throw e;
  }
};

export default endPurchase;
