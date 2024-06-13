import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setPrice(res.data.price))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/products/${id}`, { price })
      .then((res) => {
        alert("price updated successfully");
        window.location.href = "/"; 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
      <form onSubmit={handleSubmit}>
        <h2>Edit Product Price</h2>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Price</button>
      </form>
    </div>
  );
};

export default EditProduct;