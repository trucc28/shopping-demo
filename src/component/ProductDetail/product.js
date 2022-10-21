import React from "react";
import { useParams } from "react-router-dom";

import "./product.scss";
import SideSP from "../SideProduct/product"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addTocart } from "~/redux/cartSlice";
import Crouses  from "../../Data/Data.json"

export default function Product() {
  const dispatch = useDispatch()

 const proid = useParams();
 const proDetail = Crouses.filter(x=>x.id === proid.id)
 const product = proDetail[0]


    const ShowProduct = () => {
        return (
          <div className="row">
            <div className=" col-md-6 col-lg-6 my-3">
                <div className="card-top " key={product.id}>
                  <img  alt=""
                  className="card-image"
                    src={ product.image}
                  />
                </div>
            </div>
            <div className=" col-md-6  col-lg-6">
                <div className="card-body " key={product.id}>
                 <h1>{product.title}</h1>
                 <h4>{product.description}</h4>
                 <div className="card-rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                  </div>
                 
                  <button 
                    onClick={() => {
                      const action = addTocart(product);
                      dispatch(action);
                  }}
                  className="btn btn-primary me-2">thêm vào giỏ</button>
                 <Link to="/cart">  <button  onClick={() => {
                      const action = addTocart(product);
                      dispatch(action);
                  }} className="btn btn-primary">Mua ngay</button></Link>
                </div>
            </div>
            <div>
          
            </div>
            </div>
              
        );

    }

  return (
    <div className='container'>
  
     <ShowProduct />
    <div className="my-5">
    <SideSP />
    </div>
 </div>

  )
}
