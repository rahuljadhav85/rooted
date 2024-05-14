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
                        
                    </div>
                </div>
            </div>
        </div>
        <section className="margin-bottom-900">
            <div className="container">
                
                <div className="row justify-content-center row-gap-5">
                    <div className="col-md-6">
                        <form name="" method="post" action="">
                            <div className="loginBox">
                                <div className="heading1 fs-600 text-center">Stay Rooted!</div>       
                                <div className="enterMobileNo">
                                    <label for="">Enter mobile number</label>
                                    <div className="group">
                                        <div className="code">+91</div>
                                        <input type="text" placeholder="Mobile No." />
                                    </div>
                                </div>
                                {/* for disabled */}
                                
                                {/* <button disabled="disabled" type="submit">
                                    Send OTP
                                </button>  */}
                                {/* for disabled */}
                                <Link href='/login-otp' className='w-100 text-center'>
                                    <button type="submit">
                                        Send OTP
                                    </button>
                                </Link>
                                <Link href='' className='loginWith'>
                                    <img src="assets/images/icons/google.svg" alt="" /> Log in with Google
                                </Link>
                                <Link href='' className='loginWith'>
                                    <img src="assets/images/icons/facebook-login.svg" alt="" /> Log in with Facebook
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
          </div>
      </>
  )
}

export default page