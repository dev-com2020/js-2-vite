import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Header'

function App() {
return (
    <>
     
      <h1>Aplikacja React</h1>
        <Header/>
        <Outlet/>
      </>
  )
}
export default App
