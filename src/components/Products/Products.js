import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Products.css";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [showTopPriced, setShowTopPriced] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8088/products?_expand=productType&_sort=name")
      .then((response) => response.json())
      .then((productArray) => {
        setProducts(productArray);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const filteredProducts = showTopPriced
    ? products.filter((product) => product.pricePerUnit > 2.0)
    : products;

  return (
    <div className="products-container">
      <h2>Store Products</h2>
      <div className="products">
        {filteredProducts.map((product) => (
          <section className="product" key={`product--${product.name}`}>
            <h3>{product.name}</h3>
            <h4>{product.pricePerUnit}</h4>
            <h5>{product.productType.categories}</h5>
          </section>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={() => setShowTopPriced(!showTopPriced)} className="btn">
          {showTopPriced ? "Show All" : "Top Priced"}
        </button>
        <Link to="/products/create" className="btn btn-primary">
          Create Form
        </Link>
      </div>
    </div>
  );
};
