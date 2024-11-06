import { createContext, useState } from "react";

export const Cart = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const [quantity, setQuantity] = useState(0)

    const addCart = (product, productQuantity) => {

        const productInCart = isInCart(product.id)

        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity
                    }
                } return cartProduct
            })
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity })
        }
        setCart(cartUpdated)
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(cartProduct => cartProduct.id !== productId);
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([]);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    return (
        <Cart.Provider value={{ cart, addCart, removeFromCart, clearCart, getTotalQuantity, quantity }}>{children}</Cart.Provider>
    )
}

export default CartProvider  