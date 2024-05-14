"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import OtpInput from 'react-otp-input';

const page = () => {
    useEffect(() => {
        document.body.classList.add('headeBorder')
        return () => {
          document.body.classList.remove('headeBorder')
        }
      }, [])
      const [otp, setOtp] = useState('');
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
                                <a href="" className="back"><svg width="71" height="27" viewBox="0 0 71 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.85797 17.8677C5.6734 18.0584 5.42077 18.1678 5.15564 18.1719C4.89051 18.1761 4.63458 18.0746 4.44415 17.8898L0.382041 13.9478C0.191658 13.763 0.0823771 13.5101 0.0782278 13.2446C0.0740785 12.9792 0.175401 12.7229 0.359915 12.5322L4.29683 8.46521C4.48256 8.2799 4.73356 8.17505 4.99576 8.17323C5.25796 8.17141 5.51039 8.27278 5.69867 8.4555C5.88696 8.63822 5.99604 8.88767 6.00242 9.15013C6.0088 9.41259 5.91197 9.66705 5.73279 9.85871L3.47595 12.1901L15.0605 12.0091C15.3257 12.0049 15.5817 12.1064 15.7721 12.2912C15.9626 12.4761 16.0719 12.7291 16.0761 12.9946C16.0802 13.2601 15.9788 13.5164 15.7943 13.707C15.6097 13.8977 15.357 14.0072 15.0918 14.0113L3.50724 14.1924L5.83585 16.4521C6.02623 16.637 6.13551 16.8899 6.13966 17.1554C6.14381 17.4208 6.04249 17.6771 5.85797 17.8677Z" fill="black"/>
                            <path d="M37.6263 15.816C37.6263 14.712 36.7943 14.04 35.5783 14.04H33.1783V17.512H35.6423C36.8743 17.512 37.6263 16.888 37.6263 15.816ZM37.3383 10.968C37.3383 9.96 36.6183 9.368 35.4343 9.368H33.1783V12.552H35.4343C36.6183 12.552 37.3383 11.992 37.3383 10.968ZM39.4503 16.008C39.4503 17.704 38.0743 19 35.8023 19H31.3543V7.88H35.5943C37.9463 7.88 39.1943 9.176 39.1943 10.744C39.1943 12.088 38.3783 12.904 37.3063 13.288C38.4903 13.496 39.4503 14.68 39.4503 16.008ZM40.8244 14.552C40.8244 11.832 42.6644 10.04 44.9844 10.04C46.4724 10.04 47.4964 10.744 48.0404 11.464V10.184H49.8804V19H48.0404V17.688C47.4804 18.44 46.4244 19.144 44.9524 19.144C42.6644 19.144 40.8244 17.272 40.8244 14.552ZM48.0404 14.584C48.0404 12.696 46.7444 11.624 45.3684 11.624C44.0084 11.624 42.6964 12.648 42.6964 14.552C42.6964 16.456 44.0084 17.56 45.3684 17.56C46.7444 17.56 48.0404 16.488 48.0404 14.584ZM51.6682 14.584C51.6682 11.832 53.4602 10.04 55.9882 10.04C58.1482 10.04 59.5562 11.112 60.0522 12.968H58.0842C57.7802 12.12 57.0762 11.576 55.9882 11.576C54.5162 11.576 53.5402 12.664 53.5402 14.584C53.5402 16.52 54.5162 17.608 55.9882 17.608C57.0762 17.608 57.7482 17.128 58.0842 16.216H60.0522C59.5562 17.944 58.1482 19.144 55.9882 19.144C53.4602 19.144 51.6682 17.352 51.6682 14.584ZM61.8699 19V7.16H63.6939V14.04L66.8939 10.184H69.4219L65.3579 14.6L69.4219 19H66.9579L63.6939 15.208V19H61.8699Z" fill="black"/>
                            </svg>
                            </a>
                                <div className="heading1 fs-600 text-center">Stay Rooted!</div>       
                                <div className="otp">
                                    <label for="">Enter OTP sent to +91 987654321 </label>
                                    <div className="group">
                                              <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                renderSeparator={<span style={{minWidth:"25px"}}></span>}
                                                renderInput={(props) => <input {...props} style={{width:"100%"}} />}
                                              />
                                    </div>
                                </div>
                                <div className="resend text-center mt-3">
                                    Resend in 0:30
                                </div>
                                {/* for disabled */}
                                
                                {/* <button disabled="disabled" type="submit">
                                    Send OTP
                                </button>  */}
                                {/* for disabled */}
                                <Link href='/login-ready' className='w-100 text-center'>
                                    <button type="submit">
                                        Verify OTP
                                    </button>
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