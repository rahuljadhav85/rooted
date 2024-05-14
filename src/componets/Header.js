'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'


const Header = () => {
    const pathname = usePathname()
  return (
      <>
        <header id="topHead">
            <div className="container">
                <div className="wrapper">
                    <button className="mobileToggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                        <img src="/assets/images/icons/menu.svg" alt="" />
                      </button>
                      <Link href="/" className="logo"><img src="/assets/images/logo/logo.svg" alt="" /></Link>

                    <div className="navigationWrapper">
                        <ul className="desktopMenu onlyDesktop">
                            <li className={`link ${pathname === '/' ? 'active' : ''}`}>
                                <Link href="/"><span>Home</span></Link>
                            </li>
                            <li className={`link ${pathname === '/aboutus' ? 'active' : ''}`}>
                                <Link href="/aboutus"><span>About Us</span></Link>
                            </li>
                            <li className={`link ${pathname === '/corporate' ? 'active' : ''}`}>
                                <Link href="/corporate"><span>For Corporate</span></Link>
                            </li>
                        </ul>

                        <div className="accountNav">
                            <Link href="/subscription-box-size" className="btn1">Subscribe</Link>
                            <Link href="/login" className="btn2">Login</Link>

                        </div>
                        <div className="btn-group loggedIN">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="profile">J</div>
                                <div className="name">John Doe</div> <img src="/assets/images/icons/account-arrow.svg" className="arrow" alt="" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><Link href="/personal-details" className="dropdown-item" type="button">Edit Profile</Link></li>
                                <li><Link href="/subscription-details" className="dropdown-item" type="button">Subscription details</Link></li>
                                <li><Link href="/subscription-billing-history" className="dropdown-item" type="button">Billing History</Link></li>
                                <li><Link href="" className="dropdown-item" type="button">Log out <img src="/assets/images/icons/logout.svg" alt="" /></Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </header>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="mobileMenuLabel"><img src="/assets/images/logo/logo.svg" alt="" /></h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body mobile-menu">
                <ul>
                    <li>
                        <Link href="/"><span>Home</span></Link>
                    </li>
                    <li>
                        <Link href="/aboutus"><span>About Us</span></Link>
                    </li>
                    <li>
                        <Link href="/corporate"><span>For Corporate</span></Link>
                    </li>
                    <li>
                        <Link href=""><span>Subscribe</span></Link>
                    </li>
                </ul>
            </div>
        </div>
      </>
  )
}

export default Header