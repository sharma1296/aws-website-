import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom"
import Header from './Components/Header'
import Footer from "./Components/Footer"

import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
  <>
  <Router>
 <Header/>
 <main className='py-3'>
 <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
 </main>
 <Footer/>
</Router>
  </>

  )
}

export default App

