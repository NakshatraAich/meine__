import React from 'react'
import { cogen, elec, elec2, carbon, alair } from '../../assets'

const Technology = () => {
  return (
    <div>
      <section className='xl:mr-16 px-6 sm:px-12 xl:px-16 pt-48 sm:pt-56 flex lg:flex-row flex-col justify-center items-center gap-1 sm:gap-12 xl:gap-16'>
        <div className='flex flex-row gap-1 mb-20 basis-1/2 justify-end'>
          <div><img src={cogen} className='w-20 h-[16rem] sm:w-24 sm:h-[20rem] object-cover object-[40%_30%] rounded-xl mt-12'/></div>
          <div><img src={elec} className='w-20 h-[20rem] sm:w-24 sm:h-[24rem] object-cover object-[70%_80%] rounded-xl -mt-20'/></div>
          <div><img src={elec2} className='w-20 h-[18rem] sm:w-24 sm:h-[22rem] object-cover object-[50%_10%] rounded-xl mt-20'/></div>
          <div><img src={carbon} className='w-20 h-[16rem] sm:w-24 sm:h-[20rem] object-cover object-[30%_20%] rounded-xl -mt-4'/></div>
        </div>   
        <div className='-mt-12 sm:-mt-28 flex flex-col gap-2 basis-1/2'>
          <div className='text-head text-3xl xl:text-[2.5rem] leading-[1] font-bold text-left'>
            Engineering the Future of <br className='xl:block hidden'/><span className='text-brand'>Power Generation & Storage.</span>
          </div>
          <div className='w-fit pr-8 items-end flex flex-col  lg:text-lg font-medium xl:text-xl md:text-base text-base text-left text-text tracking-tight'>
          MEINE Electric pioneers metal-air fuel cells with <br className='xl:block hidden'/>advanced R&D, strong IP, and a focus on performance,<br className='xl:block hidden'/>scalability, and efficiency.
          </div> 
        </div> 
      </section>

      <section className='px-6 xl:px-16 pt-20 flex flex-col gap-3 items-center mb-8'>
        <div className='bg-brand p-2 sm:w-28 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] text-center sm:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 mb-6 ">
          Inside the Technology That is <br className='xl:block hidden'/>Redefining <span className='text-brand'>Energy Security</span> 
        </h1>
        <div className='p-6 lg:p-16 w-full bg-white rounded-2xl flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24'>
          <img src={alair} className='lg:w-1/2'/>
          <div className='items-end flex flex-col font-medium text-sm sm:text-base lg:text-lg xl:text-xl text-left text-text tracking-tight lg:w-1/2'>
              Aluminum-air (Al-air) batteries generate electricity through the oxidation of aluminum at the anode, releasing electrons that flow through an external circuit to the cathode, where oxygen reduction occurs. This electrochemical process involves aluminum reacting with oxygen from the air in the presence of an electrolyte, resulting in the production of electricity. Aluminum-air batteries utilize abundant aluminum, producing energy without harmful emissions. Their recyclable design supports a sustainable, closed-loop energy system.
          </div> 
        </div>
      </section>

      <section className='px-6 xl:px-48 flex flex-col gap-3 items-left mb-12'>
        <div className='flex flex-col gap-3'>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.1)] py-8 px-4 rounded-2xl w-full sm:max-w-[500px] md:max-w-[700px]'>
            <div className='text-2xl font-semibold text-brand'>100+ Hours of Backup</div>
            <div className='text-xs sm:text-base  text-text  font-medium'>Provides a long-lasting and uninterrupted power supply for over 100 hours, ensuring reliable energy availability during extended outages or emergencies.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.1)] py-8 px-4 rounded-2xl w-full sm:max-w-[500px] md:max-w-[700px] self-end'>
            <div className='text-2xl font-semibold text-brand'>Instant Refueling</div>
            <div className='text-xs sm:text-base text-text font-medium'>The system allows for rapid refueling within seconds, minimizing downtime and ensuring continuous power availability without long wait times or interruptions.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.1)] py-8 px-4 rounded-2xl w-full sm:max-w-[500px] md:max-w-[700px] '>
            <div className='text-2xl font-semibold text-brand'>Zero Emissions</div>
            <div className='text-xs sm:text-base text-text font-medium'>Operates without producing harmful emissions, making it an environmentally friendly energy solution that qualifies for carbon credits and supports sustainability goals.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.1)] py-8 px-4 rounded-2xl w-full sm:max-w-[500px]  md:max-w-[700px] self-end'>
            <div className='text-2xl font-semibold text-brand'>Silent & Seamless</div>
            <div className='text-xs sm:text-base text-text font-medium'>Delivers quiet, vibration-free operation with a steady and smooth energy output, making it ideal for noise-sensitive environments and continuous usage.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.1)] py-8 px-4 rounded-2xl w-full sm:max-w-[500px] md:max-w-[700px] '>
            <div className='text-2xl font-semibold text-brand'>Endless Energy, Minimal Logistics</div>
            <div className='text-xs sm:text-base text-text font-medium'>Reduces dependency on frequent fuel deliveries by offering a low-maintenance, efficient power solution that simplifies logistics and long-term energy management.</div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Technology
