import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const productList = useSelector((state) => state.cart);
  const qtyCart = productList.reduce((current, item) => current + item.qty, 0);

  window.addEventListener("scroll", function () {
    const search = document.querySelector(".navbar");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <nav class="navbar navbar-expand-lg container  ">
        <button
          class="navbar-toggler ml-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          
          <div class="navbar-nav d-flex align-items-center  ">
            <div>
              <Link class="nav-link-img " to="/">
                <img src="https://theperfumehouse.vn/wp-content/uploads/2019/10/logo-900x200.png"></img>
              </Link>
            </div>
            <ul className="navbar-nav ">
            <li class="nav-item px-2">
              <Link class="nav-link" to="/">
                TRANG CHỦ
              </Link>
            </li>
            <li class="nav-item  px-2">
              <Link to="/products" class="nav-link ">
                SẢN PHẨM
              </Link>
            </li>
            <li class="nav-item  px-2">
              <Link class="nav-link ">PHONG CÁCH</Link>
            </li>
            <li class="nav-item px-2">
              <Link class="nav-link ">GIỚI TÍNH</Link>
            </li>
           
            </ul>
           
          </div>
          
          
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-search mx-auto">
            <form role="search">
              <input
                class="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="nav-icons mx-4">
            <ul className="nav-ions d-flex my-auto p0 ">
              <li className="nav-in-icon">
                <Link to="/login" className="icon-color">
                  <i class="fa-solid fa-user"></i>
                </Link>
              </li>
              <li className="nav-in-icon ml-5">
                <Link className="icon-color" to="/cart">
                  <i class="fa-solid fa-cart-shopping"></i>
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
