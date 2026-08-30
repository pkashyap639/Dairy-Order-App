import "./App.css";
import { useState, useEffect } from "react";
import { getProducts } from "./Api.js";
import Product from "./Components/Product.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(0);
  useEffect(() => {
    // fetch products here
    getProducts()
      .then(setProducts)
      .catch((err) => console.error("Fetch Failed", err));
  }, []);

  function setQuantity(product_code, newValue) {
    setQty((prev) => ({ ...prev, [product_code]: newValue }));
  }
  return (
    <div className="min-h-screen bg-frost">
      <div className="sticky top-0 bg-ink-900 px-4 py-4">
        <span className="font-display font-semibold text-sm tracking-wide text-white uppercase">
          Store 159 · Dairy Order
        </span>
      </div>
      <div className="p-4">
        <div className="mb-4 rounded-lg bg-white p-4 border border-line">
          <span className="mb-2 block font-display text-xs uppercase tracking-wide text-ink-500">
            Tally
          </span>
        </div>
        {products.map((p) => (
          <div key={p.product_code}>
            <Product
              product={p}
              quantity={qty[p.product_code] || 0}
              onChange={(newQty) => setQuantity(p.product_code, newQty)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
