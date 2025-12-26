import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-purple-600 text-white py-4 mt-4 justify-end'>
        <div className='container mx-auto'>
          <p>&copy; {new Date().getFullYear()} DaisYUI Exemple</p>
        </div>
    </footer>
  )
}

export default Footer