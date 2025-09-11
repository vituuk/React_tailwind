import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white dark:bg-dark dark:text-white pt-10 pb-10'>
        <div  className="container ">
            <div data-aos="fade-up" className='bg-gray-700 p-5 rounded-lg'>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-serif font-semibold pb-5 text-gray-200'>Let's collaborate on your upcoming car rental venture</h1>
                    <p className='text-2xl font-serif pb-5 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo eos, quod cumque totam nihil voluptates placeat deserunt recusandae doloribus.</p>
                </div>
                <div className=' grid place-items-center'> <a className=' hover:bg-primary/80 duration-300 uppercase inline-block py-2 px-6 tracking-wider text-white  rounded-md font-semibold bg-primary' href="#">Contact</a></div>
            </div>
        </div>
    </div>
  )
}

export default Contact