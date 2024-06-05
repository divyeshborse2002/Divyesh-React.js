import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { email, password };
     console.log(userdata)
     axios.post("https://reqres.in/api/login", userdata, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      const data = response.data;
      console.log(data);
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div style={{ border: "1px solid black", width: "300px", height: "auto", backgroundColor: "silver", textAlign: "center", padding: "20px", margin: "10% auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "5px" }}
          placeholder='Enter Email...'
        /><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "5px" }}
          placeholder='Enter Password...'
        /><br />
        <input type="submit" value="Login" />
      </form>
     
    </div>
  );
};

export default Login;
