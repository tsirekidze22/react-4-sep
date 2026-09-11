import { Routes, Route, Link } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <nav>
        <Link to="/" className="m-1 bg-gray-200 rounded-xl p-1">
          Home
        </Link>
        <Link to="/about" className="m-1 bg-gray-200 rounded-xl p-1">
          About
        </Link>
        {/* <a href="/about">About</a> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
