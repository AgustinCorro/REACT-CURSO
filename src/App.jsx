//agregar la navegacion para las categorias del nav 
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartProvider from './context/ShoppingCartProvider'


function App() {

  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />
        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />

        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
