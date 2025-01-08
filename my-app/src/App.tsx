import { useState } from 'react'
import './App.css'
import { Alert } from './Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Aplikacja React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Alert type='warning' heading='Sukces' closable>
        test...
      </Alert>
      </>
  )
}

export default App
