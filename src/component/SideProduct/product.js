import React from "react";
import "./product.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
import Crouses  from "../../Data/Data.json"



export default function App() {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 5,
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

const ShowSidebar = () => {
  return (
     
       <Slider {...settings}>
     {Crouses.map((product,index)=>{
        return (
          <div key={index}  className=" mb-2 ">
          <div className=" card mx-1 " >
            <Link to={`/products/${product.id}`}>
              <div className="card-top">
                <span className="discount"> sale 10%</span>
                <img alt="" src={product.image} className="card-img-top1 " />

                <div className="product-img2">
                  <img alt="" src={product.image1} className="  card-img-top2 " />
                 
                </div>
              </div>
            </Link>
            <div className="card-body">
              <p className="card-title  ">{product.title}</p>

              <div className="card-rate">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>

              </div>
              <div className="card-price d-flex justify-content-between">
                <p className=" price  ">{product.price}$</p>
               <button onClick={() => {
                    const action = addTocart(product);
                    dispatch(action);
                  }}  className="price-btn"><i className="fa-solid fa-plus"></i></button>
              </div>

              
            </div>
          </div>
        </div>
         
        
              
        )
     })}
           </Slider>
    
  )
}
  return (
    <div className="container ">
      <h4 className="text-center my-4" >HOT SALES</h4>
       <ShowSidebar />
    </div>
  )
}

