import React from 'react'
import Product from '../Components/Product'
import data from "../data"

import TopCarousel from '../Components/TopCarousel'







function HomeScreen() {
  
    return (
        <>
          <TopCarousel/>  
          {/*product slider */}
          <div className='product-item-slider section-padding'>
            <div className='container'>
              <div className='section-header'>
                <h5 className='heading-design-h5'>Top Saver Today <span className='badge badge-primary'>20% off</span>   <a href='#' className='float-right text-secondary'>View All</a></h5>
             
              </div>
     <div className='row'>
     {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
     </div>

              </div>

            
      
       

   
 
            </div>



          {/* offer product*/}
          <div className='offer-product'>
            <div className='container'>
              <div className='row no-gutters'>
                <div className='col-md-6'><a href='#'><img className='img-fluid' src='../Images/offer.jpg' atl='offer-product'/></a></div>
                <div className='col-md-6'><a href='#'><img className='img-fluid' src='../Images/offer2.jpg' alt='offer-product'/></a></div>
              </div>
            </div>
          </div>

{/*best offer view*/}
<div className='product-item-slider section-padding'>
<div className='product-container container'>
<div className='section-header'>
                <h5 className='heading-design-h5'>Best Offers View <span className='badge badge-primary'>20% off</span> <a href='#' className='float-right text-secondary'>View All</a></h5>
               
              </div>
            
    </div>
    </div>


        </>

    )
}

export default HomeScreen
