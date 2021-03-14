import React from 'react'

function Header() {
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

        <nav className='navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu'>
            <div className='container-fluid'>
                <a href='end' className='navbar-brand'>
                    <img src='../Images/logo.png' alt='logo'/>
                </a>
            <div className='navbar-collapse' id='navbar-NavDropdown'>
                <div className='navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main'>
                    <div className='top-categories-search'>
                        <div className='input-group'>
                            <span className='input-group-btn categories-dropdown'>
                                <select className='form-control-select select2-hidden-accessible'>
                                    <option selected='selected'>Your selected</option>
                                    <option value='0'>New Delhi</option>
                                    <option value='2'>Bengaluru</option>
                                    <option value='3'>Hyderabad</option>
                                    <option value='4'>kolkata</option>
                                </select>
                            </span>
                            <input className='forn-control' placeholder='search Product here' type='text'/>
                            <span className='input-group-btn'>
                                <button className='btn btn-secondary' type='button'>
                                <i className="mdi fas fa-search-location"></i>search
                                </button>
                            </span>

                        </div>
                        </div>  

                </div>
                <div className='my-2 my-lg-0'>
                    <ul className='list-inline main-nav-right'>
                        <li className='list-inline-item'>
                            <a href='#' className='btn btn-link'><i className="mdi far fa-user"></i>Login/sign up</a>
                        </li>
                        <li className='list-inline-item cart-btn'>
                            <a href="#" className='btn btn-link border-none'>
                            <i className="mdi fas fa-shopping-cart"></i>My Cart <small className='cart-value'>5</small>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            </div>

        </nav>

            
            
        </div>
    )
}

export default Header
