import React from 'react'
//import { Link } from 'react-router-dom';
//import Rating from '../Components/Rating';
import data from '../data';

function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div> Product Not Found</div>;
    }
    return (
        <>
            <div className='product-screen section-padding pt-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='product-detail-left'>
                                <div className='product-detail-slider'>
                                    <div className='favourite-icon'>
                                        <a href="#"><i className='fas fa-tag'></i></a>
                                    </div>
                                    <div className=''>
                                        <img src={product.image} className='img-fluid'></img>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        {/* product details */}
                        <div className='col-md-6'>
                            <div className='product-detail-right'>
                                <span className='badge badge-success'>50% Off</span>
                                <h2>{product.name}</h2>
                                <h6><strong><i className='fas fa-check'></i>Available in </strong>500 gm</h6>
                                <p className='regular-price'><i className='fas fa-tag'></i>M.R.P ${product.regularPrice}</p>
                                <p className='offer-price mb-0'>Discounted price : <span className='text-success'>${product.offerPrice}</span></p>
                                <a href='end'><button type='button' className='btn btn-secondary btn-lg'><i className='fas fa-shopping-cart'></i>Add To Cart</button></a>
                                <div className='short-description'>
                                    <h5>Quick Overview <p className='float-right'>Availability : <span className='badge badge-success'>In Stock</span></p></h5>
                                    <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
</p>
                                    <p class="mb-0"> Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.</p>
                                </div>
                                <h6 className='mb-3 mt-4'>Why Choose MyFreshCart ?</h6>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    <div className='feature-box'>
                            <i className="fas fa-truck"></i>
                            <h6>Free & Next Day Delivery</h6>
                            <p>lorem iploc dolc smit 20...</p>
                            </div>
                                    </div>
                                    <div className='col-md-6'>
                                    <div className='feature-box'>
                            <i className="fas fa-truck"></i>
                            <h6>Free & Next Day Delivery</h6>
                            <p>lorem iploc dolc smit 20...</p>
                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductScreen
