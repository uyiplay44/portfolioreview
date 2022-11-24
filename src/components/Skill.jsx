import React from 'react'
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import Firebase from '../assets/Firebase.png';
import JavaScript from '../assets/JavaScript.png';
import Nodejs from '../assets/Nodejs.png';
import Reactjs from '../assets/Reactjs.png';
import Mongodb from '../assets/Mongodb.png';
import Tailwind from '../assets/Tailwind.jpg';

const Skill = () => {
  return (
    <div className='w-full md:h-screen sm: h-screen bg-[#0a192f] text-gray-300 px-4'>
        {/* Container */}
        <div className='max-w-[1000px] w-full h-full p-4 flex flex-col justify-center mx-auto'>
            <div>
                <p className='text-4xl border-b-2 border-pink-600 uppercase py-4'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-ful grid grid-cols-2 sm:grid-col-4 text-center gap-4 py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={HTML} alt="HTML icon" />
                    <p className='mx-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={CSS} alt="HTML icon" />
                    <p className='mx-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={Firebase} alt="HTML icon" />
                    <p className='mx-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={JavaScript} alt="HTML icon" />
                    <p className='mx-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={Nodejs} alt="HTML icon" />
                    <p className='mx-4'>NodeJs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={Reactjs} alt="HTML icon" />
                    <p className='mx-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={Mongodb} alt="HTML icon" />
                    <p className='mx-4'>MongoDB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-t-2xl text-center'>
                    <img className='w-20' src={Tailwind} alt="HTML icon" />
                    <p className='mx-4'>TailwindCss</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill