 import React,{useEffect, useState} from 'react'
 import Navbar from './components/Navbar/Navbar'
 import Hero from './components/Hero/Hero'
 import About from './components/about/About';
 import Services from './components/Services/Services';
 import CarList from './components/CarList/CarList';
 import Testimoral from './components/Testimorial/Testimoral';
 import AppStore from './components/AppStoreBanner/AppStore';
 import Contact from './components/Contact/Contact';
 import AOS from 'aos'
 import 'aos/dist/aos.css';
import Footer from './components/Footer/Footer';




 
 
 const App = () => {
  //DARK MODE feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ?
    localStorage.getItem("theme") :"light"//dark is change when photo light and dard
  );
  const element=document.documentElement;
  useEffect(()=>{
     if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
     }
      else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
     }
    },[theme])

    // Aos initailization
React.useEffect(()=>{
 AOS.init({
  offset:100,
  duration:800,
  easing:'ease-in-sine',
  delay:100,
});
AOS.refresh();
},[])
   return (
     <div>
      <Navbar theme={theme} setTheme={setTheme}/>
    <Hero themee={theme}/>
    <About />
     <Services/>
     <CarList/>
     <Testimoral/>
     <AppStore/>
     <Contact/>
     <Footer/>
     </div>
   )
 }
 
 export default App