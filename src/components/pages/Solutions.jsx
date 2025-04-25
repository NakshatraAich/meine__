import React from 'react'
import { NavLink } from 'react-router'
import { heroTech, heroTechSmall, img6, img7 } from '../../assets'
import Accordion from '../Accordion'

const faqItems = [
  {
    title: <div className="sm:text-lg font-semibold text-sm">What is aluminum-air fuel cell technology?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        Aluminum-air fuel cells generate electricity through a chemical reaction between aluminum and oxygen from the ambient air. This reaction produces aluminum hydroxide as a byproduct and releases energy in the process. It is a clean and efficient method of power generation that does not involve combustion or emit carbon, making it a compelling solution for sustainable energy needs.
      </div>
    ),
  },
  {
    title: <div className="sm:text-lg font-semibold text-sm ">How is MEINE Electric's aluminum-air fuel cell different from traditional batteries?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        MEINE Electric's aluminum-air fuel cells are fundamentally different from conventional batteries in that they function as systems of energy generation rather than energy storage. Instead of being recharged electrically, these cells are refueled by physically replacing the aluminum plates, enabling rapid turnaround and uninterrupted availability. This approach eliminates the need for long charging cycles and reduces operational downtime. The technology also offers significantly higher energy density than lithium-ion batteries, providing more energy per unit weight. Importantly, it is inherently safe and non-flammable, with no risk of thermal runaway, making it an ideal solution for demanding and sensitive applications.
      </div>
    ),
  },
  {
    title: <div className="sm:text-lg font-semibold text-sm">How long can the fuel cells provide power, and can the system be scaled?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        Our first-generation aluminum-air fuel cell product delivers over 25 hours of continuous power per aluminum stack under optimal load conditions. The system is designed to be modular and scalable, allowing it to be extended to 100 hours or more depending on the specific energy requirements. Once the energy in the aluminum is depleted, power can be restored simply by replacing the aluminum plates, ensuring minimal disruption and consistent performance across use cases.
      </div>
    ),
  },
  {
    title: <div className="sm:text-lg font-semibold text-sm">How is the aluminum replaced or refueled?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        The refueling process is mechanical and straightforward. When the aluminum plates are depleted, they can be physically replaced with fresh ones. The electrolyte used in the cell is also drained and replenished during this process. Designed with field deployment in mind, this method is safe, quick, and does not require specialized handling or equipment.
      </div>
    ),
  },
  {
    title: <div className="sm:text-lg font-semibold text-sm">What kind of applications can aluminum fuel cells be used for?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        Aluminum-air fuel cells are versatile and adaptable across many sectors. They are ideal for backup power in telecom towers, data centers, and hospitals; for off-grid and remote environments such as mining and construction sites; and for use in defense, mobility, and drone-based applications. Additionally, they are valuable in disaster response scenarios where reliable, transportable power is essential.
      </div>
    ),
  },
  {
    title: <div className="sm:text-lg font-semibold text-sm">What's the environmental impact of this technology?</div>,
    content: (
      <div className="text-sm text-text font-medium">
        This technology operates with zero carbon emissions during use and generates only aluminum hydroxide as a non-toxic byproduct. It uses abundant and recyclable materials, particularly aluminum, which is the most plentiful metal in the Earth’s crust. By avoiding reliance on scarce or hazardous elements like cobalt and lithium, aluminum-air fuel cells represent a cleaner, more sustainable energy pathway with minimal environmental footprint.
      </div>
    ),
  },
]


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
      </section>

      

      <div className='xl:px-16 px-6  my-8 sm:my-12 flex flex-col'>
        <div className='text-head sm:text-base text-sm font-semibold pb-3'>Frequently Asked Questions</div>
        <Accordion items={faqItems} />

        <NavLink 
          to="/Contact" 
          className='sm:mt-16 mt-8 text-white bg-brand rounded-lg p-3 text-base sm:text-xl self-center text-center font-semibold 
                      active:scale-90'>
          Contact Us to know more
        </NavLink>
      </div>

      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>
      
    </div>
  )
}

export default Solutions
