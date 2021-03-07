import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div className="product-container mx-3">
    <div className="pro_items">
        <span className="dis_section">
        <span>{product.discountPercentage}<span className="per_txt">%</span></span>
        <br/>
            off
        </span>
        <span className="food_type_sec"><span className="text-veg"></span></span>
        <div className="pro_detail">
        <Link to={`/product/${product._id}`}>
                <span className="cat-img"> 
                    <img className="product-image-photo" src={product.image} alt="mypic"/>
                </span>
                    <span className="clsgetname">{product.name}</span>
            </Link>
        </div>
     
            <div className="price_box">
             <span className="price">M.R.P ₹<strike>{product.price}</strike></span>
            <span className="final_price"> ₹ {product.finalPrice}</span>
            <span className="save_price">Save ₹ {product.savePrice}</span>
                 </div>
        
              
         
    </div>
</div>
  )
}

export default Product