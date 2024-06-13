
import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {

  let initialvalue = {
    title :"",
    price :"",
    description: "",
    category :"",
    image :""
  }

  const [postdata , setpostdata] = useState(initialvalue)
  const {title , price , description , category , image} = postdata

  const handlechange = (e) =>{
    
    setpostdata ({...postdata, [e.target.name]: e.target.value})
  }
  const HandleSubmit =(e)=>{
    e.preventDefault()
    console.log(postdata);
    axios.post("http://localhost:3000/products",postdata)
    .then((res)=>{
      console.log(res)
      window.location.href = "/"
    }
    )
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>Post Data</h1>


      <form action="" onSubmit={HandleSubmit}>
        <input type="text" name='title' value={title} onChange={(e)=>handlechange(e)} placeholder='title' /> <br />
        <input type="text" name='price' value={price} onChange={(e)=>handlechange(e)} placeholder='price' /> <br />
        <input type="text" name='description' value={description}onChange={(e)=>handlechange(e)} placeholder='description' /> <br />
        <select name="category" value={category} onChange={(e)=>handlechange(e)}>
          <option value="">Select Category</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">Electronics</option>
        </select> <br />
        <input type="text" name='image' placeholder='image' value={image} onChange={(e)=>handlechange(e)} /> <br />
        <input type="Submit" />
      </form>
    </div>
  )
}

export default Addproduct
