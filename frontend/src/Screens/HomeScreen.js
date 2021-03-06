
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <>
    <div className='container'>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col xs={6}sm={6} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      </div>
    </>
  )
}

export default HomeScreen