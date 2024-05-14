'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
    useEffect(() => {
      AOS.init({
        // initialise with other settings
        duration : 800
      });
      AOS.refresh();
    }, []);
  return (
      <>
      <div id="main">
          <section className="banner">
            <div className="bg"><img src="assets/images/bg/001.svg" alt="" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details">
                            <h1 data-aos="fade-right" data-aos-delay="000">For Corporates</h1>
                            <p data-aos="fade-right" data-aos-delay="100">At Rooted, we understand that the heart of a thriving business lies in its people and the culture it fosters. Our bespoke culinary service is designed to enrich your workplace, offering a unique dining experience that benefits not just the individual but the entire organisation. Here's how partnering with Rooted can transform your business environment:</p>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6 " data-aos="fade-left" data-aos-delay="100">
                        <img src="assets/images/banner/for-corporate.svg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        
        <section>
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="000">
                        <img src="assets/images/for-corporate/001.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="heading2" data-aos="fade-left" data-aos-delay="000">Curtails Operating <span>Costs<br/>of Cafeterias</span></h1>
                        <p className="mt-4 pe-md-5" data-aos="fade-left" data-aos-delay="100">Managing an in-house cafeteria can be a significant financial and operational burden. Partnering with Rooted offers a cost-effective alternative, eliminating the need for extensive cafeteria operations while still providing your employees with high-quality, diverse dining options.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="margin-top-max">
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6 d-flex justify-content-center order-md-2" data-aos="fade-left" data-aos-delay="000">
                        <img src="assets/images/for-corporate/002.svg" alt="" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h1 className="heading2" data-aos="fade-right" data-aos-delay="000">Bolsters Creativity<br/>by <span>Reducing Food Monotony</span></h1>
                        <p className="mt-4 pe-md-5" data-aos="fade-right" data-aos-delay="100">Rooted breaks the cycle of food monotony with its ever-changing menu of global cuisines stiulating the senses and inspiring creativity. When employees look forward to meal times as an opportunity to explore new tastes and dishes, it translates into a more dynamic and innovative approach to their work.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="margin-top-max">
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6 d-flex justify-content-center" data-aos="fade-right" data-aos-delay="000">
                        <img src="assets/images/for-corporate/003.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="heading2" data-aos="fade-left" data-aos-delay="000">Boosts Inter-Cultural<br/><span>Respectability Amongst<br/>Employees</span></h1>
                        <p className="mt-4 pe-md-5" data-aos="fade-left" data-aos-delay="100">At Rooted, our diverse menu offerings serve as a gateway to different cultures, promoting a deeper understanding and respect amongst employees.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="margin-top-max">
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6 d-flex justify-content-center order-md-2" data-aos="fade-left" data-aos-delay="000">
                        <img src="assets/images/for-corporate/004.svg" alt="" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h1 className="heading2" data-aos="fade-right" data-aos-delay="000">Increases Post- <span>Lunch<br/>Productivity</span></h1>
                        <p className="mt-4 pe-md-5" data-aos="fade-right" data-aos-delay="100">Rooted meals are balanced to ensure that they are satisfying without being overly heavy, keeping your team energised and focused, ready to tackle the challenges of the afternoon with renewed vigour</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="padding-block-max">
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6 d-flex" data-aos="fade-right" data-aos-delay="000">
                        <img src="assets/images/for-corporate/005.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="heading2" data-aos="fade-left" data-aos-delay="000">Encourages  <span>Interaction</span></h1>
                        <p className="mt-4 pe-md-5" data-aos="fade-left" data-aos-delay="100">Rooted shared dining experiences encourage interaction, sparking conversations that might not happen in the regular course of a workday.<br/>
                        Rooted is more than a meal delivery service; it's a partner in building a more vibrant, productive, and cohesive workplace. By partnering with Rooted, you're investing in the well-being of your employees, the culture of your organisation, and the future of your business</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bottomForm | padding-block-900">
            <div className="container">
                <div className="row row-gap-4">
                    <div className="col-md-6 pe-md-5" data-aos="fade-right" data-aos-delay="000">
                        <div className="pe-md-4">
                            <h1 className="heading1">Lets discuss how<br/>we can make your<br/>work environment a<br />better place.</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis </p>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1" data-aos="fade-left" data-aos-delay="100">
                        <form action="" >
                            <div className="row row-gap-3">
                                <div className="col-12">
                                    <label for="">Name</label>
                                    <input type="text" placeholder="Enter Full Name" />
                                </div>
                                <div className="col-12">
                                    <label for="">Email</label>
                                    <input type="text" placeholder="Enter Email" />
                                </div>
                                <div className="col-12">
                                    <label for="">Phone Number</label>
                                    <input type="text" placeholder="Enter Phone Number" />
                                </div>
                                <div className="col-12 mt-4">
                                    <button className="btn1">Submit</button>
                                </div>
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