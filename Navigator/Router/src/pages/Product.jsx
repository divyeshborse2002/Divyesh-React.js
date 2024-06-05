import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import { NavLink } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [productdata, setProductdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductdata(response.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Something went wrong...", err);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div style={{ margin: "15%", display: "flex", justifyContent: "center" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : (
    <div>
      <h1 className="text-bg-primary mt-1">PRODUCT</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "9px", margin: "10px auto", padding: "10px auto" }}>
        {productdata.map((el) => (
          <NavLink key={el.id} style={{ textDecoration: "none" }} to={`/description/${el.id}`}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>${el.price}</Card.Text>
              </Card.Body>
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Product;
