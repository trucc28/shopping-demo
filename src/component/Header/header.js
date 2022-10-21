import React from "react";
import "./header.scss"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../Data/logo.png"
export default function Navbar() {
    
  const productList = useSelector((state) => state.cart);
  const qtyCart = productList.reduce((current, item) => current + item.qty, 0);

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".navbar");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg container  ">
        <button
          className="navbar-toggler ml-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="navbar-nav align-tem-center justify-content-evenly ">
            <div>
              <Link className="nav-link-img " to="/">
                <img alt="" src={Logo}></img>
              </Link>
            </div>
            <ul className="navbar-nav gap-2 ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  TRANG CHỦ
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/products" className="nav-link ">
                  SẢN PHẨM
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link ">PHONG CÁCH</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link ">GIỚI TÍNH</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">LIÊN HỆ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-search mx-auto">
            <form role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="nav-icons">
            <ul className="nav-ions d-flex my-auto gap-2 ">
              <li className="nav-in-icon">
                <Link to="/login" className="icon-color" >
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
           
              <li className="nav-in-icon ">
                <Link className="icon-color" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="cart-qty">{qtyCart}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
