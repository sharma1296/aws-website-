import React from 'react'

function Product() {
    return (
        <>
        <div className='owl-item'>
         <div className='item'>
             <div className='product'>
                 <a href='#'>
                     <div className='product-header'>
                         <span className='badge badge-success'>50% OFF </span>
                     <img className='img-fluid' src='../Images/1.jpg' alt='1img'></img>
                     <span className='veg text-success fas fa-circle'></span></div>
                     <div className='product-body'>
                         <h5>Product Title here</h5>
                         <h6><strong><span className='mdi mdi-approval'></span>Available in </strong>- 500 gm</h6>
                     
                     </div>
                     <div className='product-footer'>
                         <button className='btn btn-secondary btn-sm float-right' type='button'>
                         <i className="fas fa-shopping-cart"></i> Add To Cart
                         </button>
                         <p className='offer-price mb-0'>$ 450.99 <i className="fas fa-tag"></i><br/>
                         <span className='regular-price'>$800.99</span></p>
                     </div>
                 </a>
             </div>
         </div>
         </div>
        </>
    )
}

export default Product
