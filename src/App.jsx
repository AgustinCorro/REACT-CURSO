//agregar la navegacion para las categorias del nav 
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {
  
  return (
    <BrowserRouter>
      
      <NavBar/>

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<ItemDetailContainer />} />
        <Route exact path='/categoria/:catergoria' element={<ItemListContainer />} />

        
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
