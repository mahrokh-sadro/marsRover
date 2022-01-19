import React from "react";

import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import Header from "../components/Header";

const ProductListingPage = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(false);

  const DEMO_KEY = "YEe6wzjuzMq7TGDqAj9uSyNwCxxq2cN53cGKwm29";

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${DEMO_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.photos);
        setLoading(false);
        console.log(products + " in page");
        console.log(products.length + " in page");
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  products.splice(32, 824);

  return (
    <div>
      <Header />
      <ProductList products={products} loading={loading} />
    </div>
  );
};

export default ProductListingPage;
