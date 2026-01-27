import React from 'react'
import Card from '../blocs/Card'
import { description } from '../types/description'

const Service = () => {
  const services: description[] = [
    {
      title: "Business",
      description: "Strategy & Planning",
      image: "/images/a.jpg"
    },
    {
      title: "Digital",
      description: "Marketing Solutions",
      image: "/images/b.jpg"
    },
    {
      title: "Operations &",
      description: "Process Optimization",
      image: "/images/d.jpg"
    },
    {
      title: "Branding &",
      description: "Identity Development",
      image: "/images/b.jpg"
    },
    {
      title: "Market",
      description: "Research & Analysis",
      image: "/images/a.jpg"
    },
    {
      title: "Web Design",
      description: "& Development",
      image: "/images/b.jpg"
    },
  ]

  return (
    <section className='bg-white max-w-6xl h-auto mx-auto py-10 md:py-20 mt-8 px-4 md:px-0' id='service'>
        <div className='text-center text-foreground mb-6 md:mb-4 font-semibold'>
            <h2 className='text-xs md:text-sm'>Service</h2>
            <h1 className='text-xl md:text-2xl'>Fueling Growth Through</h1>
            <h1 className='text-xl md:text-2xl'>Better <span className='text-amber-300'>Services</span></h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
         {
           services.map((service, index)=>(
            <Card key={index} data={service}/>
           ))
         }
        </div>
    </section>
  )
}

export default Service