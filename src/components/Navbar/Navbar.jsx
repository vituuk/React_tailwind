import React, { useState } from 'react'
import { BiSolidMoon,BiSolidSun } from "react-icons/bi";
import Responsiv from './Responsiv.jsx';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
export const NavLinks=[
  {
    id:"1",
    name:"HOME",
    link:"/#",
  },
  {
    id:"2",
    name:"CARS",
    link:"/#cars",
  },
  {
    id:"3",
    name:"ABOUT",
    link:"/#about",
  },
  {
    id:"4",
    name:"BOOKING",
    link:"/#booking"},
]
const Navbar = ({theme,setTheme}) => {
 const [showMenu,setShowMneu]=useState(false);
 const togglemenu=()=>{
  setShowMneu(!showMenu)
 }
  return (
     <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300'>	
      <div className="container">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className=' hidden md:block'>
            <ul className="flex items-center gap-8">
              { NavLinks.map((data)=>(
           <li key={data.link} className='py-4'>	
            <a className=" inline-block hover:text-primary duration-500 hover:border-primary transition-colors text-lg font-medium" href={data.link}>
            {data.name}
              </a>
            </li>
            
              ))}
            </ul>
            
          </div>
          <div className='flex items-center gap-4'>
            {/* dark mode icons */}
         <div>
          {theme==="dark" ? (
             <BiSolidSun onClick={()=>setTheme("light")}
           className=' text-2xl'/>)
          :( <BiSolidMoon
          onClick={()=>setTheme("dark")}
           className=' text-2xl'/>)}
        
         </div>
          {/* mobil hamburger */}
         <div className=' md:hidden'>
         {
            showMenu?(<HiMenuAlt1 
            onClick={togglemenu} 
            size={30} className='cursor-pointer transition-all'
            />):(<HiMenuAlt3 onClick={togglemenu} 
            size={30} className='cursor-pointer transition-all'/>)

          }
         </div>
          </div>
          
        </div>
      </div>
      <Responsiv showMenu={showMenu} />
     </nav>
  )
}

export default Navbar