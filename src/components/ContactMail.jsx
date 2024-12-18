import React from 'react'
import { Contact } from './Contact'

export const ContactMail = () => {
  return (
    <div className='bg-[#252d5c] pt-[10%]'>
        <div className='text-center text-white'>
            <h1 className='text-[5vh]'>Contact Us</h1>
            <h2 className='text-[3vh]'>Write your message</h2>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <input type="text" placeholder='First Name' className='w-[80%] h-[5vh] rounded-xl p-3'/>
            <input type="text" placeholder='Last Name' className='w-[80%] h-[5vh] rounded-xl p-3'/>
        </div>
        <div className='flex flex-col items-center gap-3 mt-3'>
            <input type="text" placeholder='Phone' className='w-[80%] h-[5vh] rounded-xl p-3'/>
            <input type="text" placeholder='Email address' className='w-[80%] h-[5vh] rounded-xl p-3'/>
            <input type="text"  placeholder='Message' className='w-[80%] h-[15vh] rounded-xl p-3'/>
        </div>
        <div className='mt-3 flex items-center justify-center'>
            <button className='w-[60vw] bg-green-500 h-[5vh] rounded-lg cursor-pointer hover:bg-green-400'>Send</button>
        </div>

        <Contact/>
    </div>
  )
}
