import React from 'react'
import carPng from '../../assets/car4.png'
import yellowCarPng from '../../assets/car3.png'
const Hero = ({themee}) => {
  return (
    <div className=' dark:bg-black  dark:text-white duration-300 -z-20 relative'>
      <div className='container min-h-[620px] flex'>
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div 
          data-aos="zoom-in"
          data-aos-duration="1500"
          className='order-1 sm:order-2'>
            <img src={
              themee=== "dark" ?  carPng:yellowCarPng} alt="" className=' relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]'/>
          </div>
          <div className='order-2 sm:order-1 space-y-5 sm:pr-32' >
            <p
            data-aos="fade-up"
           
            className='text-primary text-2xl font-serif'>Effortless</p>
            <h1 data-aos="fade-right" data-aos-duration="1500" className='text-5xl lg:text-7xl font-semibold font-serif'>Car Rental</h1>
            <p data-aos="zoom-in" data-aos-duration="1500"
             >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Officia a iusto exercitationem, provident 
               rem nobis deserunt reiciendis dicta officiis!  </p>
               <button data-aos="fade-up" data-aos-duration="1500" className='button-outline hover:bg-primary/80'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero