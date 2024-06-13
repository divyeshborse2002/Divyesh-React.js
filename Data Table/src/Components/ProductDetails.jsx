import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productdetails = () => {

  const [descData , setdescData] =useState([])
const {id} =useParams() 
  useEffect (()=>{
    axios.get(`  http://localhost:3000/products/${id}`)
    .then((res)=>setdescData(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <div style={{  display:"flex" , justifyContent:"center" }}>
        
          <div key={descData.id} style={{ border: "2px solid black", padding: "12px" ,width:"30%",boxShadow:"-1px 4px 5px 8px rgba(0,0,0,0.21)"}}>
            <img src={descData.image} style={{ width: "200px" , border:"1px solid teal" , padding:"5px",backgroundColor:"teal" }} alt="" />
            <div style={{textAlign:"left"}}>
            <p><strong style={{color:"red"}}>Title:-</strong>{descData.title}</p>
            <h3> <strong style={{color:"red"}}>price:-</strong>{descData.price}</h3>
            <p><strong style={{color:"red"}}>Category:-</strong>{descData.category}</p>
            <p><strong style={{color:"red"}}>Description:-</strong>{descData.description}</p>
            </div>
           
          </div>
         
      </div>
    </div>
  )
}

export default Productdetails