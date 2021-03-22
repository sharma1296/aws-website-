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
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import OrderHistoryScreen from './Screens/OrderHistoryScreen'
import ProfileScreen from './Screens/ProfileScreen'
import PrivateRoute from './Components/PrivateRoute'

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
 <Route path="/payment" component={PaymentScreen}></Route>
 <Route path="/placeorder" component={PlaceOrderScreen}></Route>
 <Route path="/product/:id" component={ProductScreen}></Route>
 <Route path="/order/:id" component={OrderScreen}></Route>
 <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
 <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
 </main>
 <Footer/>
</Router>
  </>

  )
}

export default App

