import React from 'react'
import { NavLink } from 'react-router'
import { heroTech } from '../../assets'

const Solutions = () => {
  return (
    <div 
      className="w-full min-h-[100vh] bg-contain bg-top bg-no-repeat" 
      style={{ backgroundImage: `url(${heroTech})` }}
    >

      <section className='px-16 pt-[34rem] flex flex-col justify-start gap-2'>
          <div className='text-head text-[2.5rem] leading-[40px] font-bold text-left'>
          Seamless <span className='text-brand'>Energy Resilience</span> <br/>for a Changing World
          </div>
          <div className='w-fit flex flex-col font-medium text-xl text-left text-text tracking-tight'>
          Energy backup is essential in an unpredictable world. Our metal-air technology<br/>provides on-demand, long-duration backup for continuous operations.
          </div> 
      </section>

    <section className='px-16 pt-32 flex flex-col gap-3 items-start mb-12 w-full '>
      <div className='bg-brand p-2 w-28 rounded-full'></div>
      <h1 className="text-head text-[3rem] leading-[1] font-bold text-left mt-4 mb-8 ">
      <span className='text-brand'>Instant, Reliable Power</span> When<br/>Failure Is Not an Option
      </h1>
      <div className='flex flex-row gap-4 w-full'>
          <div className='p-4 rounded-xl shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
              <img className='rounded-lg w-full h-auto object-cover' src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="Description of the image" />
              <div className='py-4'>
                <h1 className='text-brand font-semibold text-4xl'>Power Generation Capsule</h1>
                <h2 className='text-head font-semibold text-xl pb-3'>200W - 1000W</h2>
                <h3 className='text-text font-medium text-xl leading-[1.6rem] tracking-tight'>15+ hours of portable noise free energy backup.<br/>Suitable for remote, hard to reach areas.</h3>
              </div>
          </div>
          <div className='p-4 rounded-xl shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
              <img className='rounded-lg w-full h-auto object-cover' src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="Description of the image" />
              <div className='py-4'>
                <h1 className='text-brand font-semibold text-4xl'>Aluminum Air Gensets</h1>
                <h2 className='text-head font-semibold text-xl pb-3'>1000W - 5000W</h2>
                <h3 className='text-text font-medium text-xl leading-[1.6rem] tracking-tight'>Set & Forget reliable energy backup for<br/>upto 100 hours.</h3>
              </div>
          </div>
      </div>
      <NavLink 
        to="/Contact" 
        className='mt-12 bg-brand px-6 py-2 lg:px-8 lg:py-3 rounded-lg xl:text-base md:text-sm text-xs text-center text-white border-[2.5px] border-brand font-semibold 
                    transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
        Contact Us to know more
      </NavLink>
    </section>

    </div>
  )
}

export default Solutions
