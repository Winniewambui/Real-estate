import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'


const SliderButtons = () => {
    const swiper = useSwiper();
    
    return (
      <div className='r-button'>
        <button className='leftBtn' onClick={()=> swiper.slidePrev()}><FaAngleLeft />    
  </button>
        <button className='rightBtn' onClick={()=> swiper.slideNext()}><FaAngleRight />
  </button>
  
      </div>
  )
}

export default SliderButtons


