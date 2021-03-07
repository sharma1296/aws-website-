import React from 'react'
import {Link} from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'


function Header() {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
function menu_hidden_left_show(){
  var menu = document.querySelector('.top-title-mobile .wrap .menu-bar .menu-hidden-left')
  var background_black = document.querySelector('.top-title-mobile .wrap .menu-bar .background-black')
  menu.classList.remove('go-left');
  background_black.classList.remove('hidden-back-ground-black');
}

function menu_hidden_left_hidden(){
  var menu = document.querySelector('.top-title-mobile .wrap .menu-bar .menu-hidden-left')
  var background_black = document.querySelector('.top-title-mobile .wrap .menu-bar .background-black')
  menu.classList.add('go-left');
  background_black.classList.add('hidden-back-ground-black');
}

function menu_hidden_left_zoom_out(){
  var menu = document.querySelector('.menu-hidden-left .wrap-menu .father-menu');
  var categories = document.querySelector('.menu-hidden-left .menu_2 .father-menu')
  menu.classList.toggle('zoom-out');
  categories.classList.toggle('zoom-out');
}

/*function settings_zoom_out(){
  var setting = document.querySelector('.menu-hidden-left .wrap-setting .father-setting');
  setting.classList.toggle('zoom-out');
}*/
function drop_list_categories(){
  var list_categories = document.querySelector('.wrap-list-categories');
  list_categories.classList.toggle('hidden');
}
// end effect for menu list categories


// effect show cart-mobile
var cart_mobile = document.getElementById('a14235');
  function show_cart_mobile(){
    cart_mobile.classList.toggle('hidden');
  }
  function register(){
    var register =  document.querySelector('.login674');
    register.classList.toggle('hidden');
  }

  return (
    <>
      <header>
       {/* <!-- menu for computer -->*/}
        <div className="menu-desktop ">
          <div className="top-title container-fluid d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="left col-6">Welcome to MyFreshCart Your Online Grocery Store</div>
                <div className="right col-6">
                  <div className="wishlist"><a href="end">Wishlist (0)</a></div>
                
                
                </div>
              </div>
            </div>
          </div>
        {/*  <!-- menu for mobile -->*/}
          <div className="top-title-mobile d-block d-lg-none container-fluid">
            <div className="wrap">
              <div className="menu-bar"><i onClick={menu_hidden_left_show} className="fas fa-bars"></i>
              {/* <!-- menu hidden left -->*/}
                <div className="menu-hidden-left go-left">
                  <div className="top">
                    <i className="fas fa-user-circle"></i>
                    <i onClick={menu_hidden_left_hidden} className="fas fa-times"></i>
                    <Link to='/login' className="login">Login</Link>
                    <Link to='/register' className="register">Register</Link>
                  </div>
                  <div className="wrap-menu">
                    <div className="father-menu">
                      <ul className="menu">
                        <li onClick={menu_hidden_left_zoom_out} className="title"><i className="fas fa-bars"></i> Menu</li>
                        <a href="end"><li>Beverages</li></a>
                        <a href="end"><li>Dry Food</li></a>
                        <a href="end"><li>Grain Food</li></a>
                        <a href="end"><li>Organic</li></a>
                        <a href="end"><li>Baby  Food</li></a>
                      </ul>
                    </div>
                  </div>

                  <div className="wrap-menu menu_2">
                    <div className="father-menu zoom-out">
                      <ul className="menu">
                        <li onClick={menu_hidden_left_zoom_out} className="title"><i className="fas fa-bars"></i> Categories</li>
                        <a href="end"><li>Home</li></a>
                        <a href="end"><li>Frozen  Item</li></a>
                        <a href="end"><li>Fruit & veges</li></a>
                        <a href="end"><li>Oils & Gheee</li></a>
                        <a href="end"><li>Herbs</li></a>
                        <a href="end"><li>Cola cola</li></a>
                        <a href="end"><li>Mustard Oils</li></a>
                    
                      </ul>
                    </div>
                  </div>

             
                
                </div>
                <div onClick={menu_hidden_left_hidden} className="background-black hidden-back-ground-black"></div>
               {/* <!-- end menu hidden left -->*/}
              
              </div>
            <div className="main-icon"><a href="end"><img src="../Images/review.png" alt=""/></a></div>
            <div className="cart-mobile"><i className="fab fa-opencart" onClick={show_cart_mobile}></i>
              <div className="list-cart-mobile hidden kaksfvhnjksnd" id="a14235">
                <i className="fas fa-shopping-bag"></i>
                <p>No produce in this cart</p>
              </div>
            </div>
            </div>
          </div>
        {/*  <!-- and menu for mobile -->*/}
          <div className="between-menu container-fluid">
            <div className="container">
              <div className="row">
                <div className="left col-3 d-none d-lg-block"><a href="/"><img src="../Images/review.png" alt=""/></a></div>
                <div className="between col-lg-6 col-ld-12">
                  <form action="" method="POST">
                    <input type="text" placeholder="Search our catalog"/>
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
                <div className="right col-3 d-none d-lg-block">
                
                    <i className="far fa-user"></i>
                   {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-option d-none d-lg-block container-fluid">
            <div className="wrap-categories container">
                <div className="categories" onClick={drop_list_categories}><i className="fa fa-bars" id="top-categories" aria-hidden="true"></i>TOP CATEGORIES
                  <div className="wrap-list-categories">
                    <ul className="list-categories">
                      <a href="end"><li>Home</li></a>
                      <a href="end" className="Frozen-item"><li>Frozen  Item <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end" className="fruit-veges"><li>Fruit & veges <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end" className="oils-ghee"><li>Oils & Gheee <i className="fas fa-chevron-right"></i></li></a>
                      <a href="end"><li>Herbs</li></a>
                      <a href="end"><li>Cola cola</li></a>
                      <a href="end"><li>Mustard Oils</li></a>
                   
                    </ul>
                  </div>
               
    
     
                 {/* <!-- end hover for Oils & Gheee -->*/}
                </div>
                <a href="end"><div className="categories go">BEVERAGES</div></a>
                <a href="end"><div className="categories go"> FOOD</div></a>
                <a href="end"><div className="categories go">SKIN CARE</div></a>
                <a href="end"><div className="categories go">HAIR CARE</div></a>
                <a href="end"><div className="categories go">ORGANIC</div></a>
                <div className="categories cart">
                  <div className="cart-gap p31121240 asd" >
                    <i className="fab fa-opencart p31121240"></i>
                    <span className="p31121240" onClick={show_cart_mobile}>Cart(0)</span>
                  </div>
                  <div className="list-cart hidden" id="p31121241">
                    <i className="fas fa-shopping-bag"></i>
                    <p>No produce in this cart</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
       {/* <!-- end menu for computer -->*/}
       {/* <!-- menu for mobile -->*/}
        <div className="menu-mobile d-block d-lg-none"></div>
       {/* <!-- end menu for mobile -->*/}
      </header>
    </>
  )
}

export default Header
