import React, { useEffect, useState } from 'react';
import {Link, Route} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../actions/userActions"
import SearchBox from './SearchBox';

import LoadingBox from "./LoadingBox"
import Message from './Message';


function Header(props) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
   
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };

  

    
 
    return (

        <div className='header'>
            {/* top -header */}
            <div className='navbar-top bg-success pt-2 pb-2'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <a href='end' className='mb-0 text-white'>20% Cashback for new users | code <strong>
                                <span className='text-light'>OFFERS13 <span className="fas fa-tags"></span></span>
                            </strong></a>
                        </div>
                    </div>
                </div></div>
            {/* nav -bar */}

            <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"> <img src="../Images/logo.png" alt="logo" /> </a>
                

                    <div className="navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                        <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
                            <div className="my-2 my-lg-0">
                                <ul className="list-inline main-nav-right">
                                    <li className="list-inline-item">
                                    {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>

                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

                                    </li>
                                    {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
                                    <li className="list-inline-item cart-btn">
                                    <Link to='/cart'><i className='fas fa-shopping-cart'></i>Cart{cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>
              )}
            </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
</nav>


        </div>
       
    )
}

export default Header
