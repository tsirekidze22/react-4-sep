import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Users from "./pages/admin/Users";
import Example from "./components/Example";

function App() {
  return (
    <>
      <Example />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Top level route */}
          <Route path="/" element={<Home />} /> {/* Nested/Child routes */}
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
