import React from "react";
import ProductNav from "./Layouts/ProductNav";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <div>
      <ProductNav />
      <div className="products-con">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="cat-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <p>{product.name}</p>
              <h2>{product.star}</h2>
              <strong>
                ${product.discount} <del>${product.price}</del>
              </strong>
              <br />
              <Link to={`/${product.id}`} className="view-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
