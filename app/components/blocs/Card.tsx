import React from 'react'
import { description } from '../types/description'

interface CardProps {
  data: description;
}

const Card = ({ data }: CardProps) => {
  return (
    <div className='w-full h-auto sm:h-64 lg:h-80 rounded-2xl relative overflow-hidden'>
        <img src={data.image} alt={data.title} className='w-full bg-cover bg-center h-auto z-10 rounded-2xl' />
        
        {/* Effet d'ombre en bas */}
        <div className='absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-black/50 to-transparent z-15 rounded-2xl'></div>

        <div className='z-20 flex gap-2 absolute bottom-4 left-10'>
        <div className='w-1 h-12 bg-amber-400  rounded-sm border-white'></div>
        <div className='line-clamp-2'>
        <h1 className='font-mono text-xl text-muted-foreground text-white'>{data.title}</h1> 
        <h2 className='font-mono text-xl text-muted-foreground text-white'>{data.description}</h2>

        </div>
        </div>
    </div>
  )
}

export default Card