import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
      <>
          <footer id='footer'>
            <div className="container">
                <div className="topSection">
                    <div className="row justify-content-between row-gap-5">
                        <div className="col-md-3">
                            <div className="info">
                                <img src="assets/images/logo/logo-light.svg" className="logo" alt="" />
                                <p className="mt-4">
                                Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. 
                                </p>
                              </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footerHead">USEFUL LINKS</h2>
                            <div className="row row-gap-5">
                                <div className="col-md-6">
                                    <div className="linkWrapper">
                                        <Link href="#" className="singleLink">Why Rooted</Link>
                                        <Link href="#" className="singleLink">About us</Link>
                                        <Link href="#" className="singleLink">Contact Us</Link>
                                        <Link href="#" className="singleLink">Login</Link>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="linkWrapper">
                                        <Link href="#" className="singleLink">T&C</Link>
                                        <Link href="#" className="singleLink">FAQ’s</Link>
                                        <Link href="#" className="singleLink">Privacy Policy</Link>
                                        <Link href="#" className="singleLink">Certification</Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footerHead">Subscribe Now</h2>
                            <div className="subscribeForm">
                                <form action="">
                                    <input type="text" placeholder="Enter email" />
                                    <button><img src="assets/images/icons/send.svg" alt="" /></button>
                                </form>
                            </div>
                            <h2 className="footerHead pt-3">Contact Us</h2>
                            <ul className="social">
                                <li><a href="http://" target="_blank"><img src="assets/images/social/instagram.svg" alt="" /></a></li>
                                <li><a href="http://" target="_blank"><img src="assets/images/social/fb.svg" alt="" /></a></li>
                                <li><a href="http://" target="_blank"><img src="assets/images/social/youtube.svg" alt="" /></a></li>
                                <li><a href="http://" target="_blank"><img src="assets/images/social/linkedin.svg" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottomSection">
                    <p>© 2024 Rooted</p>
                    
                </div>

            </div>
        </footer>
        </ >
  )
}

export default Footer