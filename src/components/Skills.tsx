import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Reactjs from '../assets/react.png'
import nodejs from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import fastify from '../assets/fastify.png'
import github from '../assets/github.png'
import go from '../assets/golang.png'
import mysql from '../assets/mysql.png'
import postgre from '../assets/postgre.png'
import typescript from '../assets/typescript.png'
import bootstrap from '../assets/bootstrap.png'
import gitlab from '../assets/gitlab.png'
import vue from '../assets/vue.png'


const Skills = () => {
  return (
    <div className='skills h-full w-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffe42d] '>Skills</p>
                <p className='py-4'>// These are the technologies that I've work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={HTML} alt="HTML icon" />
                    <p className='my-2'>HTML</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={CSS} alt="CSS icon" />
                    <p className='my-2'>CSS</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={JS} alt="JS icon" />
                    <p className='my-2'>Javascript</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={Reactjs} alt="Reactjs icon" />
                    <p className='my-2'>React</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={vue} alt="Vue icon" />
                    <p className='my-3'>Vue</p>
                </div>
                <div>
                    <img className='w-24 mx-auto hover:scale-110 duration-500' src={bootstrap} alt="bootstrap icon" />
                    <p className='my-2'>Bootstrap</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={nodejs} alt="nodejs icon" />
                    <p className='my-2'>Node.js</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={typescript} alt="typescript icon" />
                    <p className='my-2'>Typescript</p>
                </div>
                <div>
                    <img className='w-20 mx-auto hover:scale-110 duration-500' src={tailwind} alt="Tailwind icon" />
                    <p className='my-2'>Tailwind</p>
                </div>
                <div>
                    <img className='mx-auto hover:scale-110 duration-500 w-32' src={go} alt="postgres icon" />
                    <p className='my-4'>Golang</p>
                </div>
                <div>
                    <img className='w-28 mx-auto hover:scale-110 duration-500' src={fastify} alt="fastify icon" />
                    <p className='my-2'>Fastify</p>
                </div>
                <div>
                    <img className='w-28 mx-auto hover:scale-110 duration-500' src={mysql} alt="mysql icon" />
                    <p className='my-2'>MySQL</p>
                </div>
                <div>
                    <img className='w-32 mx-auto hover:scale-110 duration-500' src={postgre} alt="postgre icon" />
                    <p className='my-2'>PostgreSQL</p>
                </div>
                <div>
                    <img className='w-24 mx-auto hover:scale-110 duration-500' src={github} alt="github icon" />
                    <p className='my-2'>GitHub</p>
                </div>
                <div>
                    <img className='w-24 mx-auto hover:scale-110 duration-500' src={gitlab} alt="gitlab icon" />
                    <p className='my-2'>Gitlab</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills