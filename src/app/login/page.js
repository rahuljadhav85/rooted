'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoogleLogin } from 'react-google-login';

const Page = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        document.body.classList.add('headeBorder');
        return () => {
            document.body.classList.remove('headeBorder');
        };
    }, []);

    const handleLoginSuccess = (response) => {
        setUser(response.profileObj);
        console.log('Login Success:', response.profileObj);
    };

    const handleLoginFailure = (response) => {
        console.error('Google login failed:', response);
    };

    return (
        <>
            <div id="main" className="subscribeWrapper">
                <div className="breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
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
                                            <label htmlFor="">Enter mobile number</label>
                                            <div className="group">
                                                <div className="code">+91</div>
                                                <input type="text" placeholder="Mobile No." />
                                            </div>
                                        </div>
                                        <Link href='/login-otp' className='w-100 text-center'>
                                            <button type="submit">Send OTP</button>
                                        </Link>
                                        <GoogleLogin
                                            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                                            buttonText="Log in with Google"
                                            onSuccess={handleLoginSuccess}
                                            onFailure={handleLoginFailure}
                                            cookiePolicy={'single_host_origin'}
                                            render={renderProps => (
                                                <button
                                                    onClick={renderProps.onClick}
                                                    disabled={renderProps.disabled}
                                                    className='loginWith'
                                                >
                                                    <img src="assets/images/icons/google.svg" alt="" /> Log in with Google
                                                </button>
                                            )}
                                        />
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
    );
};

export default Page;
