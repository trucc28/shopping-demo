import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, reduceAmountCart, removeFromCart } from "../../redux/cartSlice";
import "./cart.scss";

export default function Cart() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.cart);
  const totalPrice = productList.reduce(
    (current, item) => current + item.price * item.qty,
    0
  );
  const ShowProduct = () => {
    return (
      <div className="container">
        <div className="cart-title">
          <h2>Giỏ Hàng :</h2>
        </div>
        {productList.length !== 0 ? (
          <div className="cart-product">
            {productList.map((product) => {
              return (
                <div className="container">
                  <div className="row my-3">
                    <div className="d-flex justify-content-between flex-wrap align-items-center ">
                      <div className="  product-image">
                        <img alt="img-cart" src={product.image}></img>
                      </div>
                      <div className="product-title">
                        <p>{product.title}</p>
                      </div>
                    <div className="d-flex gap-5">
                      <div className="product-quantity">
                        <div className="d-flex">
                          <input
                            onClick={() => {
                              const action = reduceAmountCart(product);
                              dispatch(action);
                            }}
                            className="input-form"
                            type="button"
                            value="-"
                          ></input>
                          <input
                            className="input-form"
                            type="button"
                            value={product.qty}
                          ></input>
                          <input
                            onClick={() => {
                              const action = addTocart(product);
                              dispatch(action);
                            }}
                            className="input-form"
                            type="button"
                            value="+"
                          ></input>
                        </div>
                      </div>
                      <div className="   product-removal">
                        <button
                          className="remove-product btn btn-close"
                          onClick={() => {
                            const action = removeFromCart(product);
                            dispatch(action);
                          }}
                        ></button>
                      </div>
                      <div className="   product-line-price">
                        {product.price * product.qty}$
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div> chưa có sản phẩm</div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="cart-left col-xs-12 col-lg-9 col-md-8 col-sm-7">
          <ShowProduct />
        </div>
        <div className="cart-right col-xs-12 col-lg-3 col-md-4 col-sm-5">
          <div className="totals">
            <div className="total-title">
              <h3> THÔNG TIN ĐƠN HÀNG</h3>
            </div>
            <div className="total-item d-flex">
              <label>Tổng Tiền :</label>
              <div className="totals-value" id="cart-subtotal">
                ${totalPrice}
              </div>
            </div>
            <div className="total-text">
              <p>
                Phí vận chuyển sẽ được tính ở trang thanh toán. Bạn cũng có thể
                nhập mã giảm giá ở ở phía dưới
              </p>
            </div>
            <div className="total-action  ">
              <button className="btn btn-danger r">Thanh Toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
