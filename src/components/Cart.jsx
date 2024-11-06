import React, { useState, useContext } from 'react';
import { Cart as CartContext } from '../contexts/CartProvider';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import endPurchase from '../services/endPurchase';
import BuyerForm from './BuyerForm';
import ModalAlert from './ModalAlert';
import '../styles/cart.css';
import '../styles/modal.css';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: '',
    lastName: '',
    email: '',
  });

  const [isFormVisible, setFormVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = async () => {
    if (buyer.name && buyer.lastName && buyer.email) {
      try {
        const orderId = await endPurchase(cart, buyer);
        setOrderId(orderId);
        setModalMessage(`Gracias por tu compra, ${buyer.name}.`);
        setModalVisible(true);
        clearCart();
      } catch (error) {
        setModalMessage('Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.');
        setModalVisible(true);
      }
    } else {
      setModalMessage('Por favor, completa todos los campos.');
      setModalVisible(true);
    }
  };

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará todos los productos de tu carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          '¡Carrito vacío!',
          'Tu carrito ha sido vaciado.',
          'success'
        );
      }
    });
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalMessage('');
  };

  return (
    <div>
      {cart.length && !isFormVisible ? (
        <>
          {cart.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))}
          <h2>Total: ${calculateTotal()}</h2>
          <div className="cart-buttons">
            <button onClick={() => setFormVisible(true)}>Finalizar Compra</button>
            <button onClick={handleClearCart}>Vaciar Carrito</button>
          </div>
        </>
      ) : cart.length && isFormVisible ? (
        <BuyerForm
          buyer={buyer}
          setBuyer={setBuyer}
          handlePurchase={handlePurchase}
          setFormVisible={setFormVisible}
        />
      ) : (
        <div className="empty-cart">
          <h1>No hay productos en el carrito</h1>
          <NavLink to={'/'}>Inicio</NavLink>
        </div>
      )}

      {/* Modal */}
      <ModalAlert
        isModalVisible={isModalVisible}
        modalMessage={modalMessage}
        orderId={orderId}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Cart;
