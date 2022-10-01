import Header from "./component/Header/header";
import Banner from "./component/Banner/banner";
import SideNS from "./component/SideNS/sideNS"
import SideSP from "./component/SideSP/sideSP"
import Products from "./component/Products/products";
import Product from "./component/Product/product";
import "./App.css";
import { Routes, Route,  } from "react-router-dom";
import bootstrap from 'bootstrap'
export default function App() {
  return (
    <>
   <Header /> 
     <Routes>
     <Route path="/" element={<Banner />}/>
     <Route path="/" element={<SideNS />}/>
     <Route path="/" element={<SideSP />}/>
     <Route path="/Products" element={<Products />}/>
      <Route path="/Products/:id" element={<Product />}/>
      
      </Routes> 
    </>
  );
}
