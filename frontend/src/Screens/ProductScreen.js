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
                    <div className='md-6'>
                        <div className='product-detail-left'>
                            <div className='product-detail-slider'>
                                <div className='favourite-icon'>
                                    <a href="#"><i className='fas fa-tag'></i></a>
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
