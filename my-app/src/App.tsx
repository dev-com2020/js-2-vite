import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Header'
import { useAppContext } from './components/PersonScoreContext'

function App() {
  const { user } = useAppContext()
return (
    <>
     
      <p>{user ? `Witaj ${user.name}`:'Zapisz się'}</p>
        <Header/>
        <Outlet/>
      </>
  )
}
export default App
