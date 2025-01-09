import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Header'
import { useAppContext } from './components/PersonScoreContext'
import { authenticate } from './api/authenticate'
import { authorize } from './api/authorize'
import { Content } from './Content'

function App() {
  const { user, loading, dispatch } = useAppContext()
  async function handleSignIn() {
    dispatch({type:'authenticate'})
    const authenticatedUser = await authenticate()
    dispatch({
      type:'authenticated',
      user: authenticatedUser
    })
    if (authenticatedUser !== undefined){
      dispatch({type: 'authorize'})
      const authorizedPermission = await authorize(authenticatedUser.id)
      dispatch({
        type: 'authorized',
        permissions: authorizedPermission
      })
    }
  }
  return (
    <>
      {user ? (
        <span>{user.name} zapisany!</span>
      ):(
        <button onClick={handleSignIn} disabled={loading}>
          {loading ? '...': "Zapisz się"}
        </button>
      )}
      <Header />
      <Content/>
      <Outlet />

    </>
  )
}
export default App
