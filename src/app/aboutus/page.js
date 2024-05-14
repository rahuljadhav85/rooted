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
            <div className="bg"><img src="/assets/images/bg/001.svg" alt="" /></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="details">
                            <h1 data-aos="fade-right" data-aos-delay="000">About Us</h1>
                            <p data-aos="fade-right" data-aos-delay="100">At Rooted, we're more than just a meal delivery service; we're a movement towards Elavating you daily dining experience. In a world where the food industry is increasingly leaning towards fast, industrialised options, we stand out by bringing the soulful essence of traditional cooking back to the forefront. Our mission is to provide not just meals, but experiences that are rich in heritage, diversity, and authenticity.</p>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6 ">
                        <img src="/assets/images/banner/about.svg" data-aos="fade-left" data-aos-delay="100" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="ourValueSection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="heading1 text-center" data-aos="fade-up" data-aos-delay="000">Our Values</h1>
                    </div>
                </div>
                <div className="row row-gap-5 mt-5">
                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="000">
                        <div className="item">
                            <img src="/assets/images/values/inclusive.jpg" alt="" className="bg inclusive" />
                            <div className="details prime">
                                <h2>Inclusive</h2>
                                <p>Rooted champions inclusivity by offering a diverse menu that caters to a wide range of dietary needs, preferences, and cultural tastes. Our goal is to create a dining experience where everyone feels cherished and excited to explore the vast world of flavours together.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="item">
                            <img src="/assets/images/values/sustainable.jpg" alt="" className="bg sustainable" />
                            <div className="details second">
                                <h2>Sustainable</h2>
                                <p>We are Rooting to committed to maximise a positive environmental impact.  Our eco-friendly packaging solutions are designed to reduce plastic waste, promote recycling, to ensure that you enjoy guilt-free meals and contribute to a healthier planet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="item">
                            <img src="/assets/images/values/sharing.jpg" alt="" className="bg sharing" />
                            <div className="details prime">
                                <h2>Sharing</h2>
                                <p>At Rooted, we believe in cultivating connections through food and foster a sense of community. Our meals are to be shared, encourage conversations, create moments that bring us closer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="item">
                            <img src="/assets/images/values/reconnecting.jpg" alt="" className="bg reconnecting" />
                            <div className="details second">
                                <h2>Reconnecting with Food</h2>
                                <p>We want you to know the origin of your food, understand its cultural significance, and appreciate the hands that prepared it. By fostering a deeper connection with food, we encourage mindful eating practices, greater appreciation for culinary arts, and mostly a profoundly meaningful dining experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section className="margin-top-max">
            <div className="container">
                <div className="row row-gap-4 align-items-center">
                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="000">
                        <img src="/assets/images/img1.svg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="heading1" data-aos="fade-left" data-aos-delay="000">What We Stand For</h1>
                        <p data-aos="fade-left" data-aos-delay="100">In this fast-paced world, good food has clearly taken a backseat. At Rooted, we stand for more than just good food. We're dedicated to creating a dining experience that delights, educates, and inspires, all while upholding our commitment to sustainability and ethical sourcing. Our goal is to make it easy and enjoyable for you to explore new cuisines, discover new flavours, and enjoy high-quality, nutritious meals every day.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="team | padding-block-max">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="heading1 text-center" data-aos="fade-up" data-aos-delay="000">Our Founders</h1>
                    </div>
                    <div className="col-md-6" data-aos="fade-right" data-aos-delay="000">
                        <p>Rooted in unwavering dedication and a shared passion for our mission, our exceptional team forms the cornerstone of our success. With diverse backgrounds and unparalleled expertise, </p>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
                        <p>each member plays a pivotal role in bringing our vision to life. Together, we combine years of experience and innovative thinking to serve you better, every step of the way.</p>
                    </div>
                </div>
                <div className="row row-gap-4 mt-5 justify-content-center">
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="000">
                        <div className="box">
                            <div className="overlay"> </div>
                            <img src="/assets/images/founder/001.jpg" alt="" className="bg" />
                            <div className="details prime">
                                <h2>Saurabh Wadkar</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sagittis velit, ac faucibus tortor. Proin massa eros, lacinia sed enim vitae, elementum dictum sapien. Cras vitae turpis sit amet massa faucibus sollicitudin sit amet eget quam. Ut consequat non sem vel condimentum. Nam venenatis tempus dignissim. Suspendisse fermentum pretium vestibulum. Suspendisse eget scelerisque ligula, vel pellentesque ipsum. Proin tempor vitae quam non eleifend.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="box">
                            <div className="overlay"> </div>
                            <img src="/assets/images/founder/001.jpg" alt="" className="bg" />
                            <div className="details second">
                                <h2>Neha Shah</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sagittis velit, ac faucibus tortor. Proin massa eros, lacinia sed enim vitae, elementum dictum sapien. Cras vitae turpis sit amet massa faucibus sollicitudin sit amet eget quam. Ut consequat non sem vel condimentum. Nam venenatis tempus dignissim. Suspendisse fermentum pretium vestibulum. Suspendisse eget scelerisque ligula, vel pellentesque ipsum. Proin tempor vitae quam non eleifend.</p>
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