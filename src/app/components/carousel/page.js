import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCarousel = () => {
  return (
      <div className='HomeCarousel'>
          <Carousel className='carousel' showArrows={false} autoPlay={true} infiniteLoop={true} interval={2000}>
              <div>
                  <img src="./Images/home1.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                  <img src="./Images/home2.jpg" />
                  {/* <p className="legend">Legend 2</p> */}
              </div>
              <div>
                  <img src="./Images/home3.webp" />
                  {/* <p className="legend">Legend 3</p> */}
              </div>
          </Carousel>
    </div>
  )
}

export default HomeCarousel
