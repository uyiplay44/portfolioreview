import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192d] flex items-center justify-center'>
        <div className='max-w[100%] mx-auto px-10 flex flex-col justify-center h-screen sm:px-5'>
            <p className='text-red-600'>Hi, my name is</p>
            <h1 className='text-5xl sm:text-4xl font-bold text-[#ccd6f6]'>OYENWEN WISDOM UGIAGBE</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[600px]'>I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focusing on building responsive frontend web and mobile applications.</p>

            <a href="/work" className='text-white group border-2 px-3 py-4 lg:flex items-center hidden justify-between w-[20%] rounded-xl hover:bg-pink-900 hover:border-pink-700'>View Work <span className='group-hover:rotate-90 duration-500'><HiArrowCircleRight className='ml-3'/></span></a>
        </div>
    </div>
  )
}

export default Home