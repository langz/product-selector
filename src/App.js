import React from "react";
import "./App.css";
import ProductSelector from "./pages/product-selector/ProductSelector";

const App = () => {
  return (
    <div className="App">
      <img src="https://www.swixsport.com/siteassets/logos/logo.png?h=40" />
      <h1>Nordic Poles Selector</h1>
      <ProductSelector />
    </div>
  );
};

export default App;
