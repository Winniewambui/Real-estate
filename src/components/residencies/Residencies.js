import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './ResidenciesStyles.css'
import Data from '../../utilis/slider.json'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'

const Residencies = () => {
  const images = {r1, r2, r3}
  return (
    <section className='Residencies-wrapper'>
    <div className='Residencies-container'>
<div className='r-header'>
  <span className='orangeText'>best choices</span>
  <span className='primayText'>popular Residencies</span>
</div>

<Swiper>
  {
    Data.map((card, index) => (
      <SwiperSlide key={index}>
        <div className='r-card'>
        <img src={images[card.image]} alt='home' className='r-card-img'/>
         {/* price */}
          <span className='secondaryText r-price'>
            <span style={{color: 'orange'}}>$</span>
            <span>{card.price}</span>
          </span>
{/* name and details*/}
          <span className='primaryText'>{card.name}</span>
          <span className='secondaryText'>{card.detail}</span>
        </div>
      </SwiperSlide>
    ))
  }
 </Swiper>
    </div>
    </section>
  )
}

export default Residencies;