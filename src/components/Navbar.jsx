import React, { useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='font-extrabold cursor-pointer'>
           <h2>OYENWEN WISDOM UGIAGBE</h2>
        </div>
            <ul className='hidden md:flex'>

                <li>
                    <a href="/">Home</a>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/skill">Skill</a></li>
                <li><a href="/work">Work</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!toggle ? <FaBars/> : <FaTimes/>}
        </div>
        <div>
            <ul className={!toggle ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192d] flex flex-col justify-center items-center'}>
                <li className='py-8 text-2xl border-b'><a href="/">Home</a></li>
                <li className='py-8 text-2xl'><a href="/about">About</a></li>
                <li className='py-8 text-2xl'><a href="/skill">Skill</a></li>
                <li className='py-8 text-2xl'><a href="/work">Work</a></li>
                <li className='py-8 text-2xl'><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className='hidden fixed flex-col top-72 left-0 lg:flex'>
            <ul>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-15px] duration-700 bg-blue-700'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-15px] duration-700 bg-gray-700'>
                    <a href="https://www.linkedin.com/in/oyenwen-wisdom-ugiagbe-225204117/" className='flex justify-between items-center w-full text-gray-300'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-15px] duration-700 bg-red-700'>
                    <a href="https://github.com/uyiplay44" className='flex justify-between items-center w-full text-gray-300'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-15px] duration-700 bg-green-900'>
                    <a href="/contact" className='flex justify-between items-center w-full text-gray-300'>
                        Mail <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-95px] hover:ml-[-15px] duration-700 bg-black'>
                    <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar