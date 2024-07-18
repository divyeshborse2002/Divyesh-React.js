import { useState } from 'react'
import './App.css'
import Singup from './Componets/Singup'
import Login from './Componets/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Singup />
      <Login />
    </>
  )
}

export default App