import React from "react";
import './ProductNav.css'

const ProductNav = () => {

  return (
    <nav>
      <div className="product-nav">
        <h1>Latest Products</h1>
        <ul>
          <li>All</li>
          <li>New</li>
          <li>Featured</li>
          <li>Offer</li>
        </ul>
      </div>
    </nav>
  );
};

export default ProductNav;
