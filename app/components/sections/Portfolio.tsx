import React from 'react'

const Portfolio = () => {
  return (
     <section className='bg-white max-w-6xl h-auto mx-auto py-10 mt-8 px-4 md:px-0' id='portfolio'>
        <div className='text-center text-foreground mb-6 md:mb-4 font-semibold'>
            <h2 className='text-xs md:text-sm'>Portfolio</h2>
            <h1 className='text-xl md:text-2xl'>Every Project Tells a <span className='text-amber-300'>Story</span></h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
        <div className='w-100 h-50 relative'>
            <div className='w-full h-full z-20 absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white to-transparent'></div>
            <img src="/images/a.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        <div className='w-100 h-50 relative -right-25'>
            <img src="/images/e.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        <div className='w-50 h-50 relative -right-50'>
            <div className='w-full h-full z-20 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-white to-transparent'></div>
            <img src="/images/f.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        <div className='w-30 h-50 relative left-30'>
            <div className='w-full h-full z-20 absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white to-transparent'></div>
            <img src="/images/g.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        <div className='w-100 h-50 relative right-30'>
            <img src="/images/h.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        <div className='w-100 h-50 relative'>
            <div className='w-full h-full z-20 absolute bottom-0 left-0 right-0 bg-gradient-to-l from-white to-transparent'></div>
            <img src="/images/i.jpg" alt="" className='w-full h-full bg-center rounded-xl object-cover absolute z-10' />
        </div>
        </div>
    </section>
  )
}

export default Portfolio