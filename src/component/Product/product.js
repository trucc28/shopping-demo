import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar,FaStarHalfAlt} from "react-icons/fa";
import "./product.scss";
import SideSP from "../SideSP/sideSP"
export default function Product() {
 
    const { id } = useParams();
    const [Product, setProduct] = useState([]);

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
                <div class="card-top " key={Product.id}>
                  <img 
                  class="card-image"
                    src={ Product.image}
                   
                    
                  />
                </div>
            </div>
            <div className=" col-md-6  col-lg-6">
                <div class="card-body " key={Product.id}>
                 <h1>{Product.title}</h1>
                 <h4>{Product.description}</h4>
                 <h4>Chất lượng:<FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />{" "}</h4>
                 <div className="input-forms">
                  <input className="input-form" type="button" value="-"></input>
                  <input className="input-form" type="button" value="1" min="1"></input>
                  <input className="input-form" type="button" value="+"></input>

                 </div>
                 <a className="btn btn-primary">{Product.price}đ</a>
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
