import React from 'react'
import Header from './components/layouts/Header';
import HeroSection from './components/sections/HeroSection';
import Brand from './components/sections/Brand';
import About from './components/sections/About';

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
     <Header/>
     <HeroSection/>
     <Brand/>
     <About/>
    </div>
  )
}
export default page;