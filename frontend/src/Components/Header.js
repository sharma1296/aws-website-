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

            <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html"> <img src="../Images/logo.png" alt="logo" /> </a>
                


                    <div className="navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                            <div className="top-categories-search">
                                <div className="input-group">
                                     <input className="form-control" placeholder="Search products in Your City" aria-label="Search products in Your City" type="text"/>
                                        <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button"><i className="mdi mdi-file-find"></i> Search</button>
                                        </span>
</div>
                                </div>
                            </div>
                            <div className="my-2 my-lg-0">
                                <ul className="list-inline main-nav-right">
                                    <li className="list-inline-item">
                                        <a href="#" data-target="#bd-example-modal" data-toggle="modal" className="btn btn-link"><i className="fas fa-user"></i> Login/Sign Up</a>
                                    </li>
                                    <li className="list-inline-item cart-btn">
                                        <a href="#"  className="btn btn-link border-none"><i className="fas fa-shopping-cart"></i> My Cart <small className="cart-value">5</small></a>
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
