import React from 'react'
import weather from '../assets/weatherapp.jpg'
import currency from '../assets/currency.jpg'
import forex from '../assets/forex.jpg'

const Experiences = () => {
  return (
    <div className='experiences w-full md:h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ffe42d] '>Experiences</p>
          <p className='py-4'>// Check out some of my experiences</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='hover-div opacity-0 group-hover:opacity-90 duration-300 justify-center mx-auto p-11'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Tracker App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/rabbaniraihan/simple-weather-app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                </a>
              </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${forex})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
            <div className='hover-div opacity-0 group-hover:opacity-90 duration-300 justify-center mx-auto p-11'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Currency Converter App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/rabbaniraihan/currency-converter-app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                </a>
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Experiences