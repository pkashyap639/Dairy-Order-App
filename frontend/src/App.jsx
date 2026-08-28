import "./App.css";
import { useState, useEffect } from "react";
import { getProducts } from "./Api.js";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch products here
    getProducts()
      .then(setProducts)
      .catch((err) => console.error("Fetch Failed", err));
  }, []);
  return (
    <div className="min-h-screen bg-frost">
      <div className="sticky top-0 bg-ink-900 px-4 py-4">
        <span className="font-display font-semibold text-sm tracking-wide text-white uppercase">
          Store 159 · Dairy Order
        </span>
      </div>
      <div className="p-4">
        {products.map((p) => (
          <div key={p.product_code}>{p.description}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
