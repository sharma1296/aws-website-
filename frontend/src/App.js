import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Route } from "react-router-dom"
import Footer from './Components/Footer'
import Header from './Components/Header'
import cartScreen from './Screens/cartScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import OrderListScreen from './Screens/OrderListScreen'
import OrderScreen from './Screens/orderScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import ProductEditScreen from './Screens/ProductEditScreen'
import ProductListScreen from './Screens/ProductListScreen'
import ProductScreen from './Screens/ProductScreen'
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingScreen from './Screens/ShippingScreen'
import UserEditScreen from './Screens/UserEditScreen'
import userListScreen from './Screens/userListScreen'

function App() {
  return (
  <>
  <Router>
  <Header/>
  <main className='py-3'>
    <Container>
    <Route path='/order/:id' component={OrderScreen} />
    <Route path='/shipping' component={ShippingScreen} />
    <Route path='/payment' component={PaymentScreen} />
    <Route path='/placeorder' component={PlaceOrderScreen} />   
  <Route path='/login' component={LoginScreen} />
  <Route path='/register' component={RegisterScreen} />
  
  <Route path='/profile' component={ProfileScreen} />
    <Route path='/product/:id' component={ProductScreen} />
    <Route path='/cart/:id?' component={cartScreen} /> 
    <Route path='/admin/userlist' component={userListScreen} />
    <Route path='/admin/user/:id/edit' component={UserEditScreen} />
    <Route path='/admin/productlist' component={ProductListScreen} />
    <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
    <Route path='/admin/orderlist' component={OrderListScreen} />
    <Route path='/' component={HomeScreen} exact />
    </Container>
  </main>
  <Footer/>
  </Router>
  </>

  )
}

export default App

