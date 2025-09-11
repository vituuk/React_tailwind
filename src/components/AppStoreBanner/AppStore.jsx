import React from 'react'
import Science from '../../assets/banner.jpg'
import PlayStore from '../../assets/playstore3.png'
import AppStoree from '../../assets/appstore6.png'
const banner={
        backgroundImage:`url(${Science})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        height:'100%',
        width:'100%',

    }

const AppStore = () => {
  return (
  <div className=' dark:bg-dark dark:text-white pb-14'>
      <div className=' container'>
        <div data-aos="zoom-in" data-aos-delay="200" className='text-black   min-h-[200px] sm:min-h-[400px]   sm:grid sm:place-items-center rounded-xl p-7' style={banner}>
           <div>
            <div>
                <div className='pb-5'>
              <h1 data-aos="fade-up" className='text-center text-3xl sm:text-4xl font-semibold font-serif pb-3'>Get Started with our app</h1>
              <p data-aos="fade-up" className='text-center font-serif sm:px-20'>Lorem ipsum dolor tetur adipisicing elit. Eveniet similique ipsam rem nostrum omnis, magnam commodi est maxime.</p>
              </div>
             <div className='flex justify-center h-[60px] items-center' data-aos="fade-up">
                <a  href="#">
                    <img src={PlayStore} className='max-w-[130px]  sm:max-w-[120px] md:max-w-[200px] h-[64%]' alt="" />
                </a>
                <a  href="#">
                    <img src={AppStoree} className='max-w-[130px] sm:max-w-[120px] md:max-w-[200px] h-[100%]' alt="" />
                </a>
             </div>
            </div>
           </div>
        </div>
    </div>
  </div>
  )
}

export default AppStore