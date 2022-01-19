import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductListingPage from "../pages/ProductListingPage";

const App = () => {
  const [products, setProducts] = useState([{}]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProductListingPage products={products} setProducts={setProducts} />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
