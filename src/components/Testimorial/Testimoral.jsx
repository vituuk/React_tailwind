import React from 'react'
import Photo from "../../assets/photo.jpg";
import Star from '../../assets/star2.png';
const testimoralData=[
    {
      name:"Vitu",
      image:"",
       star:Star,
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae neque autem ",
      aosDelay:"0",
    },
    {
        name:"Vitu",
        image:"",
        star:Star,
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae neque autem ",
        aosDelay:"500",
      },
      {
        name:"Vitu",
        image:"",
        star:Star,
        description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quae neque autem ",
        aosDelay:"1000",
      },
]
const Testimoral = () => {
  return (
    <div className=' dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className='container '>
       {/* header */}
       <div className=' space-y-4 pb-8'>
        <p data-aos="fade-up" className=' text-3xl text-center font-semibold sm:text-4xl font-serif'>What Our Clients Say About Us</p>
        <p data-aos="fade-up" className=' text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis?</p>
       </div>
       {/* card section */}
       <div className='text-black dark:text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
       {
          testimoralData.map((data)=>(
        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.name} className=' group bg-gray-200 p-5 rounded-lg' >
             <div className=' grid place-items-center '>
                <img src="src/assets/photo.jpg" className="border-2 border-white w-20 h-20 rounded-full duration-300 group-hover:translate-y-2"  alt="" />
             </div>
             <div className='text-center p-2'>⭐⭐⭐⭐⭐⭐</div>
             <div className='text-black font-serif'>{data.description}</div>
             <div className='text-center text-primary border-3 border-black text-lg'>Detail</div>
        </div>
          ))
       } 
       
    
       </div>
        </div>
    </div>
  )
}

export default Testimoral