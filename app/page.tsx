import React from 'react'
import Header from './components/layouts/Header';
import HeroSection from './components/sections/HeroSection';
import Brand from './components/sections/Brand';

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
     <Header/>
     <HeroSection/>
     <Brand/>
    </div>
  )
}
export default page;