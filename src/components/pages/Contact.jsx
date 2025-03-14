import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center mb-12'>
      <div className='flex flex-col'>
        <div className='font-bold text-8xl mt-[13rem] text-head px-12'>
          Get In <span className='text-brand'>Touch</span> With Us
        </div>
        <div className='text-4xl font-medium text-altHead mt-6 px-12'>
          support@meineelectric.com
        </div>

        <div className='rounded-3xl gap-4 flex flex-row flex-wrap justify-between shadow-[0_15px_80px_rgba(120,121,121,0.3)] p-16 mt-20 w-full'>
          <div className='flex flex-col gap-4 text-2xl font-semibold'>
            <h1>Address</h1>
            <div className='text-text grid grid-cols-1 text-lg font-medium text-content'>
              <div className='hover:underline'>
                1st floor, 44, 3rd St, Kamaraj Nagar, Korattur,<br/>Chennai, Tamil Nadu 600080
              </div>
            </div>
          </div> 
          <div className='flex flex-col gap-4 text-2xl font-semibold'>
            <h1>Socials</h1>
            <div className='text-text grid grid-cols-1 text-lg font-medium text-content'>
              <div className='hover:underline'>Linkedin</div>
              <div className='hover:underline'>Instagram</div>
            </div>
          </div>
          <div className='flex flex-col gap-4 text-2xl font-semibold'>
            <h1>Contact</h1>
            <div className='text-text grid grid-cols-1 text-lg font-medium text-content'>
              <div className='hover:underline'>+91 91XXX 91XXX</div>
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
    </div>
  )
}

export default Contact
