import React from 'react'

const About = () => {
  return (
    <div className='about w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ffe42d]'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Raihan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                <p>I am eager to bring my passion and expertise to a team dedicated to delivering high-quality software 
                    solutions, bring my energy and enthusiasm to delivering innovative and impactful software solutions 
                    and look forward to the opportunities and challenges that lie ahead.</p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About