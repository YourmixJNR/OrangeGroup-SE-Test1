import React from "react";
import ProductNav from "./Layouts/ProductNav";
import AppContext from "../Context/AppContext";
import { useContext } from "react";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useContext(AppContext);

  return (
    <div>
      <ProductNav />
      <div className="products-con">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="cat-img">
              <img src={product.image} alt={product.description} />
            </div>
            <div className="product-words">
              <h2>★ ★ ★ ★ ★</h2>
              <p>{product.description}</p>
              <b>
                $40.00 <del>{product.price}</del>
              </b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
