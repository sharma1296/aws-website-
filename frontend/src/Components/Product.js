import React from 'react'
import { SwiperSlide } from 'swiper/react';
import data from '../data';

export default function Product(props) {
    const {product} =props
    return (
        <>

             <div className='product'>
                 <a href={`/product/${product._id}`}>
                     <div className='product-header'>
                         <span className='badge badge-success'>{product.discountPercentage}% OFF </span>
                     <img className='img-fluid' src={product.image} alt='1img'></img>
                     <span className='veg text-success fas fa-circle'></span>
                     </div>
                     <div className='product-body'>
                         <h5>{product.name}</h5>
                         <h6><strong><span className='mdi mdi-approval'></span>Available in </strong>- {product.size} </h6>
                     
                     </div>
                     <div className='product-footer'>
                         <button className='btn btn-secondary btn-sm float-right' type='button'>
                         <i className="fas fa-shopping-cart"></i> Add To Cart
                         </button>
                         <p className='offer-price mb-0'>$ {product.offerPrice} <i className="fas fa-tag"></i><br/>
                         <span className='regular-price'>$ {product.regularPrice}</span></p>
                     </div>
                 </a>
             </div>

         
    
        </>
    )
}


