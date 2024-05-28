import React, {useState} from 'react'
import { HiArrowNarrowDown, HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className='home w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ffe42d]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rabbani Raihan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'> I'm a software development enthusiast. 
                As a Software Developer, I am driven by my passion for technology and 
                my desire to continuously improve and grow in my field.
            </p>
            <div>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#d0bd3d] hover:border-[#d0bd3d] duration-200'>
                  <Link to='about' smooth={true} duration={500}>
                    View Work
                  </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home