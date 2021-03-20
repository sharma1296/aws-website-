import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from "./Components/Footer"

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import SignInScreen from './Screens/SignInScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ShippingScreen from './Screens/ShippingScreen'

function App() {
  return (
  <>
  <Router>
 <Header/>
 <main className='py-3'>
 <Route path="/cart/:id?" component={CartScreen}></Route>
 <Route path="/signin" component={SignInScreen}></Route>
 <Route path="/register" component={RegisterScreen}></Route>
 <Route path="/shipping" component={ShippingScreen}></Route>
 <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
 </main>
 <Footer/>
</Router>
  </>

  )
}

export default App

