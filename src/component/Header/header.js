import React from "react";
import "./header.scss";
import { FaPhoneAlt, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function header() {
  return (
    <div className="container-fuild">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="https://theperfumehouse.vn/wp-content/uploads/2019/10/logo-900x200.png"></img>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <img
                class="offcanvas-title"
                id="offcanvasNavbarLabel"
                src="https://theperfumehouse.vn/wp-content/uploads/2019/10/logo-900x200.png"
              ></img>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class=" navbar ">
                <li class="nav-items ">
                  <Link to="/Products" class="nav-item " href="#">
                    SẢN PHẨM{" "}
                  </Link>
                  <ul className="nav-link">
                    <div className="nav-link-items">
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NƯỚC HOA DUBAI
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          TINH DẦU DUBAI
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          TINH DẦU TREO XE
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NHỤY HOA NGHỆ TÂY
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li class="nav-items">
                  <a class="nav-item " href="#">
                    MÙI HƯƠNG{" "}
                  </a>
                  <ul className="nav-link">
                    <div className="nav-link-items">
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          MẠNH MẼ
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          LÔI CUỐN
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          QUYẾN RŨ
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NAM TÍNH
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NỒNG NÀN
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>
                <li class="nav-items ">
                  <a class="nav-item  " href="#">
                    ĐỐI TƯỢNG{" "}
                  </a>
                  <ul className="nav-link text-justify">
                    <div className="nav-link-items">
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NƯỚC HOA TINH DẦU NAM
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NƯỚC HOA TINH DẦU NỮ
                        </a>
                      </li>
                      <li className="nav-link-item">
                        <a className="nav-item" href="#">
                          NƯỚC HOA TINH DẦU UNISEX
                        </a>
                      </li>
                    </div>
                  </ul>
                </li>

                <li class="nav-items ">
                  <a class="nav-item  " href="#">
                    SẢN PHẨM BÁN CHẠY
                  </a>
                </li>
                <li class="nav-items ">
                  <a class="nav-item  " href="#">
                    LIÊN HỆ{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="  navbar-icon">
          <li class="nav-icons ">
            <a class="nav-icon  " href="#">
              <FaUser />{" "}
            </a>
          </li>
          <li
            class="nav-icons "
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Tooltip on left"
          >
            <a class="nav-icon  " href="#">
              <FaShoppingCart />{" "}
            </a>
          </li>
          <li class="nav-icons ">
            <a class="nav-icon  " href="#">
              <FaPhoneAlt />{" "}
            </a>
          </li>
          <li class="nav-icons ">
            <a class="nav-icon  " href="#">
              <FaSearch />{" "}
             
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}
