import React from 'react'
import { logo } from '../assets'

import { motion, useScroll, useTransform } from 'motion/react'
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 300], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'])

  return (
    <div className='z-10'>
      <motion.div 
        style={{ backgroundColor }}
        className='py-8 px-16 flex items-center justify-between w-full tracking-snug fixed'>
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
    </div>
  )
}

export default Navbar
