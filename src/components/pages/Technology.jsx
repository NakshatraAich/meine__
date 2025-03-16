import React from 'react'
import { cogen, elec, elec2, carbon, aircell, alair } from '../../assets'

const Technology = () => {
  return (
    <div>
      <section className='xl:mr-16 px-6 sm:px-12 xl:px-16 pt-40 sm:pt-56 flex lg:flex-row flex-col justify-center items-center gap-1 sm:gap-12 xl:gap-16'>
        <div className='flex flex-row gap-1 mb-20 basis-1/2 justify-end'>
          <div><img src={cogen} className='w-24 h-[20rem] object-cover object-[40%_30%] rounded-xl mt-12'/></div>
          <div><img src={elec} className='w-24 h-[24rem] object-cover object-[70%_80%] rounded-xl -mt-20'/></div>
          <div><img src={elec2} className='w-24 h-[22rem] object-cover object-[50%_10%] rounded-xl mt-20'/></div>
          <div><img src={carbon} className='w-24 h-[20rem] object-cover object-[30%_20%] rounded-xl -mt-4'/></div>
        </div>   
        <div className='sm:-mt-28 flex flex-col gap-2 basis-1/2'>
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
        <div className='p-6 lg:p-16 w-full bg-white rounded-2xl flex flex-col lg:flex-row shadow-[0_15px_80px_rgba(120,121,121,0.3)] justify-center items-center gap-8 lg:gap-24'>
          <img src={alair} className='lg:w-1/2'/>
          <div className='items-end flex flex-col font-medium text-sm sm:text-base lg:text-lg xl:text-xl text-left text-text tracking-tight lg:w-1/2'>
              Aluminum-air (Al-air) batteries generate electricity through the oxidation of aluminum at the anode, releasing electrons that flow through an external circuit to the cathode, where oxygen reduction occurs. This electrochemical process involves aluminum reacting with oxygen from the air in the presence of an electrolyte, resulting in the production of electricity. Aluminum-air batteries utilize abundant aluminum, producing energy without harmful emissions. Their recyclable design supports a sustainable, closed-loop energy system.
          </div> 
        </div>
        <div className="p-6 lg:p-16 w-full bg-white rounded-xl flex flex-col-reverse lg:flex-row shadow-[0_15px_80px_rgba(120,121,121,0.3)] justify-center items-center gap-8 lg:gap-24">
          <div className="flex flex-col gap-4 font-medium text-sm sm:text-base lg:text-lg xl:text-xl text-left text-text tracking-tight lg:w-1/2 lg:p-6 rounded-lg w-full">
            <div className='bg-[#D9D9D9] rounded-xl p-4'>
              <div className="font-semibold text-sm md:text-lg">Reaction at the Anode:</div>
              <div className='sm:text-2xl md:text-3xl font-semibold text-head'>Al + 3OH⁻ → Al(OH)₃ + 3e⁻</div>
            </div>
            <div className='bg-[#D9D9D9] rounded-xl p-4'>
              <div className="font-semibold  text-sm md:text-lg">Reaction at the Cathode:</div>
              <div className='sm:text-2xl md:text-3xl font-semibold text-head'>O₂ + 2H₂O + 4e⁻ → 4OH⁻</div>
            </div>
            <div className="hidden lg:flex flex-grow p-4 rounded-md my-4">
              {/* You can put a visual element or additional content here if needed */}
            </div>
            <div className='bg-[#D9D9D9] rounded-xl p-4'>
              <div className="font-semibold  text-sm md:text-lg">Complete Reaction:</div>
              <div className='sm:text-2xl md:text-3xl font-semibold text-head'>4Al + 3O₂ + 6H₂O → 4Al(OH)₃</div>
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <img 
              src={aircell} className='rounded-xl h-full object-cover'
            />
          </div>
        </div>
      </section>

      <section className='px-6 xl:px-16 flex flex-col gap-3 items-left mb-12'>
        <h1 className="text-head text-xl leading-[1] text-left font-bold mt-2 sm:mt-4 mb-6 ">
          Advantages
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-3 '>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>100+ Hours of Backup</div>
            <div className='text-base text-text font-medium'>Reliable energy for over 100 hours.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Instant Refueling</div>
            <div className='text-base text-text font-medium'>Refuel in seconds, no downtime.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Cost-Effective</div>
            <div className='text-base text-text font-medium'>Cheaper than diesel generators.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Zero Emissions</div>
            <div className='text-base text-text font-medium'>No tailpipe emissions, enabling carbon credits.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Silent & Seamless</div>
            <div className='text-base text-text font-medium'>Quiet operation with continuous energy flow.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Endless Energy, Minimal Logistics</div>
            <div className='text-base text-text font-medium'>No frequent fuel deliveries required.</div>
          </div>
          
          <div className='shadow-[0_15px_80px_rgba(120,121,121,0.3)] py-8 px-4 rounded-2xl'>
            <div className='text-2xl font-semibold text-brand'>Powered by Aluminum</div>
            <div className='text-base text-text font-medium'>Harnessing the most abundant metal for reliable energy.</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
