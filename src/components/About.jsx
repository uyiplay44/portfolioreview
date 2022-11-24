import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600 uppercase'>About</p>
                </div>
            </div>
            <div></div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
                <p>Hi, I’m Oyenwen Wisdom Ugiagbe, nice to meet you. Please take a look around.</p>
            </div>
            <div className='w-full'>
                <p>I am passionate about building excellent software that improved the lives of those around me. I specialize in creating software
                For clients ranging from individuals and small/large businesses all the way to large enterprise co-operations. What would you do if you had a software expert to help you solve problems and create computerized ideas to enlighten your business?</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About