
import React, { useState } from 'react'
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const Singup = () => {

    const [email,setemail]=useState ("")
    const [password,setpassword]=useState ("")

    const handlesubmit=(e)=>{
        e.preventDefault()


        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <h1>singup form</h1>
      <form action='' onSubmit={handlesubmit}>
        <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email' />
        <input onChange={(e)=>setpassword(e.target.value)} type="text" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Singup
