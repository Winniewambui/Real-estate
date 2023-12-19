import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import './ResidenciesStyles.css'
import Data from '../../utilis/slider.json'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'
 import { FaAngleLeft } from "react-icons/fa";
 import { FaAngleRight } from "react-icons/fa";
 import { sliderSettings } from '../../utilis/common'

const Residencies = () => {
  const images = {r1, r2, r3}
  return (
    <section className='Residencies-wrapper'>
    <div className='Residencies-container'>
    
<div className='R-Header'>
<div className='r-header'>
  <span className='orangeText'>best choices</span>
  <span className='primayText'>popular Residencies</span>
</div>
  <div className='swiperbtns'>
  <FaAngleLeft className='leftBtn'/>    
  <FaAngleRight className='rightBtn'/>
    </div>
</div>

<Swiper {...sliderSettings}>
{/* <div className='r-cards-container'> */}
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
  {/* </div> */}
 </Swiper>
    </div>
    </section>
  )
}

export default Residencies;