import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart,removeFromCart} from '../actions/cartActions';
import Message from '../Components/Message';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
      // delete action
      dispatch(removeFromCart(id));
    };
  
    const checkoutHandler = () => {
      props.history.push('/signin?redirect=shipping');
    };
  return (
    <>
   <div className='section-padding cart-page'>
     ]<div className='container'>
       <div className='row'>
         <div className='col-md-12'>
     <div className='card mt-2'>

     <h5 className ="card-header">My Cart<span class="text-success float-right">(5 item)</span></h5>


{cartItems.length === 0 ? (
          <Message>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </Message>
        ) : (
<div className='card-body pt-0 pr-0 pl-0 pb-0'>
{cartItems.map((item) => (
           <div className='cart-list-product'>
           <Link className="float-right remove-cart"  onClick={() => removeFromCartHandler(item.product)}><i className="fas fa-times"></i></Link>
           <img className="img-fluid" src={item.image} alt=""></img>
           <span className="badge badge-success">{item.discountPercentage}% OFF</span>
           <h5><a href="#">{item.name}</a></h5>
           <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - {item.size}gm</h6>
           <p className="offer-price mb-0">${item.offerPrice} <i className="fas fa-tag"></i> <span className="regular-price">$ {item.regularPrice}</span></p>
           </div>

))}

         
         </div>
        )}
         <div className='card-footer cart-sidebar-footer'>

         <div className="card-footer cart-sidebar-footer">
<div className="cart-store-details">
<p>Sub Total <strong class="float-right">$900.69</strong></p>
<p>Delivery Charges <strong className="float-right text-danger">+ $29.69</strong></p>
<h6>Your total savings <strong className="float-right text-danger">$55 (42.31%)</strong></h6>
</div>
<a href="checkout.html"><button className="btn btn-secondary btn-lg btn-block text-left"     onClick={checkoutHandler}  disabled={cartItems.length === 0} type="button"><span className="float-left"><i class="mdi mdi-cart-outline"></i> Proceed to Checkout </span><span class="float-right"><strong>$1200.69</strong> <span class="mdi mdi-chevron-right"></span></span></button></a>
</div>
         </div>
       </div>
     </div>
         </div> 
       </div>
     </div>
 
    </>
  );
}