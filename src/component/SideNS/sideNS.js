import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./sideNS.scss";
export default function Banner() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
      
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return ( 
      <div className="container ">
        <h4 className="text-center my-4"> //ĐƯỢC NHIỀU NGHỆ SĨ TIN DÙNG//</h4>
      <Slider {...settings}>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/tinh-dau-dubai-phuong-hoang-gold-.jpg"></img>
        </div>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/sam-nuoc-hoa-dubai.jpg"></img>
        </div>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/nguoi-noi-tieng-nuoc-hoa-dubai-1.jpg"></img>
        </div>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/nguoi-noi-tieng-nuoc-hoa-dubai.jpg"></img>
        </div>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/ngoc-trinh-nuoc-hoa-dubai.jpg"></img>
        </div>
        <div>
          <img className="banner-img" src="https://theperfumehouse.vn/wp-content/uploads/2022/07/huong-giang-nuoc-hoa-dubai.jpg"></img>
        </div>
        
         </Slider>
         </div>
    )}