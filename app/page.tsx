import React from 'react'
import Header from './components/layouts/Header';
import HeroSection from './components/sections/HeroSection';

const page = () => {
  return (
    <div className='min-h-screen bg-white'>
     <Header/>
     <HeroSection/>
    </div>
  )
}
export default page;