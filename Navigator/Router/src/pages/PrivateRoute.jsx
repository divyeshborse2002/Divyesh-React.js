import React, { useEffect } from 'react'

const PrivateRoute = ({children}) => {
 const token=localStorage.getItem("token")
 if(!token)
  {
    return <h1>You Are Not Login</h1>
  }
  return children
}

export default PrivateRoute
