import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Productlist = () => {
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter,setFilter]=useState(null)

  useEffect(() => {
    fetchdata()
  }, [search, sort, page,filter]);
  const fetchdata =()=>{
    axios
    .get("http://localhost:3000/products", {
      params: {
        category:filter,
        _sort: "price",
        _order:sort,
        q: search,
        _limit: "6",
        _page: page,
      },
    })
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  }

  

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("deleted successfully");
        fetchdata(); 
      })
      .catch((err) => console.error(err));
  };
 
  return (
    <>
     <h1>Product Page</h1>
  
      <div
        style={{ display: "flex", flexDirection: "column",justifyContent: "center",width: "80%",margin: "50px auto"}}>
        <div style={{ display: "flex", justifyContent: "space-around  " }}>
       
        
          <select value={null} onChange={(e) => setFilter(e.target.value)} >
            <option value="">Select product</option>
            <option value="women's clothing">women's clothing</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
          </select>

          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..."/>

        <Link to={"/AddProduct"}> <button>AddProduct</button> </Link>
        <button onClick={()=>setSort("asc")}>LowToHigh</button>
        <button onClick={()=>setSort("desc")}>HighToLow</button>
        </div>
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            margin: "10px 0px",
          }}
        >
          {product.map((el) => (
            <div
              key={el.id}
              style={{ border: "2px solid black", padding: "10px 30px",width:"300px"}}
            >
              
              <img
                src={el.image}
                style={{
                  width: "200px",
                  height: "200px",
                  alignItems: "center",
                }}
                alt=""
              />
              <h6>{el.title}</h6>
              <h3>{el.price}</h3>
              <h6>{el.category}</h6>
              <div style={{ display:"flex",justifyContent:"space-evenly"}}>
              <Link to={`/Details/${el.id}`} >
              
              <button style={{border:"1px solid teal",padding:"5px"}} >View</button>
             </Link>
             <Link to={`/EditProduct/${el.id}`}>
                <button style={{border:"1px solid teal", padding:"5px"}} >Edit Price</button>
              </Link>
  
                
               <button style={{border:"1px solid teal",padding:"5px"}} onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
              
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <span style={{border:"1px solid white",padding:"10px",width:"20px",margin:"15px",backgroundColor:"teal",color:"white"}}>{page}</span>
          <button onClick={() => setPage(page + 1)}  disabled={page === 4}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Productlist;