import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [value, setValue] = useState(1);

  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle any errors that occur during the data fetching process
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div>
      <ol className="breadcrumb">
        <li>
          <Link to="/">Latest Products</Link>
        </li>
        <li className="active">Cart</li>
      </ol>

      <section className="product-container">
        <div className="img-card">
          <img src={product.image} alt="" id="featured-image" />
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <h5>
            Price: ${product.discount} <del>${product.price}</del>
          </h5>
          <p>
            {product.description}
          </p>
          <div className="sizes">
            <p>Size:</p>
            <select name="Size" id="size" className="size-option">
              <option value="xxl">XXL</option>
              <option value="xl">XL</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </select>
          </div>

          <div className="quantity">
            <input
              type="number"
              value={value}
              onChange={(e) => {
                handleChanges(e);
              }}
            />
            <button>Add to Cart</button>
          </div>

          <div>
            <p>Category:</p>
            <p>{product.category}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
