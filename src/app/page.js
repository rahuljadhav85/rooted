"use client";
import React, { useEffect } from "react";
import Textra from 'react-textra'
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const page = () => {
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 800,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="banner">
        <div className="bg" data-aos="fade-down-left" data-aos-delay="300">
          <img src="assets/images/bg/001.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="details">
                <h1 data-aos="fade-right" data-aos-delay="000">
                  <Textra
                    effect='topDown'
                    data={['Eat. Connect. Celebrate.', 'Lorem. Ipsum. Celebrate.']} />
                  
                </h1>
                <p data-aos="fade-right" data-aos-delay="100">
                  <Textra
                    effect='downTop'
                    data={['With Rooted, indulge in the authenticity of flavours and cuisines, connect with vibrant cultures, celebrate the joy of discovery and sharing wholesome meals.', 'With Rooted, indulge in the authenticity of flavours and cuisines, connect with vibrant cultures, celebrate the joy of discovery and sharing wholesome meals.']} />
                </p>
                
               
                <Link
                  href="subscription-box-size"
                  className="btn1"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Subscribe Now
                  <img src="assets/images/icons/right-arrow.svg" alt="" />
                </Link>
              </div>
            </div>

            <div className="col-md-5 offset-md-1">
              <img
                src="assets/images/banner/banner-img.svg"
                data-aos="fade-left"
                data-aos-delay="100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="howItWorksSection">
        <div className="bg">
          <img src="assets/images/bg/002.svg" alt="" />
        </div>
        <div className="container">
          <div className="row row-gap-5 justify-content-center">
            <div className="col-md-6">
              <h1
                className="heading1 text-center"
                data-aos="fade-up"
                data-aos-delay="000"
              >
                How it Works
              </h1>
              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Embark on a sumptuous journey with Rooted, where every bite is an exploration of India's rich culinary landscapes. 
              </p>
            </div>
          </div>
          <div className="row row-gap-5 mt-5">
            <div className="col-md-4">
              <div className="item" data-aos="fade-right" data-aos-delay="000">
                <img src="assets//images/how-it-works/hiw1.svg" alt="" />
                <div className="details">
                  <h2>
                    Subscribe to
                    <br />
                    any of <span>our plans </span>
                  </h2>
                  <p className="text-center">
                    We encourage 
                    <br />
                    you to be curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item" data-aos="fade-up" data-aos-delay="100">
                <img src="assets//images/how-it-works/hiw2.svg" alt="" />
                <div className="details">
                  <h2>
                    Tailor   
                    <br />
                    your <span>selection</span>
                  </h2>
                  <p className="text-center">
                  to fit your dietary preferences. 
                    <br />
                    Every dish is customizable to ensure
                    <br />
                    it's just right for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item" data-aos="fade-left" data-aos-delay="000">
                <img src="assets//images/how-it-works/hiw3.svg" alt="" />
                <div className="details">
                  <h2>
                    Savour the authentic<br />taste, 
                    
                    <span>wherever you are.</span>
                  </h2>
                  <p className="text-center">
                  Sit back and relax as we deliver a culinary 
                    <br />
                    journey to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rootedCuisines | margin-top-max">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="heading1 text-center"
                data-aos="fade-up"
                data-aos-delay="000"
              >
                Rooted's Cuisines
              </h1>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>
              Far beyond the ordinary, Rooted aims to unearth and bring to your table the true, vibrant flavours of India that often go undiscovered and are not easily available on demand.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <p>
              At Rooted our commitment is to authenticity and richness, ensuring that what reaches you is not just food, but a celebration of India's incredible culinary diversity. 
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col md={12}>
                    <Nav variant="pills" className="nav nav-pills">
                      <Nav.Item>
                        <Nav.Link eventKey="north">
                          <div
                            className="item"
                            data-aos="fade-up"
                            data-aos-delay="000"
                          >
                            <img
                              src="assets/images/cuisines/north.png"
                              alt=""
                            />
                            <div className="details prime">
                              <h2>Odysseys Of The North</h2>
                              <p>
                                At Rooted, we believe in exploring beyond the
                                roti, naan, sarso da saag, and butter
                                chicken....
                              </p>
                              <div className="icon">
                                <svg
                                  width="22"
                                  height="14"
                                  viewBox="0 0 22 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L10.64 11L2 2"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="maratha">
                          <div
                            className="item"
                            data-aos="fade-up"
                            data-aos-delay="100"
                          >
                            <img
                              src="assets/images/cuisines/maratha.png"
                              alt=""
                            />
                            <div className="details second">
                              <h2>Maratha Culinary Heritage</h2>
                              <p>
                                Experience the bold and earthy flavours of the
                                Vidarbha region, the subtle sweetness...
                              </p>
                              <div className="icon">
                                <svg
                                  width="22"
                                  height="14"
                                  viewBox="0 0 22 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L10.64 11L2 2"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="southen">
                          <div
                            className="item"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            <img
                              src="assets/images/cuisines/southen.png"
                              alt=""
                            />
                            <div className="details prime">
                              <h2>Southern Spice Symphony</h2>
                              <p>
                                Imagine savouring the rich, layered complexity
                                of Chettinad cuisine, the earthy comforts...
                              </p>
                              <div className="icon">
                                <svg
                                  width="22"
                                  height="14"
                                  viewBox="0 0 22 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L10.64 11L2 2"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="gujarati">
                          <div
                            className="item"
                            data-aos="fade-up"
                            data-aos-delay="300"
                          >
                            <img
                              src="assets/images/cuisines/gujrathi.png"
                              alt=""
                            />
                            <div className="details second">
                              <h2>Gujarati Gourmet Tapestry</h2>
                              <p>
                                Embark on a culinary exploration with the
                                Gujarati Culinary Landscape where...
                              </p>
                              <div className="icon">
                                <svg
                                  width="22"
                                  height="14"
                                  viewBox="0 0 22 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L10.64 11L2 2"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="bengali">
                          <div
                            className="item"
                            data-aos="fade-up"
                            data-aos-delay="400"
                          >
                            <img
                              src="assets/images/cuisines/bengali.png"
                              alt=""
                            />
                            <div className="details prime">
                              <h2>Bengali Flavour Symphony</h2>
                              <p>
                                Witness first-hand, the Bengali Jhol Jhaal,
                                where stories are rooted in spices, sweets
                                and...
                              </p>
                              <div className="icon">
                                <svg
                                  width="22"
                                  height="14"
                                  viewBox="0 0 22 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L10.64 11L2 2"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col md={12}>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="north">
                        <div className="box prime position-relative">
                          <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                            At Rooted, we believe in exploring beyond the familiar horizon of roti, naan, sarso da saag, and butter chicken. While these classics hold a special place in our hearts, the culinary treasure trove of Northern India is brimming with undiscovered gems that await your palate. Our mission is to take you on a journey through the lesser-known, yet equally mesmerising flavours of the North. 
                            </div>
                          </div>
                          <div className="row mt-5 justify-content-center">
                            <div className="col-md-9">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={75}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: ".north-next",
                                  prevEl: ".north-prev",
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="rootedCuisines-prev swiper-button-prev north-prev">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="rootedCuisines-next swiper-button-next north-next">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="maratha">
                        <div className="box second position-relative">
                          <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                            Beyond the popular pav bhaji, tambda pandra rasa, fish thali and vada pav, a treasure trove of flavours is waiting to be explored. With Rooted, embark on a culinary voyage through the heart of Maharashtra, from the coastal Konkan to the rugged Sahyadris, uncovering dishes that are a testament to the state's vibrant culture and traditions. Experience the bold and earthy flavours of the Vidarbha region, the subtle sweetness infused in the cuisine of the Peshwas, and the fiery zest of Kolhapuri dishes. 
                            </div>
                          </div>
                          <div className="row mt-5 justify-content-center">
                            <div className="col-md-9">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={75}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: ".maratha-next",
                                  prevEl: ".maratha-prev",
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="rootedCuisines-prev swiper-button-prev maratha-prev">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="rootedCuisines-next swiper-button-next maratha-next">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="southen">
                        <div className="box prime position-relative">
                          <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                              At Rooted, we invite you to delve deeper than the familiar idli, sambar and neer dosa, to uncover the hidden jewels of South Indian cuisine.
                              We're passionate about introducing you to the lesser-known yet incredibly flavorful dishes that define the essence of Southern India. Imagine savouring the rich, layered complexity of Chettinad cuisine, the earthy comforts of Udupi's vegetarian fare and the delicate seafood wonders of the Malabar coast.

                            </div>
                          </div>
                          <div className="row mt-5 justify-content-center">
                            <div className="col-md-9">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={75}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: ".southen-next",
                                  prevEl: ".southen-prev",
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="rootedCuisines-prev swiper-button-prev southen-prev">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="rootedCuisines-next swiper-button-next southen-next">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="gujarati">
                        <div className="box second position-relative">
                          <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                            Embark on a culinary exploration with the Gujarati Tapestry where the ethos of simplicity meets the essence of lavishness in every dish. Rooted invites you to delve beyond the familiar to discover the rich, multifaceted flavours of Gujarat—a state where the culinary landscape is as diverse as its heritage. Each dish, though simple in its ingredients, is lavish in its preparation and presentation, embodying the spirit of Gujarati hospitality where every guest is treated like royalty.
                            </div>
                          </div>
                          <div className="row mt-5 justify-content-center">
                            <div className="col-md-9">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={75}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: ".gujarati-next",
                                  prevEl: ".gujarati-prev",
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="rootedCuisines-prev swiper-button-prev gujarati-prev">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="rootedCuisines-next swiper-button-next gujarati-next">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="bengali">
                        <div className="box prime position-relative">
                          <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                            Bengali cuisine is a celebration of contrasts—where the subtle sweetness of coconut milk meets the fiery zest of mustard oil, and the delicate flavours of freshwater fish are enhanced by robust spices. It's a culinary tradition that mirrors the vibrant, diverse life of Bengal itself, from the bustling streets of Kolkata to the tranquil shores of the Sundarbans. The Rooted menu moves beyond Jhol-Jhaal and is a tribute to the culinary artistry and vibrant culture of Bengal. 

                            </div>
                          </div>
                          <div className="row mt-5 justify-content-center">
                            <div className="col-md-9">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={75}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: ".bengali-next",
                                  prevEl: ".bengali-prev",
                                }}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 2,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                  },
                                }}
                              >
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                  <div className="item">
                                    <img
                                      src="assets/images/cuisines/mughlai-1.png"
                                      alt=""
                                    />
                                    <h3>Mughlai</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                              <div className="rootedCuisines-prev swiper-button-prev bengali-prev">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="rootedCuisines-next swiper-button-next bengali-next">
                                <svg
                                  width="16"
                                  height="24"
                                  viewBox="0 0 16 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                                    stroke-width="4.35544"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
          <div
            className="row mt-5 pb-5 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="000"
          >
            
            <Link href="/subscription-box-size" class="btn1" data-aos="fade-up" data-aos-delay="000">Subscribe Now <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
          </div>
        </div>
      </section>
      

      <section className="whyRooted | padding-block-max">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="heading1 text-center" data-aos="fade-up" data-aos-delay="000">Why Rooted?</h1>
                        <p className="text-center" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="d-flex align-items-start">
                            
                            <div className="tab-content" data-aos="fade-right" data-aos-delay="000" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-Heartfelt" role="tabpanel" aria-labelledby="v-pills-Heartfelt-tab" tabindex="0">
                                    <div className="box prime">
                                        <div className="num">01</div>
                                        <img src="assets/images/why-rooted/01.png" alt="" />
                                        <div className="details">
                                            <h2>Heartfelt Connection to Heritage</h2>
                                            <p>Do you remember the taste straight from your grandma's kitchen? Rooted is dedicated to reviving those very recipes that have been passed down through generations, ensuring that every bite reconnects you with your roots.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Repetition" role="tabpanel" aria-labelledby="v-pills-Repetition-tab" tabindex="0">
                                    <div className="box second">
                                        <div className="num">02</div>
                                        <img src="assets/images/why-rooted/02.png" alt="" />
                                        <div className="details">
                                            <h2>Say goodbye to Repetition</h2>
                                            <p>With Rooted, embark on a diverse culinary journey that promises a new adventure with every meal each day. Our ever-changing menu ensures that your taste buds are always treated to something exciting, eliminating the need to ponder over what to eat next.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-Decisions" role="tabpanel" aria-labelledby="v-pills-Decisions-tab" tabindex="0">
                                    <div className="box prime">
                                        <div className="num">03</div>
                                        <img src="assets/images/why-rooted/03.png" alt="" />
                                        <div className="details">
                                            <h2>Simplifying Your Daily Decisions</h2>
                                            <p>For the busy corporate professional, deciding what to eat instructing the cook on what to prepare can be an added daily hassle. Rooted takes this burden off your shoulders by delivering you meticulously craed, diverse meals directly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                    <div className="box second">
                                        <div className="num">04</div>
                                        <img src="assets/images/why-rooted/04.png" alt="" />
                                        <div className="details">
                                            <h2>Preserving Our Culinary Identity</h2>
                                            <p>In an era where fast food and food colonialism threaten to dilute our individual culinary identity. At Rooted, we're not just serving meals; we're safeguarding the rich traditions and food values that define us all. With Rooted, you not only enjoy a meal; you participate in a movement to preserve and celebrate our diverse culinary heritage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-Heartfelt-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Heartfelt" type="button" role="tab" aria-controls="v-pills-Heartfelt" aria-selected="true" data-aos="fade-left" data-aos-delay="000">
                                    <div className="item">
                                        <div className="num">01</div>
                                        <h2>Heartfelt Connection to Heritage</h2>
                                        <p>Do you remember the taste straight from your grandma's kitchen?</p>
                                    </div>
                                </button>
                                <button className="nav-link" id="v-pills-Repetition-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Repetition" type="button" role="tab" aria-controls="v-pills-Repetition" aria-selected="false" data-aos="fade-left" data-aos-delay="100">
                                    <div className="item">
                                        <div className="num">02</div>
                                        <h2>Say goodbye to Repetition</h2>
                                        <p>With Rooted, embark on a diverse culinary journey that promises a new adventure with every meal each day. </p>
                                    </div>
                                </button>
                                <button className="nav-link" id="v-pills-Decisions-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Decisions" type="button" role="tab" aria-controls="v-pills-Decisions" aria-selected="false" data-aos="fade-left" data-aos-delay="150">
                                    <div className="item">
                                        <div className="num">03</div>
                                        <h2>Heartfelt Connection to Heritage</h2>
                                        <p>Do you remember the taste straight from your grandma's kitchen?</p>
                                    </div>
                                </button>
                                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" data-aos="fade-left" data-aos-delay="200">
                                    <div className="item">
                                        <div className="num">04</div>
                                        <h2>Preserving Our Culinary Identity</h2>
                                        <p>In an era where fast food and food colonialism threaten to dilute our individual culinary identity.</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    
                  <Link href="/subscription-box-size" class="btn1" data-aos="fade-up" data-aos-delay="000">Subscribe Now <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
                </div>
            </div>
        </section>

      <section className="testimonials | padding-block-max">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                className="heading1 text-center"
                data-aos="fade-up"
                data-aos-delay="000"
              >
                What OUR Community Says About Us
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
                tristique. Non ligula tristique ut ut libero sit convallis
              </p>
            </div>
          </div>
          <div
            className="row position-relative justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-md-10">
              <Swiper
                modules={[Navigation]}
                spaceBetween={75}
                slidesPerView={1}
                navigation={{
                  nextEl: ".review-next",
                  prevEl: ".review-prev",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="text">
                      <h2>“</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Elit sociis
                        consequat venenatis justo sed aenean amet lacus.Lorem
                        ipsum dolor sit amet consectetur. Elit sociis consequat
                        venenatis justo.
                      </p>
                    </div>
                    <div className="name">
                      <img
                        src="assets/images/clients/001.png"
                        className="pic"
                        alt=""
                      />
                      Sheela
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="testimonials-prev swiper-button-prev review-prev">
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8435 2.90613L3.26154 12.4184L12.8435 21.199"
                    stroke-width="4.35544"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="testimonials-next swiper-button-next review-next">
                <svg
                  width="16"
                  height="24"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13257 2.90613L12.7145 12.4184L3.13257 21.199"
                    stroke-width="4.35544"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
