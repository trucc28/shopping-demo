import React from 'react'
import "./banner.scss";
import SideNS from "../SideArtist/artist"
import SideSP from "../SideProduct/product"
import Products from "../Products/products";
import Banner from "../../Data/banner.png"
export default function home() {
  return (
    <div className='container  banner' >
    <img alt='baner-img' className='home-img' src={Banner}></img>
    <SideSP/>
  <SideNS/>
  <Products/>
    </div>
  )
}
