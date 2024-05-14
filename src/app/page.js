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
                  With Rooted, indulge in the authentic Indian flavours and
                  cuisines, connect with vibrant food cultures, celebrate the
                  joy of  sharing wholesome meals.
                </p>
                <Link
                  href="subscription-box-size"
                  className="btn1"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Subscribe Now{" "}
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
                Embark on a sumptuous journey with Rooted, where every bite is
                an exploration of India's rich culinary landscapes.
              </p>
            </div>
          </div>
          <div className="row row-gap-5 mt-5">
            <div className="col-md-4">
              <div className="item" data-aos="fade-right" data-aos-delay="000">
                <img src="assets//images/how-it-works/hiw1.svg" alt="" />
                <div className="details">
                  <h2>
                    Subscribe To
                    <br />
                    Any Of <span>Our Plans</span>
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
                    Your <span>Selection</span>
                  </h2>
                  <p className="text-center">
                    Every meal plan is
                    <br />
                    uniquely curated for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item" data-aos="fade-left" data-aos-delay="000">
                <img src="assets//images/how-it-works/hiw3.svg" alt="" />
                <div className="details">
                  <h2>
                    Savour The
                    <br />
                    <span>Authentic Taste</span>
                  </h2>
                  <p className="text-center">
                    Sit back and relax as we deliver a culinary
                    <br />
                    journey to your workplace.
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
                Rooted’s Cuisines
              </h1>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>
                Far beyond the ordinary, Rooted unearths and brings to the table
                the true, vibrant flavours of India that often go undiscovered
                and/or are not easily available on demand.
              </p>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <p>
                At Rooted our commitment is to authenticity and richness,
                ensuring that what comes is not just food, but a celebration of
                India's incredible culinary diversity.
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
                              While the classics hold a special place in our
                              hearts, the culinary treasure trove of Northern
                              India is brimming with undiscovered gems that
                              await your palate.
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
                              While the classics hold a special place in our
                              hearts, the culinary treasure trove of Northern
                              India is brimming with undiscovered gems that
                              await your palate.
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
                              While the classics hold a special place in our
                              hearts, the culinary treasure trove of Northern
                              India is brimming with undiscovered gems that
                              await your palate.
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
                              While the classics hold a special place in our
                              hearts, the culinary treasure trove of Northern
                              India is brimming with undiscovered gems that
                              await your palate.
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
                              While the classics hold a special place in our
                              hearts, the culinary treasure trove of Northern
                              India is brimming with undiscovered gems that
                              await your palate.
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
            <a href="" className="btn1">
              Subscribe Now{" "}
              <img src="assets/images/icons/right-arrow.svg" alt="" />
            </a>
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
