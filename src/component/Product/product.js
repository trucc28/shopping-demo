import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar,FaStarHalfAlt} from "react-icons/fa";
import "./product.scss";
import SideSP from "../SideSP/sideSP"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addTocart } from "~/redux/cartSlice";


export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch()




    useEffect(() => {
        const getProduct = async () => {
           
            const res = await fetch(`http://localhost:3000/course/${id}`);
            setProduct(await res.json());
        };
        getProduct();
    }, []);

    const ShowProduct = () => {
        return (
          <div className="row">
            <div className=" col-md-6 col-lg-6 my-3">
                <div class="card-top " key={product.id}>
                  <img 
                  class="card-image"
                    src={ product.image}
                  />
                </div>
            </div>
            <div className=" col-md-6  col-lg-6">
                <div class="card-body " key={product.id}>
                 <h1>{product.title}</h1>
                 <h4>{product.description}</h4>
                 <h4>Chất lượng:<FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />{" "}</h4>
                 
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
