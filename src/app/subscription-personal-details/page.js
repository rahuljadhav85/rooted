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
                                                        <img src="assets/images/subscribe/box.png" alt="" />
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
                                            <div className="col-md-12">
                                                <div className="boxSelected">
                                                    <div className="box">
                                                        <img src="assets/images/subscribe/veg.png" alt="" />
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
                                    <div className="head">Cuisine <Link href="subscription-cuisine#Cuisine" className="edit">Edit</Link></div>
                                        <div className="content">
                                            <div className="row row-gap-4">
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Odysseys Of The North
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Maratha Culinary Heritage
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Southern Spice Symphony
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-12" id="DeliveryDays">
                                <div className="subBox">
                                    <div className="head">Delivery Days <Link href="subscription-delivery-days#DeliveryDays" className="edit">Edit</Link></div>
                                    <div className="content">
                                        
                                        <form action="" className="personalDetails">
                                            <div className="row row-gap-4">
                                                <div className="col-md-12">
                                                    <label for="" className="fs-300 text-center fw-medium">Select Weekend Type</label>
                                                    <select name="" id="" disabled>
                                                        <option value="">All Sundays</option>
                                                        <option value="">All Saturday & Sundays</option>
                                                        <option value="">1st & 3rd Saturday & All Sundays</option>
                                                        <option value="">2nd & 4th Saturday & All Sundays</option>
                                                    </select>
                                                </div>
                                                
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" id="PersonalDetails">
                                <div className="subBox">
                                    <div className="head">Personal Details</div>
                                    <div className="content">
                                        <form action="" className="personalDetails">
                                            <div className="row row-gap-4">
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Phone Number" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Email Address" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Date Of Birth" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Company Name" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Company Address Line 1" />
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Company Address Line 2" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="City" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="State" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Department" />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" placeholder="Designation" />
                                                </div>
                                            </div>
                                            <div className="row mt-5 justify-content-center">
                                                <Link href="subscription-payment#Payment" className="btn1">Confirm <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
                                            </div>
                                        </form>
                                    </div>
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