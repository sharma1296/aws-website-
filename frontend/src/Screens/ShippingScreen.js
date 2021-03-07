import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../Components/CheckoutSteps'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
const [fullName,setFullName]=useState(shippingAddress.fullName)
  const [address, setAddress] = useState(shippingAddress.address)
  const [street, setStreet] = useState(shippingAddress.street)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const [city, setCity] = useState(shippingAddress.city)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address,street, phone, city,fullName }))
    history.push('/payment')
  }

  return (
    <FormContainer>
         <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
      <Form.Group controlId='fullname'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter FullName'
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='street'>
          <Form.Label>Street / Locality</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter street'
            value={street}
            required
            onChange={(e) => setStreet(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone No.</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Phone No'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen