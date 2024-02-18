import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";

function Products() {
  console.log(productsData);

  return (
    <div className="products-wrapper">
      {productsData.map((product) => (
        <ProductItem product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Products;
