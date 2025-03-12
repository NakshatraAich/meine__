import React from 'react'
import { logo } from '../assets'

import { motion, useScroll, useTransform } from 'motion/react'
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 300], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'])
  const menuColor = useTransform(scrollY, [0, 300], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'])

  return (
    <div className='z-10'>
      <motion.div 
        style={{ backgroundColor }}
        className='hidden xl:flex py-8 px-16 items-center justify-between w-full tracking-snug fixed'>
        <NavLink to="/"><img src={logo} alt='Logo' className='h-10' /></NavLink>

        <div className='flex flex-row gap-4 text-text text-sm font-semibold'>
          <NavLink to="/Technology" className={({ isActive }) => isActive ? 'text-brand' : ''}>Technology</NavLink>
          <NavLink to="/Solutions" className={({ isActive }) => isActive ? 'text-brand' : ''}>Solutions</NavLink>
          <NavLink to="/Company" className={({ isActive }) => isActive ? 'text-brand' : ''}>Company</NavLink>
          <NavLink to="/Newsroom" className={({ isActive }) => isActive ? 'text-brand' : ''}>Newsroom</NavLink>
        </div>

        <NavLink to="/Contact" className='bg-brand px-6 py-3 rounded-lg font-semibold text-sm text-white'>
          Contact Us
        </NavLink>
      </motion.div>
      <motion.div 
        className='lg:px-16 px-6 py-7 fixed xl:hidden flex flex-row justify-between w-full items-center'
        style={{ backgroundColor }}>
        <img src={logo} className='md:h-8 h-7'/>
        {/* <motion.div 
          className='p-5 shadow-[0_15px_80px_rgba(120,121,121,0.6)] transition-all duration-200 ease-in-out active:scale-95 cursor-pointer rounded-full  border-[3px] border-brand'
          style={{ menuColor }}>
          
        </motion.div> */}
      </motion.div>
    </div>
  )
}

export default Navbar
