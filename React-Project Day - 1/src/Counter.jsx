import { useState } from "react";

function Counter(){
 let [count,setCount]=useState(0)

 const addvalue=()=>{
    setCount(count+1)
 }

 const removevalue=()=>{
    setCount(count-1)
    if(count==0){
       setCount(count=0)
    }
 }

 const resetvalue=()=>{
    setCount(count=0)
 }
    return(
        <>
    <div style={{backgroundColor:"gray",width:"500px",borderRadius:"10px"}}>
     <h1 style={{padding:"10px"}}>Counter App</h1>
     <span style={{padding:"10px",color:"black",fontSize:"18px",width:"150px",border:"1px solid black",fontWeight:"bolder"}}>Count is:{count}</span>
     <br/>
     <br/>
     <br/>
     <button style={{padding:"6px 5px", border:"1px solid white",margin:"8px",backgroundColor:"teal"}} onClick={addvalue}>Increment</button>
     <button style={{padding:"6px 5px",border:"1px solid white", margin:"8px",backgroundColor:"teal"}}onClick={removevalue}>Decrment</button>
     <button style={{padding:"5px 14px ", margin:"8px",backgroundColor:"red",color:"White",border:"1px solid black"}}onClick={resetvalue}>Reset</button>
    </div>
       
        </>
    )
}

export default Counter;