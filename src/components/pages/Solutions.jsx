import React from 'react'
import { NavLink } from 'react-router'
import { heroTech, heroTechSmall, img6, img7 } from '../../assets'

const Solutions = () => {
  return (
    <div>
      <div 
        className="sm:block hidden w-full min-h-[90vh] bg-cover bg-no-repeat bg-top" 
        style={{ backgroundImage: `url(${heroTech})` }}
      >
        <section className="px-6 xl:px-16 flex flex-col min-h-[70vh] gap-2">
          {/* Spacer to push content down */}
          <div className="flex-grow"></div> 

          <div className="text-head xl:text-[2.5rem] text-3xl font-bold text-left leading-[1]">
            Seamless <span className="text-brand">Energy Resilience</span> <br/>for a Changing World
          </div>
          <div className="w-fit flex flex-col font-medium lg:text-xl md:text-base text-base text-left text-text tracking-tight mb-12">
            Energy backup is essential in an unpredictable world. Our metal-air technology<br/>provides on-demand, long-duration backup for continuous operations.
          </div> 

          {/* Spacer to push content down */}
          <div className="flex-grow"></div> 
        </section>
      </div>

      <div 
        className="sm:hidden block w-full min-h-[90vh] bg-cover bg-top bg-no-repeat" 
        style={{ backgroundImage: `url(${heroTech})` }}
      >
        <section className="px-6 xl:px-16 flex flex-col min-h-[70vh] justify-start  gap-2">
          {/* Spacer to push content down */}
          <div className="flex-grow"></div> 

          <div className="text-head xl:text-[2.5rem] text-3xl font-bold text-left leading-[1]">
            Seamless <span className="text-brand">Energy Resilience</span> <br/>for a Changing World
          </div>
          <div className="w-fit flex flex-col font-medium lg:text-xl md:text-base text-base text-left text-text tracking-tight mb-12">
            Energy backup is essential in an unpredictable world. Our metal-air technology<br className='sm:block hidden'/>provides on-demand, long-duration backup for continuous operations.
          </div> 

          {/* Spacer to push content down */}
          <div className="flex-grow"></div> 
        </section>
      </div>

      <section className='px-6 xl:px-16 xl:pt-16 pt-12 sm:pt-28 flex flex-col gap-3 items-start mb-10 sm:mb-12 w-full '>
        <div className='bg-brand p-2 sm:w-28 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] sm:text-4xl xl:text-5xl font-bold text-left mt-2 sm:mt-4 mb-6 ">
        <span className='text-brand'>Instant Reliable Power</span> When<br/>Failure Is Not an Option
        </h1>
        <div className='flex flex-col gap-2 sm:gap-4 w-full'>
            <div className='rounded-3xl flex flex-col lg:flex-row items-center gap-4 sm:gap-16  max-w-[1000px] shadow-[0_15px_80px_rgba(120,121,121,0.3)] px-6 py-4'>
              <img className='rounded-lg overflow-hidden h-[350px] sm:h-[500px] aspect-square object-contain' src={img6} />
              <div className='py-4 w-full items-start flex flex-col'>
                <h1 className='text-brand font-semibold text-xl sm:text-3xl xl:text-4xl'>Power Generation Capsule</h1>
                <h2 className='text-head font-semibold text-base sm:text-xl pb-3'>200W - 1000W</h2>
                <h3 className='text-text font-medium text-sm sm:text-xl sm:leading-[1.6rem] tracking-tight'>15+ hours of portable noise free energy backup.<br/>Suitable for remote, hard to reach areas.</h3>
              </div>
            </div>
            <div className='rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center gap-4 sm:gap-16 max-w-[1000px] shadow-[0_15px_80px_rgba(120,121,121,0.3)] lg:self-end px-6 py-4'>
              <img className='rounded-lg h-[350px] sm:h-[500px] aspect-square object-contain' src={img7} />
              <div className='py-4 w-full items-start flex flex-col'>
                <h1 className='text-brand font-semibold text-xl sm:text-3xl xl:text-4xl'>Aluminum Air Gensets</h1>
                <h2 className='text-head font-semibold text-base sm:text-xl pb-3'>1000W - 5000W</h2>
                <h3 className='text-text font-medium text-sm sm:text-xl sm:leading-[1.6rem] tracking-tight'>Set & Forget reliable energy backup for<br/>upto 100 hours.</h3>
              </div>
            </div>
        </div>
        <NavLink 
          to="/Contact" 
          className='sm:mt-4 mt-1 text-brand text-3xl self-center text-center font-semibold 
                      hover:underline'>
          Contact Us to know more
        </NavLink>
      </section>

      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>

    </div>
  )
}

export default Solutions
