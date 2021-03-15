import React from 'react'
import Product from '../Components/Product'
import data from "../data"
import TopCarousel from '../Components/TopCarousel'
import Carousel from "react-elastic-carousel";


const breakPoints = [
  { width: 480, itemsToShow: 2 },
  { width: 550, itemsToShow: 4, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  {width:992,itemsToShow:3},
  { width: 1200, itemsToShow: 4 }
];
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
            
              <Carousel breakPoints={breakPoints}>
          
        {data.products.map((product) => (
          <div key={product._id}  >
            <Product product={product} />
          </div>
        ))}
       
    </Carousel>
   
 
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
              <Carousel>
             
        {data.products.filter(product=>product.offerPrice <10).map(filteredProduct => (
          <div >
            <Product product={filteredProduct} key={filteredProduct.id} />
          </div>
        ))}
      
    </Carousel>
    </div>
    </div>


        </>

    )
}

export default HomeScreen
