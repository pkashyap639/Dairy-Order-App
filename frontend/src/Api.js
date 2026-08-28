import axios from "axios";

export function getProducts() {
  return axios
    .get("http://localhost:3000/api/products/getAllProducts")
    .then((resp) => resp.data.products)
    .catch((error) => {
      console.error(error);
      throw error;
    })
    .finally(() => {
      console.log("Request Completed");
    });
}
