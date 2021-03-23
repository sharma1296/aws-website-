import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from "./Components/Footer"
import AdminRoute from './Components/AdminRoute';
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
import ProductListScreen from './Screens/ProductListScreen'
import ProductEditScreen from './Screens/ProductEditScreen';
import OrderListScreen from './Screens/OrderListScreen';
import { Container } from 'react-bootstrap';
import UserListScreen from './Screens/UserListScreen';
import UserEditScreen from './Screens/UserEditScreen';

function App() {
  return (
  <>
  <Router>
 <Header/>
 <main className='py-3'>
   <Container>
 <Route path="/cart/:id?" component={CartScreen}></Route>
 <Route path="/signin" component={SignInScreen}></Route>
 <Route path="/register" component={RegisterScreen}></Route>
 <Route path="/shipping" component={ShippingScreen}></Route>
 <Route path="/payment" component={PaymentScreen}></Route>
 <Route path="/placeorder" component={PlaceOrderScreen}></Route>
 <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
 <Route path="/product/:id" component={ProductScreen} exact></Route>
 <Route path="/order/:id" component={OrderScreen}></Route>
 <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
 <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
   <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
             <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
            <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
           <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
          </Container>
 </main>
 <Footer/>
</Router>
  </>

  )
}

export default App

