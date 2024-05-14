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
                            <div className="col-12">
                                <div className="subBox">
                                    <div className="head">Box Size <Link href="subscription-box-size#boxsize" className="edit">Edit</Link></div>
                                    <div className="content">
                                        <div className="row row-gap-4">
                                            <div className="col-md-12">
                                                <div className="boxSelected">
                                                    <div className="box">
                                                        <img src="/assets/images/subscribe/box.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Large Size Tiffin Box
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" id="DietType">
                                <div className="subBox ">
                                    <div className="head">Diet Type <Link href="subscription-diet-type#DietType" className="edit">Edit</Link></div>
                                    <div className="content">
                                        <div className="row row-gap-4">
                                            <div className="col-md-6">
                                                <div className="boxSelected">
                                                    <div className="box">
                                                        <img src="/assets/images/subscribe/veg.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Vegetarian Diet
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                
                            <div className="col-12" id="Cuisine">
                                <div className="subBox ">
                                    <div className="head">Cuisine</div>
                                        <div className="content">
                                            <div className="row row-gap-5">
                                                <div className="col-md-4">
                                                    <div className="box-size">
                                                        <input className="form-check-input" name="Cuisine" type="checkbox" value="" id="North" />
                                                        <span className="checkmark"></span>
                                                        <label className="form-check-label" for="North">
                                                            <img src="/assets/images/subscribe/001.png" alt="" />
                                                        </label>
                                                        <div className="title">Odysseys Of The North</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="box-size">
                                                        <input className="form-check-input" name="Cuisine" type="checkbox" value="" id="Maratha" />
                                                        <span className="checkmark"></span>
                                                        <label className="form-check-label" for="Maratha">
                                                            <img src="/assets/images/subscribe/002.png" alt="" />
                                                        </label>
                                                        <div className="title">Maratha Culinary Heritage</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="box-size">
                                                        <input className="form-check-input" name="Cuisine" type="checkbox" value="" id="Southern" />
                                                        <span className="checkmark"></span>
                                                        <label className="form-check-label" for="Southern">
                                                            <img src="/assets/images/subscribe/003.png" alt="" />
                                                        </label>
                                                        <div className="title">Southern Spice Symphony</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="box-size">
                                                        <input className="form-check-input" name="Cuisine" type="checkbox" value="" id="Gujarati" />
                                                        <span className="checkmark"></span>
                                                        <label className="form-check-label" for="Gujarati">
                                                            <img src="/assets/images/subscribe/004.png" alt="" />
                                                        </label>
                                                        <div className="title">Gujarati Gourmet Tapestry</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="box-size">
                                                        <input className="form-check-input" name="Cuisine" type="checkbox" value="" id="Bengali" />
                                                        <span className="checkmark"></span>
                                                        <label className="form-check-label" for="Bengali">
                                                            <img src="/assets/images/subscribe/005.png" alt="" />
                                                        </label>
                                                        <div className="title">Bengali Flavour Symphony</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-5 justify-content-center">
                                                <Link href="subscription-delivery-days#DeliveryDays" className="btn1">Confirm <img src="/assets/images/icons/right-arrow.svg" alt="" /></Link>
                                            </div>
                                        </div>
                                    </div>
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
                        <OrderSummery />
                    </div>
                </div>
            </div>
            
        </section>
        </div>
      </>
  )
}

export default page