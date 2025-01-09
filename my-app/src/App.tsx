import { Outlet } from 'react-router-dom'
import './App.css'
import { ProductsPage } from './pages/ProductsPage'


function App() {


  return (
    <>
     
      <h1>Aplikacja React</h1>
        <ProductsPage/>
        <Outlet/>
      </>
  )
}

export default App
