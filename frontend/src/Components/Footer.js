import React from 'react'

function Footer() {
    return (
        <footer>
            {/*top-footer*/}
            <div className='section-padding bg-white border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6'>
                            <div className='feature-box'>
                            <i className="fas fa-truck"></i>
                            <h6>Free & Next Day Delivery</h6>
                            <p>lorem iploc dolc smit 20...</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6'>
                        <div className='feature-box'>
                        <i className="fas fa-shopping-basket"></i>
                            <h6>Free & Next Day Delivery</h6>
                            <p>lorem iploc dolc smit 20...</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6'>
                        <div className='feature-box'>
                        <i className="fas fa-shopping-basket"></i>
                            <h6>Free & Next Day Delivery</h6>
                            <p>lorem iploc dolc smit 20...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*top-footer-end-here*/}

            {/*main-footer*/}
            <div className='section-padding footer bg-white border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3'>
                            <h4 className='mb-5 mt-0'>
                                <a href='end' className='logo'><img src='../Images/logo-footer.png' alt='mylogo'/></a>
                            </h4>
                            <p className='mb-0'><a className='text-dark' href='#' ><i className="fas fa-phone"></i> +91 8725809345</a></p>
                            <p className='mb-0'><a className='text-success' href='#'><i className="fas fa-envelope"></i> support@myfreshcart.in</a></p>
                        
                        </div>
                        <div className='col-lg-2 col-md-2'>
                            <h6 className='mb-4'>My Account</h6>
                            <ul>
                                <li><a href='#'>My Profile</a></li>
                                <li><a href='#'>My Address</a></li>
                                <li><a href='#'>My Orders</a></li>
                                <li><a href='#'>My Wishlist</a></li>
                                <li><a href='#'>Logout</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                        <h6 className='mb-4'>Categories</h6>
                            <ul>
                                <li><a href='#'>My Profile</a></li>
                                <li><a href='#'>My Address</a></li>
                                <li><a href='#'>My Orders</a></li>
                                <li><a href='#'>My Wishlist</a></li>
                                <li><a href='#'>Logout</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-2 col-md-2'>
                        <h6 className='mb-4'>Company</h6>
                            <ul>
                                <li><a href='#'>My Profile</a></li>
                                <li><a href='#'>My Address</a></li>
                                <li><a href='#'>My Orders</a></li>
                                <li><a href='#'>My Wishlist</a></li>
                                <li><a href='#'>Logout</a></li>
                            </ul>
                        </div>
                        <div className='col-lg-3 col-md-3'>
                            <h6 className='mb-3 mt-4'>GET IN TOUCH</h6>
                            <div className='footer-social'>
                                <a href='#' className='btn-instagram'><i className="fab fa-instagram"></i></a>
                                <a href='#' className='btn-whatsapp'><i className="fab fa-whatsapp"></i></a>
                                <a href='#' className='btn-facebook'><i className="fab fa-facebook"></i></a>
                                <a href='#' className='btn-twitter'><i className="fab fa-twitter"></i></a>
                                <a href='#' className='btn-youtube'><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*main-footer-end-here*/}
            {/* bottom footer */}
            <div className='pt-4 pb-4 footer-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'><p>© Copyright 2020 <strong>MyFreshCart.in</strong> All Right Reserved</p></div>
                    </div>
                </div>
            </div>

            {/*bottom footer end here  */}
            
        </footer>
    )
}

export default Footer
