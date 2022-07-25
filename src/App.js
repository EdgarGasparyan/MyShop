import "./App.css";
import Navigationbar from "./component/Navigationbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Admin from "./component/Admin";
import Login from "./component/Login";
import UserAccout from "./component/UserAccout";
import Register from "./component/Register";
import Footer from "./component/Footer";

const App = () => {

  return (
    <>
      <Navigationbar />
      <Routes>
        <Route exatc path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/useraccout" element={<UserAccout />} />
      </Routes>
		<Footer />
    </>
  );
};

export default App;
