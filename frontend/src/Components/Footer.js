import React from 'react'
import {Link } from "react-router-dom"

function Footer() {

function  drop_footer_categories(){
  var wrap_footer = document.querySelector('wrap-footer-categories')
  wrap_footer.classList.toggle('show')

}
  return (
    <>
        <footer>
        <div className="top-footer">
          <div className="wrap-top-footer container">
            <div className="wrap-content row">
              <div className="title col-lg-6">
                <div className="icon"><i className="far fa-envelope"></i></div>
                <div className="wrap-text">
                  <p className="title">SIGN UP FOR NEWSLETTER</p>
                 <p className="sub-title">To subscribe Our Newsletter & Get coupons.</p>
                </div>
              </div>
              <div className="form-subscribe col-lg-6">
                <div className="input-wrap">
                  <input type="email" placeholder="Your email address"/>
                </div>
                <div className="btn-subscribe"><span>Subscribe</span></div>
              </div>
            </div>
          </div>
        </div>
     
     
        <div className="main-footer container">
            <div className="slide-footer">
              <div className="owl-carousel owl-theme row">
      
                <div className="item col-6 col-lg-3"><div className="content">
                  <div className="wrap-content">
                    <div className="icon"><img src="../Images/befunky_layer1.png" alt=""/></div>
                    <h2 className="title">BEST PRICES & OFFERS</h2>
                    <ul>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Get 20% extra</li>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Exclusive Deal</li>
                    </ul>
                  </div>
                </div>
                </div>
                <div className="item col-6 col-lg-3"><div className="content">
                  <div className="wrap-content ">
                    <div className="icon"><img src="../Images/befunky_layer2.png" alt=""/></div>
                    <h2 className="title">BEST PRICES & OFFERS</h2>
                    <ul>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Get 20% extra</li>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Exclusive Deal</li>
                    </ul>
                  </div>
                </div></div>
                <div className="item col-6 col-lg-3"><div className="content">
                  <div className="wrap-content ">
                    <div className="icon"><img src="../Images/befunky_layer3.png" alt=""/></div>
                    <h2 className="title">BEST PRICES & OFFERS</h2>
                    <ul>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Get 20% extra</li>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Exclusive Deal</li>
                    </ul>
                  </div>
                </div></div>
                <div className="item col-6 col-lg-3"><div className="content">
                  <div className="wrap-content">
                    <div className="icon"><img src="../Images/befunky_layer4.png" alt=""/></div>
                    <h2 className="title">BEST PRICES & OFFERS</h2>
                    <ul>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Get 20% extra</li>
                      <li><i className="fa fa-check" aria-hidden="true"></i>Exclusive Deal</li>
                    </ul>
                  </div>
                </div></div>
     </div>
    
    

              </div>
         
         
          
    
            
            <div className="bottom-main row">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <div className="logo">
                    <a href="end"><img src="../Images/logo12.png" alt=""/></a>
                  </div>
                  <p className="store-des">Veniaquisostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                  <ul className="list-icon">
                    <li className="wrap-icon"><a href="end"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="wrap-icon"><a href="end"><i className="fab fa-twitter"></i></a></li>
                    <li className="wrap-icon"><a href="end"><i className="fab fa-youtube"></i></a></li>
                    <li className="wrap-icon"><a href="end"><i className="fab fa-google-plus-g"></i></a></li>
                    <li className="wrap-icon"><a href="end"><i className="fab fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2  col-6 list-infor view-list">
                <div className="wrap-content">
                  <h3 className="title" onClick={drop_footer_categories}>MY ACCOUNT <i className="d-block d-lg-none fas fa-angle-right"></i></h3>
                  <div className='wrap-footer-categories hidden'>
                  <ul className='wrap-footer'>
                    <li><Link to='/profile'><i className="fas fa-chevron-right"></i> Personal info</Link></li>
                    <li><Link to='/profile'><i className="fas fa-chevron-right"></i> Orders</Link></li>
                    <li><Link to='/shipping'><i className="fas fa-chevron-right"></i> Addresses</Link></li>
              
                  </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-6 list-infor view-list">
                <div className="wrap-content">
                  <h3 className="title">PRODUCTS <i className="d-block d-lg-none fas fa-angle-right"></i></h3>
                  <ul className='wrap-footer'>
                    <li><a href="end"><i className="fas fa-chevron-right"></i> About us</a></li>
                  
                    <li><a href="end"><i className="fas fa-chevron-right"></i> New products</a></li>
                    <li><a href="end"><i className="fas fa-chevron-right"></i> Best sales</a></li>
              
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-6 list-infor view-list">
                <div className="wrap-content">
                  <h3 className="title">OUR COMPANY <i className="d-block d-lg-none fas fa-angle-right"></i></h3>
                  <div className='wrap-footer-categories'>
                  <ul className='wrap-footer'>
                    <li><a href="end"><i className="fas fa-chevron-right"></i> Delivery</a></li>
                    <li><a href="end"><i className="fas fa-chevron-right"></i> Legal Notice</a></li>
                    <li><a href="end"><i className="fas fa-chevron-right"></i> Sitemap</a></li>
                  
                  </ul>
                </div>
                </div>
              </div>
              <div className="col-lg-3 col-6  contact-us list-infor view-list">
                <div className="wrap-content">
                  <h3 className="title">CONTACT US <i className="d-block d-lg-none fas fa-angle-right"></i></h3>
                  <div className='wrap-footer-categories'>
                  <ul className='wrap-footer'>
                    <li><a href="end"><i className="fas fa-map-marker-alt"></i><p>Calista Wise 7292 Str, Sample State. Sample city</p></a></li>
                    <li><a href='end'><i className="fas fa-mobile-alt"></i>(+33) 1 23 45 67 89</a></li>
                    <li><a href="end"><i className="far fa-envelope"></i>demo@demo.com</a></li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            </div>
        
        <div className="bottom-footer container">
          <div className="row">
            <div className="left col-lg-12 text-center">
              <p>copyright @ MyFreshCart 2021</p> 
              
            </div>
         
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
