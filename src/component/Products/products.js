import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./products.scss";
import { addTocart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Crouses  from "../../Data/Data.json"

export default function Products() {
  const dispatch = useDispatch();
  // const [data,setData ] = useState(Crouses);
  const [filter, setFilter] = useState(Crouses);

  const filterProduct = (cat) => {
    const updatedList = Crouses.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className=" btn-products d-flex justify-content-center flex-wrap gap-2 my-3">
          <button
            className=" btn-product btn btn-warning  "
            onClick={() => setFilter(Crouses)}
          >
            Tất Cả
          </button>
          <button
            className="btn-product btn btn-warning  "
            onClick={() => filterProduct("tinh dầu dubai")}
          >
            Tinh Dầu DUBAI
          </button>
          <button
            className=" btn-product btn btn-warning "
            onClick={() => filterProduct("nước hoa dubai")}
          >
            Nước Hoa DUBAI
          </button>
          <button
            className="btn-product btn btn-warning"
            onClick={() => filterProduct("tinh dầu treo xe")}
          >
            Tinh Dầu Treo Xe{" "}
          </button>
          <button
            className="btn-product btn btn-warning "
            onClick={() => filterProduct("nhụy hoa nghệ tây")}
          >
            Nhụy Hoa Nghệ Tây{" "}
          </button>
        </div>

        {filter.map((product,index) => {
          return (
            <div key={index} className="col-6 col-md-4 col-xl-3  " >
              <div className=" card my-3 ">
                <Link to={`/products/${product.id}`}>
                  <div className="card-top">
                    <span className="discount"> sale 10%</span>
                    <img alt="" src={product.image} className="card-img-top1 " />

                    <div className="product-img2">
                      <img alt="" src={product.image1} className="  card-img-top2 " />
                    
                    </div>
                  </div>
                </Link>
                <div className="card-body pb-0">
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
                      }} className="price-btn"><i className="fa-solid fa-plus"></i></button>
                  </div>

                  {/* <div className="text-center ">
                    <a
                      onClick={() => {
                        const action = addTocart(product);
                        dispatch(action);
                      }}
                      className="btn btn-primary me-2"
                    >
                      thêm vào giỏ
                    </a>

                    <Link to="/cart">
                      {" "}
                      <button
                        onClick={() => {
                          const action = addTocart(product);
                          dispatch(action);
                        }}
                        className="btn btn-primary"
                      >
                        Mua ngay
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <ShowProducts />
      </div>
    </div>
  );
}
