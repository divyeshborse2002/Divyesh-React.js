import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './Components/StudentForm'
import Login from './Components/Login'

function App() {
  const [toggle, setToggle] = useState(false)
  

  const Toggle=()=>{
    setToggle(prevtoggle=> !prevtoggle );
  }
  return (
    <>
    {toggle ? <StudentForm />:<Login />}
    <button onClick={Toggle}>{toggle?"Sign-up":"Login"}</button>
   
    </>
  )
}

export default App
