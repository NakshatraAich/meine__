import React from 'react'
import { heroTech } from '../../assets'

const Solutions = () => {
  return (
    <div 
      className="w-full min-h-[100vh] bg-contain bg-top bg-no-repeat" 
      style={{ backgroundImage: `url(${heroTech})` }}
    >

      <section className='px-16 pt-[34rem] flex flex-col justify-start gap-2'>
          <div className='text-head text-[2.5rem] leading-[38px] font-bold text-left'>
          Powering The World<br/>Through<span className='text-brand'> Metal.</span>
          </div>
          <div className='w-fit flex flex-col font-medium text-xl text-left text-text tracking-tight'>
            The electric grid is under increasing pressure to meet<br/>growing energy demands while maintaining reliability,<br/>affordability, and sustainability.
          </div> 
      </section>

      <section className='px-16 pt-32 flex flex-col gap-3 items-start mb-12 w-full '>
    <div className='bg-brand p-2 w-28 rounded-full'></div>
    <h1 className="text-head text-[3rem] leading-[1] font-bold text-left mt-4 mb-8 ">
      Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
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
</section>

    </div>
  )
}

export default Solutions
