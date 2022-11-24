import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center '>
        <form action="https://getform.io/f/b1fb4763-cf36-45f2-bd47-1f99364b79ab" method='POST' className='flex flex-col max-w-[1000px] w-full'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Sumbit the form below</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6] w-auto' />
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center justify-center'>Contact Now</button>
        </form>
    </div>
  )
}

export default Contact