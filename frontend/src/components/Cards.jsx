import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cards = ({ category }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = `http://localhost:3000/?category=shirt`;
      let result = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      result = await result.json();
      //result is the array of objects of the product

      //  filtering function, now we need to filter out the result
    if (category===""){
      setProducts(result);
    }
    else{
      const categoryToFilter = category;

      const filteredData = result.filter(
        (item) => item.category === categoryToFilter
      );

      console.log(filteredData);

      setProducts(filteredData);
    }
      console.log("this is result", result);
    };
    fetchData();
  }, [category]);

  return (
    <div className="all-cards">
      {products.map((product) => {
        if (product.category === category) <li>product.name</li>;
      })}
      {products.map((product, index) => (
        <div className="card" key={index} style={{ width: "18rem" }}>
          {/* //change src after uploading image */}
          <img
            src="https://www.aristobrat.in/cdn/shop/files/ClassicShirt_FrenchBlue_New5.jpg?v=1709565676&width=2048"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-name">{product.name}</h5>
            <p className="card-price">${product.price}</p>
            <Link to="/update-item" className="btn btn-primary">
              Add to cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
