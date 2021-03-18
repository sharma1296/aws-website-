import React, { useEffect } from 'react';
import Product from '../Components/Product'
import LoadingBox from '../Components/LoadingBox';
import Message from '../Components/Message';
import TopCarousel from '../Components/TopCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';







function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
    return (
        <>
          <TopCarousel/>  
          {/*product slider */}
          <div className='product-item-slider section-padding'>
            <div className='container'>
              <div className='section-header'>
                <h5 className='heading-design-h5'>Top Saver Today <span className='badge badge-primary'>20% off</span>   <a href='#' className='float-right text-secondary'>View All</a></h5>
             
              </div>
              {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}

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
