import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-12 col-xl-3 text-left  ">
            <div className="title-footer">
              <h4 className=" h4 font-weight-bold text-uppercase ">
                SOLUTIONS
              </h4>
            </div>
            <p>
              Chúng tôi là The Perfume House có địa chỉ trụ sở tại 334/24B Lê
              Quang Định, Phường 11, Quận Bình Thạnh, TP. Hồ Chí Minh, Việt Nam.
              Thành lập Sàn giao dịch thương mại điện tử thông qua website
              www.theperfumehouse.vn.
            </p>
            <ul className="lists ">
              <li>
                <i className="fa fa-map-marker"></i>{" "}
                <Link to="">115/17B Hưng Phú, Phường 8, Quận 8, TP.HCM</Link>
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                <Link rel="nofollow" to="">
                  02873006800
                </Link>
              </li>
              <li>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                <Link rel="nofollow" to="">
                info@theperfumehouse.vn
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-12 col-xl-3 text-left  ">
            <div className="title-footer">
              <h4 className=" h4 font-weight-bold text-uppercase ">Liên kết</h4>
            </div>

            <ul className="lists ">
              <li className="lists-item">
                <Link to="">Tìm kiếm</Link>
              </li>
              <li className="lists-item">
                <Link to=""> Chính sách đổi trả</Link>
              </li>
              <li className="lists-item">
                <Link to="">Chính sách vận chuyển</Link>
              </li>
              <li className="lists-item">
                <Link to="">Giới thiệu</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-12 col-xl-3 text-left  ">
            <div className="title-footer">
              <h4 className=" h4 font-weight-bold text-uppercase ">Fanpage</h4>
            </div>
          </div>
          <div className="col-md-6 col-12 col-xl-3 text-left  ">
            <div className="title-footer">
              <h4 className=" h4 font-weight-bold text-uppercase ">
                Đăng ký nhận khuyến mãi
              </h4>
            </div>
            <p>Hãy là người đầu tiên nhận khuyến mãi lớn!</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="EMAIL"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>

            <ul className="lists "></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
