"use client";
import React, { useEffect } from "react";
import Link from 'next/link'

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
                    <div className="col-md-12">
                        <div className="row row-gap-4">
                            <div className="col-12">
                                <div className="subBox">
                                    <div className="head">Subscription Details 
                                        <div className="buttonWrap">
                                                  <Link href="/subscription-box-size" className="cancel">Edit Order </Link>
                                                  <Link href="/subscription-billing-history" className="history">View Billing History</Link>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="row row-gap-3">
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400">Personal Details </div>
                                                <p className="fs-400 fw-semiBold text-neutral-900 mb-1">Prashant Savarkar | Bombaytone</p>
                                                        <p className="fs-200 text-neutral-900">19A, Sunshine Building, Opp: Domino's Pizza, 1st Cross Road,<br></br>Lokhandwala, Andheri West, Mumbai, Maharashtra 400053</p>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400">Billing and Payments</div>
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <img src="/assets/images/icons/mastercard.png" alt="" />
                                                    </div>
                                                    <div className="pt-2">
                                                        <p className="fs-400 text-neutral-900">Visa ending ****8970</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-3 mt-2">
                                                    <div>
                                                        <img src="/assets/images/icons/uil_calender.svg" alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="fs-250 text-neutral-900"><strong>₹3,554.00/mo</strong><br/>
                                                        Next payment on Apr 24, 2024 Monthly plan</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="row row-gap-3 mt-4">
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400 mt-3">Box Size</div>
                                                <div className="boxSelected mt-3">
                                                    <div className="box">
                                                        <img src="/assets/images/subscribe/box.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Large Size Tiffin Box
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400 mt-3">Diet Type</div>
                                                <div className="boxSelected mt-3">
                                                    <div className="box">
                                                        <img src="/assets/images/subscribe/veg.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Vegetarian Diet
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="row row-gap-3 mt-5">
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400">Cuisine</div>
                                                <div className="row row-gap-4 mt-3">
                                                    <div className="col-md-12">
                                                        <div className="boxSelected">
                                                            <div className="icon">
                                                                <img src="/assets/images/subscribe/veg-icon.png" alt="" />
                                                            </div>
                                                            <div className="title">
                                                                Odysseys Of The North
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="boxSelected">
                                                            <div className="icon">
                                                                <img src="/assets/images/subscribe/veg-icon.png" alt="" />
                                                            </div>
                                                            <div className="title">
                                                                Maratha Culinary Heritage
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="boxSelected">
                                                            <div className="icon">
                                                                <img src="/assets/images/subscribe/veg-icon.png" alt="" />
                                                            </div>
                                                            <div className="title">
                                                                Southern Spice Symphony
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="title fw-bold text-neutral-400">Delivery Days<br/>
                                                <span className="fw-regular fs-200">(Weekend Type)</span>
                                                </div>
                                                <p className="fs-400 text-neutral-900 mt-3">All Saturdays</p>
                                                
                                            </div>
                                        </div>
                                              


                                        
                                    </div>
                                </div>
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