import Header from "./component/Header/header"
import Banner from "./component/Banner/banner";
import SideArtist from "./component/SideArtist/artist";
import SideProduct from "./component/SideProduct/product";
import Products from "./component/Products/products";
import Login from "./component/Login/login";
import ProductDetail from "./component/ProductDetail/product";
import Cart from "./component/Cart/cart";
import Footer from "./component/Footer/footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";



export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/" element={<SideArtist />} />
        <Route path="/" element={<SideProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
