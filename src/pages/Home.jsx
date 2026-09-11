import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

const Home = () => {
  const [count, setCount] = useState(0);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductsList(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  // Dependency Array

  // Initial Render
  return (
    <div>
      Welcome on Homepage!
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/* Products - პროპსის სახელი, productsList - მნიშვნელობა */}
      <ProductsList products={productsList} />
    </div>
  );
};

export default Home;
