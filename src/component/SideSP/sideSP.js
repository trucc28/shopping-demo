import React, { useState, useEffect } from "react";
import "./sideSP.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "~/redux/cartSlice";

export default function App() {
  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
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
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const dispatch = useDispatch();

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
     {data.map((product,index)=>{
        return (
          <div className=" mb-2 ">
          <div class=" card mx-1 " key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className="card-top">
                <span className="discount"> sale 10%</span>
                <img src={product.image} class="card-img-top1 " />

                <div className="product-img2">
                  <img src={product.image1} class="  card-img-top2 " />
                  <a>Mua Ngay</a>
                </div>
              </div>
            </Link>
            <div class="card-body">
              <p class="card-title  ">{product.title}</p>

              <div className="card-rate">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>

              </div>
              <div className="card-price d-flex justify-content-between">
                <p class=" price  ">{product.price}$</p>
               <button onClick={() => {
                    const action = addTocart(product);
                    dispatch(action);
                  }}  className="price-btn"><i class="fa-solid fa-plus"></i></button>
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
      <h4 className="text-center my-4" >//HOT SALES//</h4>
       <ShowSidebar />
    </div>
  )
}

