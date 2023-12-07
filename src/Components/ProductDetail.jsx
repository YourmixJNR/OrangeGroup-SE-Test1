import React from "react";

const ProductDetail = () => {
  return (
    <section class="product-container">
      <div class="img-card">
        <img src="img/image-1.png" alt="" id="featured-image" />
      </div>
      {/* <!-- Right side --> */}
      <div class="product-info">
        <h3>LEVI'S® WOMEN'S XL TRUCKER JACKET</h3>
        <h5>
          Price: $140 <del>$170</del>
        </h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          accusantium, aspernatur provident beatae corporis veniam atque
          facilis, consequuntur assumenda, vitae dignissimos iste exercitationem
          dolor eveniet alias eos ullam nesciunt voluptatum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          accusamus natus dolorum. Quaerat nulla quod doloremque, officia quis
          provident amet adipisci unde esse iure delectus, maxime inventore
          optio fuga nisi?
        </p>

        <div class="sizes">
          <p>Size:</p>
          <select name="Size" id="size" class="size-option">
            <option value="xxl">XXL</option>
            <option value="xl">XL</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </div>

        <div class="quantity">
          <input type="number" value="1" min="1" v />
          <button>Add to Cart</button>
        </div>

        <div>
          <p>Delivery:</p>
        </div>
        
      </div>
    </section>
  );
};

export default ProductDetail;
