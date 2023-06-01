import { useState } from 'react'
import './App.css'
import RouterPrincipal from './routers/RouterPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <RouterPrincipal/>
    </div>
  )
}

export default App
