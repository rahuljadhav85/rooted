import React from "react";

const OrderSummery = () => {
  return (
    <>
      <div className="row row-gap-4 ">
            <div className="col-12">
              <div className="summary">
                <div className="head">Order Summary</div>
                <ul>
                  <li>
                    <div className="title">Basic Price</div>
                    <div className="price">₹3,000</div>
                  </li>
                  <li>
                    <div className="title">Discount</div>
                    <div className="price red">-₹52</div>
                  </li>
                  <li>
                    <div className="title">GST Taxes</div>
                    <div className="price">₹482</div>
                  </li>
                  <li>
                    <div className="title">Coupon Discount</div>
                    <div className="price red">-₹30</div>
                  </li>
                  <li>
                    <div className="title">Shipping cost</div>
                    <div className="price">₹154</div>
                  </li>
                  <li>
                    <div className="title">Total Payment</div>
                    <div className="price">₹3,554</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    </>
  );
};

export default OrderSummery;
