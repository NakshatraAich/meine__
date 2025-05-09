import React from 'react'
import {link, ig} from '../../assets'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='px-6 flex flex-col'>
        <div className='font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mt-[10rem] sm:mt-[13rem] text-head px-6 sm:px-12'>
          Get In <span className='text-brand'>Touch</span> With Us
        </div>
        <a href="mailto:contact@meineelectric.com">
          <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-altHead mt-4 lg:mt-6 px-6 sm:px-12 cursor-pointer hover:underline">
            contact@meineelectric.com
          </div>
        </a>

        <div className='rounded-3xl gap-4 flex flex-col sm:flex-row flex-wrap justify-between shadow-[0_15px_80px_rgba(120,121,121,0.3)] p-8 sm:p-16 mt-10 lg:mt-20 w-full'>
          <div className='flex flex-col gap-4 text-xl xl:text-2xl font-semibold'>
            <h1>Address</h1>
            <div className='text-text grid grid-cols-1 text-base xl:text-lg font-medium text-content'>
              <div className='hover:underline'>
                1st floor, 44, 3rd St, Kamaraj Nagar, Korattur,<br className='sm:block hidden'/>Chennai, Tamil Nadu 600080
              </div>
            </div>
          </div> 
          <div className='flex flex-col gap-4 text-xl xl:text-2xl font-semibold '>
            <h1>Socials</h1>
            <div className='text-text grid grid-cols-2 text-base xl:text-lg font-medium text-content w-fit -ml-1'>
              <a target='_blank' href='https://www.instagram.com/meineelectric/' className='hover:underline'><img src={ig} className='h-10 opacity-45 hover:opacity-100'/></a>
              <a target='_blank' href='https://www.linkedin.com/company/meineelectric/posts/?feedView=all'  className='hover:underline'><img src={link} className='h-10 opacity-45 hover:opacity-100'/></a>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-4 mt-12 rounded-3xl overflow-hidden'>
        <iframe 
          src="https://maps.google.com/maps?q=MEINE%20Electric&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className='w-full h-[650px] rounded-3xl'
          allowFullScreen
          loading="lazy"
          referrerPolicy="origin"
        ></iframe>
      </div>

      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end w-full mt-8'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>
    </div>
  )
}

export default Contact
