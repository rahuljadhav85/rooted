"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import OrderSummery from '@/componets/OrderSummery'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';


const page = () => {
    useEffect(() => {
        document.body.classList.add('headeBorder')
        return () => {
          document.body.classList.remove('headeBorder')
        }
      }, [])
      const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    
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
                                <div className="subBox ">
                                    <div className="head">Delivery Days</div>
                                    <div className="content">
                                        
                                        <form action="" className="personalDetails">
                                            <div className="row row-gap-4">
                                                <div className="col-md-12">
                                                    <label for="" className="fs-300 text-center fw-medium">Select Weekend Type</label>
                                                    <select name="" id="">
                                                        <option value="">All Saturday</option>
                                                        <option value="">1st & 3rd Saturday</option>
                                                        <option value="">2nd & 4th Saturday</option>
                                                    </select>
                                                </div>
                                                
                                            </div>
                                        </form>
                                        <div className="row row-gap-4 mt-5 justify-content-center">
                                            <div className="col-md-10">
                                                <DateRange
                                                    editableDateInputs={true}
                                                    minDate={new Date()}
                                                    onChange={item => setState([item.selection])}
                                                    moveRangeOnFirstSelection={false}
                                                          ranges={state}
                                                          rangeColors={['#115561', '#115561']}
                                                />
                                            </div>
                                           
                                        </div>
                                              <div className="row mt-5 justify-content-center">
                                               <Link href="subscription-personal-details#PersonalDetails" className="btn1">Confirm <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="note">
                                        <div className="icon">
                                            <img src="assets/images/icons/note.svg" alt="" />
                                        </div>
                                        <span>Note: Dates marked in yellow are your Non-Working Days and Public Holidays</span>
                                    </div>
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