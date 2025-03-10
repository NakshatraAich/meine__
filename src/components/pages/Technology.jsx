import React from 'react'
import { cogen, elec, elec2, carbon, solar, windmill, lithium, nature, dam, sustainable, aircell, alair } from '../../assets'

const Technology = () => {
  return (
    <div>
      <section className='px-16 pt-56 flex flex-row justify-center items-center gap-16 ml-8'>
        <div className='flex flex-row gap-1 mb-20'>
          <div><img src={cogen} className='w-28 h-[20rem] object-cover object-[40%_30%] rounded-xl mt-12'/></div>
          <div><img src={elec} className='w-28 h-[24rem] object-cover object-[70%_80%] rounded-xl -mt-20'/></div>
          <div><img src={elec2} className='w-28 h-[22rem] object-cover object-[50%_10%] rounded-xl mt-20'/></div>
          <div><img src={carbon} className='w-28 h-[20rem] object-cover object-[30%_20%] rounded-xl -mt-4'/></div>
        </div>   
        <div className='-mt-28 flex flex-col gap-2'>
          <div className='text-head text-[2.5rem] leading-[38px] font-bold text-left'>
            Engineering the Future of<br/><span className='text-brand'>Power Generation & Storage.</span>
          </div>
          <div className='w-fit pr-8 items-end flex flex-col font-medium text-xl text-left text-text tracking-tight'>
            The electric grid is under increasing pressure to meet<br/>growing energy demands while maintaining reliability,<br/>affordability, and sustainability.
          </div> 
        </div> 
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-center'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-bold text-center mt-4 mb-8">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-4'>
          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={windmill} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>

          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={solar} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>

          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={lithium} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>

          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={dam} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>

          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={nature} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>

          <div className=' bg-gray-400 rounded-xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
            <img src={sustainable} className='w-full h-2/3 object-cover object-[70%_0%]'></img>
            <div className='h-1/3 px-6 py-1 flex flex-col justify-center bg-white text-left'>
              <div className='text-altHead font-semibold text-3xl'>Wind energy isn't<br/>reliable enough.</div>
              <div className='text-text font-medium text-xl'>Intermittent wind necessitates backup power,<br/>rendering wind energy less reliable.</div>
            </div>
          </div>
        </div>
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-start mb-12'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-semibold text-left mt-4 mb-8">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
        </h1>
        <img src={aircell} className='object-cover w-full h-[32rem] rounded-2xl'/>
        <div className='flex flex-row mt-8 justify-between'>
          <div className='flex flex-col gap-4 pr-16'>
            <div className='text-head text-3xl font-semibold left-align'>Elaborating the science.</div>
            <div className='font-medium text-xl text-left text-text tracking-tight '>
            Aluminum-air batteries generate electricity through the oxidation of aluminum at the anode, releasing electrons that flow through an external circuit to the cathode, where oxygen reduction occurs. This electrochemical process involves aluminum reacting with oxygen from the air in the presence of an electrolyte, resulting in the production of electricity. Aluminum-air batteries utilize abundant aluminum, producing energy without harmful emissions. Their recyclable design supports a sustainable, closed-loop energy system.
            </div>
          </div>
          <img src={alair} className='w-[40rem]'/>
        </div>
      </section>
    </div>
  )
}

export default Technology
