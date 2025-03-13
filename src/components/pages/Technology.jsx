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
          MEINE Electric pioneers metal-air fuel cells with<br/>advanced R&D, strong IP, and a focus on performance,<br/>scalability, and efficiency.
          </div> 
        </div> 
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-start mb-12'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-bold text-left mt-4">
          Inside the Technology That is <br/>Redefining <span className='text-brand'>Energy Security</span> 
        </h1>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-col gap-4 pr-16 w-2/3'>
            <div className='font-medium text-xl text-left text-text tracking-tight '>
            Aluminum-air batteries generate electricity through the oxidation of aluminum at the anode, releasing electrons that flow through an external circuit to the cathode, where oxygen reduction occurs. This electrochemical process involves aluminum reacting with oxygen from the air in the presence of an electrolyte, resulting in the production of electricity. Aluminum-air batteries utilize abundant aluminum, producing energy without harmful emissions. Their recyclable design supports a sustainable, closed-loop energy system.
            </div>
          </div>
          <img src={alair} className='w-1/3'/>
        </div>
        <img src={aircell} className='object-cover w-full h-[32rem] rounded-2xl'/>
      </section>
    </div>
  )
}

export default Technology
