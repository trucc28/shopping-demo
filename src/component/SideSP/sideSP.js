import React, { useState, useEffect } from "react";
import "./sideSP.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

export default function App() {
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
  const [data, setData] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
        const res = await fetch("http://localhost:3000/course");
        setData(await res.clone().json());
     
    };
    getProduct();

}, []);
const ShowSidebar = () => {
  return (
     
       <Slider {...settings}>
     {data.map((item,index)=>{
        return (
          <div className="card "  key = {index}>
             <Link to={`/products/${item.id}`} >
            <img className="card-img"
            src={item.image}></img>
            </Link>
            <div className="card-body">
              <p className="text-center">{item.title}</p>
            </div>
            <div className=" text-center">
            <Link to={`/products/${item.id}`} className="btn btn-primary ">{item.price}đ</Link>
            </div>
          </div>
         
        
              
        )
     })}
           </Slider>
    
  )
}
  return (
    <div className="container">
      <h4 className="text-center my-4" >//HOT SALES//</h4>
       <ShowSidebar />
    </div>
  )
}

