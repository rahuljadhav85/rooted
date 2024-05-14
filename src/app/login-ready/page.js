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
                    <div className="col-md-6">
                        <form name="" method="post" action="">
                                  <div className="loginBox">
                                      <img src="assets/images/gif/RootedSuccessfullAnimation.gif" alt="" />
                                <div className="heading1 fs-600 text-center" >Ready, Set, Eat! Your Account is Successfully Created.</div>
                               
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