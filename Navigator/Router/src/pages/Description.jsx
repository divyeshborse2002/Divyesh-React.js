import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

const Description = () => {
  const [productdata, setProductdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductdata(response.data); // Accessing the data correctly
        setLoading(false);
      })
      .catch((err) => {
        alert('Wait.. Data Not Found');
        setLoading(false);
      });
  }, [id]);

  return loading ? (
    <div style={{margin:"15%",display:"flex",justifyContent:"center"}}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <div>
      <h1>Description</h1>
      {productdata && (
        <div style={{ border: '1px solid black',width:"280px", backgroundColor:"silver",padding:'10px',textAlign:"center",margin:"auto",boxSizing:"border-box"}}>
          <img src={productdata.image} alt={productdata.title} width={200} />
          <p>{productdata.title}</p>
          <h1>{productdata.price}</h1>
          <p>{productdata.description}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
