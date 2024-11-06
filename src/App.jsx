import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import ThemeProvider from './contexts/ThemeProvider'
import CartProvider from './contexts/CartProvider'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
              <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  )
}

export default App
