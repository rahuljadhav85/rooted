"use client";
import React, { useEffect } from "react";
import Link from 'next/link'
import OrderSummery from '@/componets/OrderSummery'

const page = () => {
    useEffect(() => {
        document.body.classList.add('headeBorder')
        return () => {
          document.body.classList.remove('headeBorder')
        }
      }, [])

  return (
    
      < >
        <div id="main" className="subscribeWrapper">
        <div className="breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Subscription</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section className="margin-bottom-900 mt-3">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-md-8">
                        <div className="row row-gap-4">
                            <div className="col-12" id="boxsize">
                                <div className="subBox">
                                    <div className="head">Box Size</div>
                                    <div className="content">
                                        <div className="row row-gap-4">
                                            <div className="col-md-6">
                                                <div className="box-size boxsize">
                                                    <input className="form-check-input" name="boxSize" type="radio" value="" id="bigSizeBox" />
                                                    <span className="checkmark"></span>
                                                    <label className="form-check-label" for="bigSizeBox">
                                                        <img src="assets/images/subscribe/box.png" alt="" />
                                                    </label>
                                                    <div className="title">Large Box</div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="box-size boxsize">
                                                    <input className="form-check-input" name="boxSize" type="radio" value="" id="smallSizeBox" />
                                                    <span className="checkmark"></span>
                                                    <label className="form-check-label" for="smallSizeBox">
                                                        <img src="assets/images/subscribe/box-small.png" alt="" />
                                                    </label>
                                                    <div className="title">Small Box</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                              <div className="row mt-5 justify-content-center">
                                                  <Link href="subscription-diet-type#DietType" className="btn1">Confirm <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Diet Type</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Cuisine</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Delivery Days</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Personal Details</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Payment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div id="orderSummeryWrap">
                            <div id="sidebar">
                                <OrderSummery />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        </div>
      </>
  )
}

export default page