import React from 'react'
import { NavLink } from 'react-router'

import { phone, email } from '../assets'

import Accordion from './Accordion'

const Footer = () => {

    const items = [
        {
          title: 'Navigation',
          content: 
          <div className='flex flex-col text-semibold'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-brand cursor-pointer' : 'text-white cursor-pointer'}>Homepage</NavLink>
            <NavLink to="/Technology" className={({ isActive }) => isActive ? 'text-brand cursor-pointer' : 'text-white cursor-pointer'}>Technology</NavLink>
            <NavLink to="/Solutions" className={({ isActive }) => isActive ? 'text-brand cursor-pointer' : 'text-white cursor-pointer'}>Solutions</NavLink>
            <NavLink to="/Company" className={({ isActive }) => isActive ? 'text-brand cursor-pointer' : 'text-white cursor-pointer'}>Company</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-brand cursor-pointer' : 'text-white cursor-pointer'}>Contact</NavLink>
          </div>,
        },
        {
          title: 'Address',
          content: '1st floor, 44, 3rd St, Kamaraj Nagar, Korattur, Chennai, Tamil Nadu 600080',
        },
        {
          title: 'Social',
          content: 
          <div className='flex flex-col text-semibold'>
            <div className='hover:underline cursor-pointer'><a target="_blank" href='https://www.linkedin.com/company/meineelectric/posts/?feedView=all'>Linkedin</a></div>
            <div className='hover:underline cursor-pointer'><a target="_blank" href='https://www.instagram.com/meineelectric/'>Instagram</a></div>
          </div>,
        },
      ]

    return (
        <div className='flex flex-col xl:flex-row bg-[#151515] rounded-t-[2.5rem] py-12 px-12 sm:py-24 sm:px-24 gap-16 bottom-0'>
            <div className='text-white font-light flex flex-col xl:justify-star'>
                <div className='text-[0.6rem] sm:text-[0.7rem] text-center xl:text-left'>&copy; MEINE ELECTRIC PVT. LTD. 2025</div>
                <div className='text-4xl sm:text-5xl xl:text-6xl font-semibold xl:mb-4 xl:whitespace-nowrap xl:text-left text-center'>Tomorrow is powered by <span className='text-brand'>metal.</span></div>
                <div className='pt-8 flex flex-col xl:flex-row gap-4 xl:gap-12 items-center'>
                    <div className='bg-brand rounded-md font-semibold py-3 px-8 text-sm w-fit transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
                        Contact Us
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-row xl:bg-[#2b2b2b] bg-transparent rounded-md font-semibold py-3 px-5 text-sm items-center gap-2'>
                            <img src={phone} className='xl:h-5 sm:h-7 h-5'/>
                            <div className='text-[0.6rem] xl:text-xs sm:text-sm text-text tracking-tight whitespace-nowrap'>+91 XXXXX XXXXX</div>
                        </div>

                        <div className='flex flex-row xl:bg-[#2b2b2b] bg-transparent rounded-md font-semibold py-3 px-5 text-sm items-center gap-2'>
                            <img src={email} className='xl:h-5 sm:h-7 h-5'/>
                            <div className='text-[0.6rem] xl:text-xs sm:text-sm text-text tracking-tight whitespace-nowrap'>support@meineelectric.com</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='flex-grow hidden xl:flex flex-col justify-between gap-4'>
                <div>
                    <div className='text-sm text-white'>NAVIGATION</div>
                    <div className='text-sm text-text tracking-tight grid grid-cols-5 xl:grid-cols-3 gap-y-[0.1rem] gap-x-1'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-brand font-semibold cursor-pointer' : 'text-text cursor-pointer'}>Homepage</NavLink>
                        <NavLink to="/Technology" className={({ isActive }) => isActive ? 'text-brand font-semibold cursor-pointer' : 'text-text cursor-pointer'}>Technology</NavLink>
                        <NavLink to="/Solutions" className={({ isActive }) => isActive ? 'text-brand font-semibold cursor-pointer' : 'text-text cursor-pointer'}>Solutions</NavLink>
                        <NavLink to="/Company" className={({ isActive }) => isActive ? 'text-brand font-semibold cursor-pointer' : 'text-text cursor-pointer'}>Company</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-brand font-semibold cursor-pointer' : 'text-text cursor-pointer'}>Contact</NavLink>
                    </div>
                </div>
                <div>
                    <div className='text-sm text-white'>ADDRESS</div>
                    <div className='text-sm text-text tracking-tight flex flex-row gap-4'>
                    1st floor, 44, 3rd St, Kamaraj Nagar, Korattur, Chennai, Tamil Nadu 600080
                    </div>
                </div>
                <div>
                    <div className='text-sm text-white'>SOCIAL</div>
                    <div className='text-sm text-text tracking-tight flex flex-row gap-4'>
                        <div className='hover:underline cursor-pointer'><a target="_blank" href='https://www.linkedin.com/company/meineelectric/posts/?feedView=all'>Linkedin</a></div>
                        <div className='hover:underline cursor-pointer'><a target="_blank" href='https://www.instagram.com/meineelectric/'>Instagram</a></div>
                    </div>
                </div>
            </div>

            <div className='xl:hidden block'>
                <Accordion items={items} /> 
            </div>
        </div>
    )
}

export default Footer