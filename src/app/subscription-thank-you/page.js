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
        <div id="main">
        <div className="breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul>
                            <li><Link href="/">Back To Homepage</Link></li>
                            <li>Subscription</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section className="thankYou | margin-bottom-900 mt-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src="/assets/images/thank-you.svg" alt="" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h2 className="text1 text-center">Thank You For Embarking On This Flavorful Journey With Rooted. </h2>
                    </div>
                    <div className="col-md-10">
                        <h2 className="text2 text-center">Here's to discovering new tastes, celebrating diversity, and enjoying the art of fine dining together.</h2>
                    </div>
                </div>
            </div>
        </section>
        <div className="thankYouBottom | padding-block-900">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="text1 text-center">
                            Do you have any questions or need assistance, our customer support team is just an email or phone call away, ready to ensure your Rooted experience is nothing short of fantastic.
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4 justify-content-center mt-5">
                    <div className="col-md-3">
                        <a href="" className="btn1 w-100"><div className="circle"><img src="/assets/images/icons/mail.svg" alt="" /></div> name.123@gmail.com</a>
                    </div>
                    <div className="col-md-3">
                        <a href="" className="btn2 w-100"><div className="circle"><img src="/assets/images/icons/call.png" alt="" /></div> +91 68465 58468</a>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <h3 className="text-center">Follow Us On Social Media</h3>
                    </div>
                    <ul>
                        <li><a href=""><img src="/assets/images/icons/insta.svg" alt="" /></a></li>
                        <li><a href=""><img src="/assets/images/icons/facebook.svg" alt="" /></a></li>
                        <li><a href=""><img src="/assets/images/icons/youtube.svg" alt="" /></a></li>
                        <li><a href=""><img src="/assets/images/icons/linkedin.svg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
      </>
  )
}

export default page