import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'¡Nuestros productos en oferta!'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;