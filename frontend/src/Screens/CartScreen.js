import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
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
    };
  
    const checkoutHandler = () => {
      props.history.push('/signin?redirect=shipping');
    };
  return (
    <>
     <div className="cart-sidebar">
<div className="cart-sidebar-header">
<h5>
My Cart <span className="text-success">(5 item)</span> <a data-toggle="offcanvas" className="float-right" href="#"><i className="mdi mdi-close"></i>
</a>
</h5>
</div>
<div className="cart-sidebar-body">

{cartItems.map((item) => (
         <div className="cart-list-product">
         <a className="float-right remove-cart" href="#"><i className="mdi mdi-close"></i></a>
        <img className="img-fluid" src={item.image} alt="name"/>
        <span className="badge badge-success">50% OFF</span>
        <h5><a href="#">Product Title Here</a></h5>
        <h6><strong><span className="mdi mdi-approval"></span> Available in</strong> - 500 gm</h6>
        <p className="offer-price mb-0">$450.99 <i className="mdi mdi-tag-outline"></i> <span className="regular-price">$800.99</span></p>
        </div>
            ))}
         
        



<div className="cart-sidebar-footer">
<div className="cart-store-details">
<p>Sub Total <strong className="float-right">$900.69</strong></p>
<p>Delivery Charges <strong className="float-right text-danger">+ $29.69</strong></p>
<h6>Your total savings <strong className="float-right text-danger">$55 (42.31%)</strong></h6>
</div>
</div></div></div>
    </>
  );
}