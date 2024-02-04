import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import MerchantRoute from "./components/Routes/MerchantRoute";
import MerchantDashboard from "./pages/Merchant/MerchantDashboard";
import CreateCategory from "./pages/Merchant/CreateCategory";
import CreateProduct from "./pages/Merchant/CreateProduct";
import Profile from "./pages/user/Profile";
import Products from "./pages/Merchant/Products";
import UpdateProduct from "./pages/Merchant/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/dashboard/" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard/" element={<MerchantRoute />}>
          <Route path="merchant" element={<MerchantDashboard />} />
          <Route path="merchant/create-category" element={<CreateCategory />} />
          <Route path="merchant/create-product" element={<CreateProduct />} />
          <Route path="merchant/products" element={<Products />} />
          <Route path="merchant/product/:slug" element={<UpdateProduct />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
