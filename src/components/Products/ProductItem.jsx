import React from "react";
import "./ProductItem.css";
import PropTypes from "prop-types";

function ProductItem(props) {
  console.log(props.product);
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.product.img} alt="image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{props.product.title}</strong>
        <span className="product-price">{props.product.price}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;

ProductItem.propTypes = {
  productImage: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.number,
};
