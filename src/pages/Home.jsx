import { useEffect, useRef, useState } from "react";
import ProductsList from "../components/ProductsList";

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  {
    /* ორიგინალი სია */
  }
  const [filteredProducts, setFilteredProducts] = useState([]);
  {
    /* გაფილტრული სია */
  }
  // const [value, setValue] = useState("");
  const inputRef = useRef();
  // const emailRef = useRef();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductsList(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  // Dependency Array
  // Initial Render

  // const filteredProducts = productsList.filter((item) =>
  //   item.title.toLowerCase().includes(value.toLowerCase()),
  // );

  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    const filteredProducts = productsList.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setFilteredProducts(filteredProducts);
  };

  const handleClear = () => {
    inputRef.current.value = "";
    setFilteredProducts(productsList);
  };
  return (
    <div>
      Welcome on Homepage!
      {/* Products - პროპსის სახელი, productsList - მნიშვნელობა */}
      {/* <input
        className="my-3 block mx-auto border-2 border-stone-300 rounded-md p-4"
        type="text"
        placeholder="Search product..."
        onChange={(e) => setValue(e.target.value)}
      /> */}
      {/* <ProductsList products={filteredProducts} /> */}
      <div className="w-100 mx-auto flex gap-x-3 items-center">
        <input
          className="my-3 block border-2 border-stone-300 rounded-md p-4"
          type="text"
          placeholder="Search product..."
          ref={inputRef}
        />
        <button
          className="px-5 py-3 border-2 rounded-md cursor-pointer hover:bg-green-400"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="px-5 py-3 border-2 rounded-md cursor-pointer hover:bg-green-400"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <ProductsList products={filteredProducts} />
    </div>
  );
};

export default Home;
