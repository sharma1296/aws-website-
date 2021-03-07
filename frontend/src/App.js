import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router,Route } from "react-router-dom"
import Footer from './Components/Footer'
import Header from './Components/Header'
import cartScreen from './Screens/cartScreen'
import HomeScreen from './Screens/HomeScreen'
import LoginScreen from './Screens/LoginScreen'
import PaymentScreen from './Screens/PaymentScreen'
import ProductScreen from './Screens/ProductScreen'
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingScreen from './Screens/ShippingScreen'

function App() {
  return (
  <>
  <Router>
  <Header/>
  <main className='py-3'>
    <Container>
    <Route path='/shipping' component={ShippingScreen} />
    <Route path='/payment' component={PaymentScreen} />
  <Route path='/login' component={LoginScreen} />
  <Route path='/register' component={RegisterScreen} />
  
  <Route path='/profile' component={ProfileScreen} />
    <Route path='/product/:id' component={ProductScreen} />
    <Route path='/cart/:id?' component={cartScreen} /> 
    <Route path='/' component={HomeScreen} exact />
    </Container>
  </main>
  <Footer/>
  </Router>
  </>

  )
}

export default App

