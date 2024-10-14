import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route  path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route  path='*' element={<NotFound/>}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
