import "./App.css";
import { useEffect, useState } from "react";
import { MainNavbar } from "./Components/MainNavbar.jsx";
import { ProductTable } from "./Components/ProductTable.jsx";
import { getProducts } from "./Api.js";
function App() {
  const [products, setProducts] = useState([]);
  function loadProducts() {
    const saved = localStorage.getItem("products");
    if (saved) {
      console.log("using local storage");
      setProducts(JSON.parse(saved));
      return;
    }
    console.log("Data not in cache");
    getProducts()
      .then((data) => {
        localStorage.setItem("products", JSON.stringify(data));
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div>
      <MainNavbar />
      <ProductTable product={products} />
    </div>
  );
}

export default App;
