📱 Ecommerce React - Tienda Online

🚀 Descripción

Este ecommerce es una tienda online donde podrás comprar productos como electrodomésticos y tecnología de manera rápida y sencilla.

🛠️ TECNOLOGÍAS UTILIZADAS

**Client:**

- **React**: Librería de JavaScript para construir interfaces de usuario interactivas.
- **React Router**: Librería para manejar el enrutamiento y la navegación en la aplicación de una sola página (SPA).
- **Bootstrap**: Framework CSS para diseño y estilo responsivo.
- **SweetAlert2**: Librería para mostrar alertas personalizadas con estilo.

**Server:**

- **Firebase**: Plataforma para el backend, que incluye servicios como la base de datos en tiempo real (Firestore) y autenticación.
- **Firebase Firestore**: Base de datos NoSQL en la nube utilizada para almacenar productos, pedidos y otros datos de la aplicación.

🔄 FLUJO DE LA PAGINA

Pagina Inicio:

Muestra una lista de productos divididos en categorías (Electrodomésticos, Tecnología).

Agregar al Carrito:

Puedes añadir productos al carrito con facilidad.
Verás una notificación (usando SweetAlert) cada vez que agregues un producto.

Carrito de Compras:

Una vez que decidas finalizar la compra, puedes ver los productos en el carrito, el total y proceder con el pago.
Si deseas vaciar el carrito, el sistema te pedirá confirmación mediante un SweetAlert, eliminando todos los productos al aceptar.

Formulario de Compra:

Completa tus datos (nombre, apellido, y email) para procesar la compra.
Se valida que los campos estén completos y el email se confirme correctamente.
Al confirmar la compra, se genera un número de orden y se muestra un mensaje de agradecimiento.

Notificaciones:

SweetAlert muestra notificaciones en cada paso importante, como agregar productos al carrito, vaciarlo o al completar una compra.
