import React from 'react'
import logo from "/logoc.jpeg"

export const Contact = () => {
  return (
    <div className='bg-[#252d5c] text-white lg:flex justify-between mt-[100px] border-2 border-green-500 p-5'>
      <div className='flex flex-col items-center justify-center gap-5 p-4 w-full'>
        <img src={logo} alt="logo image" className='w-[8vh] rounded-full'/>
        <input type="text" placeholder='Email here' className='w-[50vw] h-[10vw] p-2 text-gray-600'/>
        <button className='bg-green-500 w-[50vw] h-[10vw] rounded-3xl'>Send now</button>
      </div>

      <div className='flex flex-col justify-center items-center p-5 gap-5'>
        <h3 className='text-[3vh]'>Services</h3>
        <ul className='flex flex-col gap-5 list-disc'>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
          <li>Service 4</li>
        </ul>
      </div>

      <div className='flex flex-col justify-center items-center p-5 gap-5'>
        <h3 className='text-[3vh]'>About Us</h3>
        <ul className='flex flex-col gap-5 list-disc'>
          <li>Phone</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  )
}
