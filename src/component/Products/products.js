import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.scss";
export default function Products() {
const [data, setData] = useState([]);
const [filter, setFilter] = useState(data);

useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/course");
      setData(await res.clone().json());
      setFilter(await res.json());
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      < >
       <div className="  d-flex justify-content-center my-5 flex-wrap">
          <button className="btn btn-outline-dark me-2  " onClick={() => setFilter(data)}>Tất Cả</button>
          <button className="btn btn-outline-dark me-2 " onClick={() => filterProduct("tinh dầu dubai")} >Tinh Dầu DUBAI</button>
          <button className="btn btn-outline-dark me-2 " onClick={() => filterProduct("nước hoa dubai")}>Nước Hoa DUBAI</button>
          <button className="btn btn-outline-dark me-2 " onClick={() => filterProduct("tinh dầu treo xe")}>Tinh Dầu Treo Xe </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("nhụy hoa nghệ tây")}>Nhụy Hoa Nghệ Tây </button>
        </div> 

        {filter.map((Product) => {
          return (
           
              <div className="col-6 col-md-4 col-xl-3  ">
                 
                <div class=" card my-2 " key={Product.id}>
                <Link to={`/products/${Product.id}`} >
                <div className="card-top"> 
                  <img
                    src={Product.image}
                    class="card-img-top1 "
                  />
                 
                   <img
                    src={Product.image1}
                    class="  card-img-top2 "
                  />
                 
                </div> 
                    </Link>
                  <div class="card-body">
                    <h5 class="card-title text-center ">
                      {Product.title}
                    </h5>
                    <div className="text-center">
                    <Link to={`/products/${Product.id}`} className="btn btn-primary ">{Product.price}đ</Link>
                    </div>
                  </div>
                </div>
              
              </div>
             
          );
        })}
      </>
    );
  };

  return (
    <div className='container'>
       <div className="row">
       <ShowProducts />
       </div>
    </div>
  )
}

