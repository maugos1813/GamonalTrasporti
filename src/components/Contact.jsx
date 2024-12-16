import React from 'react'
import logo from "/logoc.jpeg"

export const Contact = () => {
  return (
    <div className='bg-[#252d5c] text-white lg:flex lg:justify-evenly mt-[100px] border-2 border-green-500 p-5'>
      <div className='flex flex-col items-center justify-center gap-5 p-4 w-full lg:w-full'>
        <img src={logo} alt="logo image" className='w-[8vh] rounded-full'/>
        <input type="text" placeholder='Email here' className='w-[50vw] h-[10vw] p-2 text-gray-600 lg:w-[80%] lg:h-[8vh] rounded-xl'/>
        <button className='bg-green-500 hover:bg-green-400 w-[50vw] h-[10vw] rounded-3xl lg:w-[80%] lg:h-[8vh]'>Send now</button>
      </div>

      <div className='flex flex-col justify-center items-center p-5 gap-5 lg:w-full'>
        <h3 className='text-[3vh]'>Services</h3>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer'>Service 1</li>
          <li className='cursor-pointer'>Service 2</li>
          <li className='cursor-pointer'>Service 3</li>
          <li className='cursor-pointer'>Service 4</li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center p-5 gap-5 lg:w-full'>
        <h3 className='text-[3vh]'>About Us</h3>
        <ul className='flex flex-col gap-5 list-disc'>
          <li className='cursor-pointer'>Phone</li>
          <li className='cursor-pointer'>Facebook</li>
          <li className='cursor-pointer'>Whatsapp</li>
          <li className='cursor-pointer'>Email</li>
        </ul>
      </div>
    </div>
  )
}
