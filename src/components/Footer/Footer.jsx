import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
const FooterLinks=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
]
const Footer = () => {
  return (
    <div className='text-white dark:bg-dark dark:text-white'>
        <div className="container">
            <div  className='grid grid-cols-1 place-items-center  sm:grid-cols-2 md:grid-cols-4 p-6 bg-gray-600'>
                {/* company */}
                 
                <div className=''>
                    <h1 className=' font-bold sm:text-4xl text-3xl  sm:text-left place-items-center grid hover:text-primary duration-300'>Car Rental</h1>
 
                <br />
                <div className=' grid place-items-center gap-3'>
                <div className='flex gap-2'>
                    <FaLocationArrow/>
                    <p>Noida ,Uttar Pradesh</p>
                </div>
                <div className='flex gap-2'>
                    <FaMobileAlt/>
                    <p>+885 98 22 33</p>
                </div>
                </div>
                {/* social handle */}
                <div className='grid place-items-center pt-5'>
                <div className=' flex gap-3 '>
                    <a href="#" className='text-3xl hover:text-primary duration-300'>
                        <FaInstagram/>
                    </a>
                    <a href="#" className='text-3xl hover:text-primary duration-300'>
                        <FaFacebook/>
                    </a>
                    <a href="#" className='text-3xl hover:text-primary duration-300'>
                        <FaLinkedin/>
                    </a>
                </div>
                </div>
                </div>
                {/* navlinks */}
                <div className='  pt-5 sm:pt-1 '>
                <div className=''>
               <div>
                <div>
                    <h1>Important Links</h1>
                    <ul>
                        {
                            FooterLinks.map((data)=>(
                                 <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                    <span>&#11162;</span>
                                    <a href={data.link}>{data.title}</a>
                                 </li>
                            ))
                        }
                    </ul>
                </div>
               </div>
                </div>
               
                 
                </div>
                <div className='pt-5 sm:pt-1 '>
               <div className=''>
                <div>
                    <h1>Important Links</h1>
                    <ul>
                        {
                            FooterLinks.map((data)=>(
                                 <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                    <span>&#11162;</span>
                                    <a href={data.link}>{data.title}</a>
                                 </li>
                            ))
                        }
                    </ul>
                </div>
               </div>
                </div>
                <div className='pt-7 sm:pt-1 '>
               <div className=''>
                <div>
                    <h1>Important Links</h1>
                    <ul>
                        {
                            FooterLinks.map((data)=>(
                                 <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                                    <span>&#11162;</span>
                                    <a href={data.link}>{data.title}</a>
                                 </li>
                            ))
                        }
                    </ul>
                </div>
               </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer