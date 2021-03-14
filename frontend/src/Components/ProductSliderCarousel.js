import React from 'react';
import Product from '../Components/Product'
import data from "../data"
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};
export default function ProductSliderCarousel() {

   
    return (
<>

<OwlCarousel className="slider-items owl-carousel" {...options}>
    <div className='container'>
        <div className='row'>
        {data.products.map((product) => (
          <div >
            <Product product={product} />
          </div>
        ))}
        </div>
    </div>
                    
                  </OwlCarousel>
</>
)
};

