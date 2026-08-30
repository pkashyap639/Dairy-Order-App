import "./App.css";
import { useEffect, useState } from "react";
import { MainNavbar } from "./Components/MainNavbar.jsx";
import { ProductTable } from "./Components/ProductTable.jsx";
import { getProducts } from "./Api.js";
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <MainNavbar />
      <ProductTable product={products} />
    </div>
  );
}

export default App;
