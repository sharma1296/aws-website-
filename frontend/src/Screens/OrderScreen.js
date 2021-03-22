import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card,Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import LoadingBox from '../Components/LoadingBox'
import { detailsOrder, payOrder } from '../actions/orderActions';

const OrderScreen = ({ match,history }) => {
  const orderId = match.params.id

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

const orderPay=useSelector((state)=>state.orderPay)
const {loading:loadingPay}= orderPay
const userSignin = useSelector((state) => state.userSignin);
const { userInfo } = userSignin;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.offerPrice * item.qty, 0)
    )
  }
  const paidHandler =(paymentResult)=>{
    dispatch(payOrder(orderId,paymentResult))
   }
    
      useEffect(() => {
        if (!userInfo) {
          history.push('/signin')
        }  })
      useEffect(() => {
        dispatch(detailsOrder(orderId))
      }, [dispatch,orderId])

      return loading ? (
        <LoadingBox />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Container>
          <div className='order-id'>
          <h5>Order {order._id}</h5>
          </div>
          <Row>
            <Col md={8}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong> {order.shippingAddress.fullName}
                  </p>
                  <p>
                    <strong>Email: </strong>{' '}
                    <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                  </p>
                  <p>
                    <strong>Address:</strong>
                    {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                    {order.shippingAddress.postalCode},{' '}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <Message variant='success'>
                      Delivered on {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant='danger'>Not Delivered</Message>
                  )}
                </ListGroup.Item>
    
                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>
                    <strong>Method: </strong>
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <Message variant='success'>Paid on {order.paidAt}</Message>
                  ) : (
                    <Message variant='danger'>Not Paid</Message>
                  )}
                </ListGroup.Item>
    
                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {order.orderItems.length === 0 ? (
                    <Message>Order is empty</Message>
                  ) : (
                    <ListGroup variant='flush'>
                      {order.orderItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Col>
                            <Col>
                              <Link to={`/product/${item.product}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={4}>
                              {item.qty} x ${item.offerPrice} = ${item.qty * item.offerPrice}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h2>Order Summary</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Items</Col>
                      <Col>${order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>${order.taxPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  {loadingPay && <LoadingBox/>}
                  {userInfo &&
                    userInfo.isAdmin &&
                  
                 (
                      <ListGroup.Item>
                        <Button
                          type='button'
                          className='btn btn-block'
                          onClick={paidHandler}
                        >
                          Mark As Paid
                        </Button>
                      </ListGroup.Item>
                    )}
                
                  
                   
                </ListGroup>
    
              
              </Card>
            </Col>
          </Row>
          </Container>
        </>
      )
    }
    
    export default OrderScreen