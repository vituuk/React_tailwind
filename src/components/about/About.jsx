import React from 'react'
import carPng from '../../assets/car5.png'
const About = () => {
  return (
<div className=" dark:bg-dark bg-slate-100 dark:text-white duration-300">
<div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
       <div  >
        <img
        data-aos="slide-right"
        data-aos-duration="1500"
        
        src={carPng} alt="" className=' sm:scale-105 sm:-translate-x-11 max-h-[200px]  '/>
      {/* scale-105 for zoom photo */}
      </div>
       <div>
        <div className='space-y-5 sm:p-16 pb-6'>
            <h1
            data-aos="fade-up"
            className='text-3xl sm:text-4xl font-bold font-serif'>About Us</h1>
            <p data-aos="fade-up">Lorem ipsum dolor elit. Rem, quidem? Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p data-aos="fade-up">Lorem ipsum s quo suscipit laborum illum?</p>
            <button data-aos="fade-up" className='button-outline'>
                Get Started
            </button>
        </div>
       </div>
        </div>
    </div>
</div>
  )
}

export default About