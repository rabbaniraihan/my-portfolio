import React from 'react'

const Contact = () => {
  return (
    <div className='contact w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
        <form action="" className='max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffe42d]'>Contact</p>
                <p className='py-4'>// Submit the form below or contact me on my email - rabbaniraihan2@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" rows={10} placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#d0bd3d] hover:border-[#d0bd3d] px-4 py-3 my-8 mx-auto flex items-center duration-200'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact