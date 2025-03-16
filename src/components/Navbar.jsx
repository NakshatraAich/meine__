import React from 'react'
import { logo, menu } from '../assets'

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 300], ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'])
  const [menuOpen, setMenuOpen] = useState(false);

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

        <NavLink to="/Contact" className='bg-brand px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 ease-in-out active:scale-95'>
          Contact Us
        </NavLink>
      </motion.div>

      <motion.div 
        className='xl:px-16 px-6 py-7 fixed xl:hidden flex flex-row justify-between w-full items-center'
        style={{ backgroundColor }}
      >
        <img src={logo} className='md:h-8 h-7'/>
        
        <div className="p-2 aspect-square rounded bg-brand flex flex-col items-center justify-center transition-all duration-200 ease-in-out active:scale-[80%] cursor-pointer">
          <img src={menu} className='md:h-4 h-3'
          onClick={() => setMenuOpen(true)}/>
        </div>
      </motion.div>

      <>
      {/* Top Navbar */}
        <motion.div 
          className="xl:px-16 px-6 py-7 fixed xl:hidden flex flex-row justify-between w-full items-center z-50"
          style={{ backgroundColor }}
        >
          <img src={logo} className="h-10"/>

          {/* Menu Button */}
          <div 
            className="p-2 aspect-square rounded bg-brand flex flex-col items-center justify-center transition-all duration-200 ease-in-out active:scale-[80%] cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <img src={menu} className="md:h-4 h-3"/>
          </div>
        </motion.div>

        {/* Full-screen Menu with Staggered Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {/* Close Button */}
              <button 
                className="absolute top-10 right-10 text-brand font-bold text-3xl"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              <motion.ul 
                className="text-text text-2xl space-y-6"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{ 
                  visible: { transition: { staggerChildren: 0.2 } }, 
                }}
              >
                {["Homepage","Technology", "Solutions", "Company", "Newsroom", "Contact"].map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { duration: 0.4, delay: index * 0.1 * (1 - index * 0.03) } 
                      }
                    }}>
                    <NavLink 
                      to={item === "Homepage" ? "/" : `/${item}`}
                      className={({ isActive }) => isActive ? 'text-brand font-semibold' : 'font-medium'}
                      onClick={() => setMenuOpen(false)} // Close menu when clicking a link
                    >
                      {item}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>

    </div>
  )
}

export default Navbar
