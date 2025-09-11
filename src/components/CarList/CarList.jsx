import Aos from 'aos'
import React from 'react'
import BMW from '../../assets/bmw1.png'
import Ford from '../../assets/ford.png'
import Range from '../../assets/range1.png'
const CarLists=[
    {
        name:"BMW UX",
        price:"50000",
        image:BMW,
        AosDelay:"0",
    },
    {
        name:"Ford F-150",
        price:"70000",
        image:Ford,
        AosDelay:"500",
    },
    {
        name:"Range",
        price:"70000",
        image:Range,
        AosDelay:"1000",
    },
]
const CarList = () => {
  return (
    <div className='pb-24 pt-5  dark:bg-dark dark:text-white'>
        <div className="container">
            {/* heading */}
            <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-semibold font-serif'>Lorem ipsum dolor.</h1>
        <p data-aos="fade-up" className='pt-4 text-sm pb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cum suscipit aspernatur? Consequuntur, porro rerum, placeat, quasi harum commodi neque in nesciunt . Architecto, quibusdam iusto.</p>
       <div>
        {/* car listing cards */}
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            CarLists.map((car)=>(
           <div data-aos="fade-up" data-aos-delay={car.AosDelay} className='   group bg-white text-dark rounded-lg shadow-lg duration-300 p-4 hover:bg-primary hover:text-white ' key={car.name}>
             <div className='w-full h-[120px]'>
            <img src={car.image} alt="" className=' duration-700 object-contain w-full h-[120px] sm:group-hover:translate-x-8 group-hover:translate-x-11' />
            </div>
            <div className='space-y-[-2px]'>
                <h1 className='font-semibold'>{car.name}</h1>
               <div className='flex justify-between items-center'>
                 <p className='hover:text-dark'>${car.price}</p>
                 <a href="#">Detail</a>
                 </div>
                 
            </div>
            
           </div>
           
            ))
          }
        </div>

       </div>
       <div className='grid place-items-center mt-8'>
        <button data-aos="fade-up" data-aos-delay="1000"  className=' button-outline'>Get Started</button>
       </div>
        </div>
        
    </div>
  )
}

export default CarList