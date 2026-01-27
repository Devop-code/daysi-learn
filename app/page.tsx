import React from 'react'
import Header from './components/layouts/Header';
import HeroSection from './components/sections/HeroSection';
import Brand from './components/sections/Brand';
import About from './components/sections/About';
import Service from './components/sections/Service';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
     <Header/>
     <HeroSection/>
     <Brand/>
     <About/>
     <Service/>
     <Portfolio/>
     <Testimonials/>
     <Footer/>
    </div>
  )
}
export default page;