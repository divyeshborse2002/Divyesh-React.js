
import {signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../Firebase'

const Login = () => {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=(e)=>{
        e.preventDefault()
             
        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
      <h1>Login form</h1>

        <form action="" onSubmit={handlesubmit}>
            <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email' />
            <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder="Password" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login
