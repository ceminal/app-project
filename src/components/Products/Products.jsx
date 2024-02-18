import React from "react";
import "./Products.css";
import ProductItem from "./ProductItem";

function Products() {
  const products = [
    {
      title: "Kebap",
      image:
        "https://yemek.com/_next/image/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2023%2F04%2Fsis-kebap-onecikan.jpg&w=1920&q=75",
      price: 250,
    },
  ];

  return (
    <div className="products-wrapper">
      {products.map((product) => (
        <ProductItem product={product} key={product.title} />
      ))}
    </div>
  );
}

export default Products;
