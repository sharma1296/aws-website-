import React ,{useState}from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "../actions/userActions"


function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
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
                            <div className="top-categories-search">
                                <div className="input-group">
                                     <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text"/>
                                        <span className="input-group-btn">
                                <button className="btn btn-success" type="button"><i className="mdi mdi-file-find"></i> Search</button>
                                        </span>
</div>
                                </div>
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
                                    <li className="list-inline-item cart-btn">
                                    <Link onClick={showSidebar}><i className='fas fa-shopping-cart'></i>Cart{cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>
              )}
            </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
</nav>

            {/*cart sidebar*/}

            {/*
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className="cart-sidebar ">
<div className="cart-sidebar-header">
<h5>
My Cart <span className="text-success">(3 item)</span> <a className="float-right" href="#"><i className="fas fa-times"></i>
</a>
</h5>
</div>
<div className="cart-sidebar-body">
<div className="cart-list-product">
<a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
<img className="img-fluid" src="../Images/7.jpg" alt=""/>
<span className="badge badge-success">50% OFF</span>
<h5><a href="#">Product Title Here</a></h5>
<h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
<p className="offer-price mb-0">$450.99 <i className="fas fa-tag"></i> <span className="regular-price">$800.99</span></p>
</div>
<div className="cart-list-product">
<a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
<img className="img-fluid" src="../Images/1.jpg" alt=""/>
<span className="badge badge-success">50% OFF</span>
<h5><a href="#">Product Title Here</a></h5>
<h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
<p className="offer-price mb-0">$450.99 <i className="fas fa-tag"></i> <span className="regular-price">$800.99</span></p>
</div>
<div className="cart-list-product">
<a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
<img className="img-fluid" src="../Images/7.jpg" alt=""/>
<span className="badge badge-success">50% OFF</span>
<h5><a href="#">Product Title Here</a></h5>
<h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
<p className="offer-price mb-0">$450.99 <i className="fas fa-tag"></i> <span className="regular-price">$800.99</span></p>
</div>

</div>
<div className="cart-sidebar-footer">
<div className="cart-store-details">
<p>Sub Total <strong className="float-right">$900.69</strong></p>
<p>Delivery Charges <strong className="float-right text-danger">+ $29.69</strong></p>
<h6>Your total savings <strong className="float-right text-danger">$55 (42.31%)</strong></h6>
</div>
<a href="checkout.html"><button className="btn btn-success btn-lg btn-block text-left" type="button"><span className="float-left"><i className="fas fa-shopping-cart"></i> Proceed to Checkout </span><span className="float-right"><strong>$1200.69</strong> <span className="fas fa-chevron-right"></span></span></button></a>
</div>


            </div>
            </div>
            */}
        </div>
    )
}

export default Header
