"use client";
import React, { useEffect } from "react";

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
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="margin-bottom-900">
                <div className="container">
                    
                    <div className="row justify-content-center row-gap-5">
                        <div className="col-md-8">
                            <div className="subBox">
                                <div className="content">
                                    <form action="" className="personalDetails">
                                        <div className="row row-gap-4">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="First Name" value="Prashant" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Last Name" value="Savarkar" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Phone Number" value="+91 9741635476" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Email Address" value="name.123@gmail.com" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Date Of Birth" value="16/04/1996" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Company Name" value="Bombaytone" />
                                            </div>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="Company Address Line 1" value="19A, Sunshine Building, Opp: Domino's Pizza, 1st Cross Road," />
                                            </div>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="Company Address Line 2" value="Lokhandwala, Andheri West, Mumbai, Maharashtra 400053" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="City" value="Andheri(West)" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="State" value="Maharashtra" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Department" value="UI Department" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Designation" value="UI/UX Designer" />
                                            </div>
                                        </div>
                                        <div className="row mt-5 justify-content-center">
                                            <a href="#" className="btn1">Confirm <img src="/assets/images/icons/right-arrow.svg" alt="" /></a>
                                        </div>
                                    </form>
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