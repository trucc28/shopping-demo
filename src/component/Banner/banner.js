import React from 'react'
import "./banner.scss";
import SideNS from "../SideNS/sideNS"
import SideSP from "../SideSP/sideSP"
import Products from "../Products/products";

export default function home() {
  return (
    <div className='container' >
    <img  className='home-img' src='https://theperfumehouse.vn/wp-content/uploads/2020/06/banner-nuoc-hoa-dubai-the-perfume-house.jpg'></img>
    <SideNS /> 
    <SideSP /> 
    <Products /> 
    </div>
  )
}
