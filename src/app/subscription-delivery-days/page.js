"use client";
import React, { useEffect } from "react";
import Link from 'next/link'
import OrderSummery from '@/componets/OrderSummery'

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
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li>Subscription</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <section className="margin-bottom-900 mt-3">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-md-8">
                        <div className="row row-gap-4">
                            <div className="col-12">
                                <div className="subBox">
                                    <div className="head">Box Size <Link href="subscription-box-size#boxsize" className="edit">Edit</Link></div>
                                    <div className="content">
                                        <div className="row row-gap-4">
                                            <div className="col-md-12">
                                                <div className="boxSelected">
                                                    <div className="box">
                                                        <img src="assets/images/subscribe/box.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Large Size Tiffin Box
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12" id="DietType">
                                <div className="subBox ">
                                    <div className="head">Diet Type <Link href="subscription-diet-type#DietType" className="edit">Edit</Link></div>
                                    <div className="content">
                                        <div className="row row-gap-4">
                                            <div className="col-md-12">
                                                <div className="boxSelected">
                                                    <div className="box">
                                                        <img src="assets/images/subscribe/veg.png" alt="" />
                                                    </div>
                                                    <div className="title">
                                                        Vegetarian Diet
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                
                            <div className="col-12" id="Cuisine">
                                <div className="subBox ">
                                    <div className="head">Cuisine <Link href="subscription-cuisine#Cuisine" className="edit">Edit</Link></div>
                                        <div className="content">
                                            <div className="row row-gap-4">
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Odysseys Of The North
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Maratha Culinary Heritage
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="boxSelected">
                                                        <div className="icon">
                                                            <img src="assets/images/subscribe/veg-icon.png" alt="" />
                                                        </div>
                                                        <div className="title">
                                                            Southern Spice Symphony
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-12" id="DeliveryDays">
                                <div className="subBox ">
                                    <div className="head">Delivery Days</div>
                                    <div className="content">
                                        
                                        <form action="" className="personalDetails">
                                            <div className="row row-gap-4">
                                                <div className="col-md-12">
                                                    <label for="" className="fs-300 text-center fw-medium">Select Weekend Type</label>
                                                    <select name="" id="">
                                                        <option value="">All Saturday</option>
                                                        <option value="">1st & 3rd Saturday</option>
                                                        <option value="">2nd & 4th Saturday</option>
                                                    </select>
                                                </div>
                                                
                                            </div>
                                        </form>
                                        <div className="row row-gap-4 mt-5 justify-content-center">
                                            <div className="col-md-12">
                                                <h3 className="fs-500 text-center fw-bold">March 2024</h3>
                                            </div>
                                            <div className="col-md-12">
                                                
                                                <div className="calendar">
                                                    <div className="grid-7-by-1">
                                                        <div className="title">Sun</div>
                                                        <div className="title">Mon</div>
                                                        <div className="title">Tue</div>
                                                        <div className="title">Wed</div>
                                                        <div className="title">Thu</div>
                                                        <div className="title">Fri</div>
                                                        <div className="title">Sat</div>
                                                    </div>
                                                    <div className="grid-7-by-5">
                                                        <div className="item disabled">
                                                            <div>27</div>
                                                        </div>
                                                        <div className="item disabled">
                                                            <div>29</div>
                                                        </div>
                                                        <div className="item">
                                                            <div>1</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>2</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>3</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>4</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>5</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item holiday">
                                                            <div>6</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>7</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>8</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>9</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>10</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>11</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>12</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item holiday">
                                                            <div>13</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>14</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>15</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>16</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>17</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>18</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>19</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item holiday">
                                                            <div>20</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>21</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item holiday">
                                                            <div>22</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>23</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>24</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>25</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>26</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item holiday">
                                                            <div>27</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon2.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>28</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>29</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>30</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div>31</div>
                                                            <div className="icon">
                                                                <img src="assets/images/icons/calendar-icon.svg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="item disabled">
                                                            <div>1</div>
                                                        </div>
                                                        <div className="item disabled">
                                                            <div>2</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                              <div className="row mt-5 justify-content-center">
                                               <Link href="subscription-personal-details#PersonalDetails" className="btn1">Confirm <img src="assets/images/icons/right-arrow.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="note">
                                        <div className="icon">
                                            <img src="assets/images/icons/note.svg" alt="" />
                                        </div>
                                        <span>Note: Dates marked in yellow are your Non-Working Days and Public Holidays</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Personal Details</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="subBox ">
                                    <div className="head b0">Payment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <OrderSummery />
                    </div>
                </div>
            </div>
            
        </section>
        </div>
      </>
  )
}

export default page