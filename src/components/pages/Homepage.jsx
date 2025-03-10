import React from 'react';

import { hero, antler, grad, venture, arai, aim, hdfc } from '../../assets';
import Newsbox from '../Newsbox';

import { NavLink } from 'react-router';

const Homepage = () => {
  
  const news = [
    {
      date: '12-Jan-2024',
      image: null,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
      date: '15-Jan-2024',
      image: null,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      date: '15-Jan-2024',
      image: null,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
  ];
  

  return (
    <div 
      className="w-full min-h-[240vh] bg-contain bg-top bg-no-repeat" 
      style={{ backgroundImage: `url(${hero})` }}
    >
      <section className="text-center px-16 pt-[16rem] flex flex-col gap-3">
        <h1 className="text-head text-[4.3rem] leading-[1] font-bold text-left">
          Limitless Energy<br/>with <span className='text-brand'>Metal Air Fuel Cells</span>
        </h1>
        <h2 className='font-medium text-xl text-left text-text tracking-tight'>
          Revolutionizing energy generation by harnessing the power of metal and<br/>oxygen to create sustainable power solutions for the future
        </h2>
        <div className='flex flex-row gap-8 mt-6'>
          <NavLink 
            to="/Contact" 
            className='bg-brand px-8 py-3 rounded-lg text-center text-white border-[2.5px] border-brand font-semibold 
                        transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
            Schedule A Call
          </NavLink>
          <NavLink 
            to="/Company" 
            className='px-8 py-3 rounded-lg text-brand text-center font-semibold border-[2.5px] border-brand 
                        transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
            Join Us Onboard
          </NavLink>
        </div>
      </section>

      <section className='px-16 pt-[18rem] flex flex-col gap-3'>
        <div className='font-semibold text-head text-4xl'>
          About <span className='text-brand'>Meine Electric</span>
        </div>
        <div className='font-medium text-2xl text-left text-text tracking-tight'>
            Meine Electric is an Indian company pioneering innovation in energy manufacturing<br/>and technology. Our reliable, cost-effective, multi-day energy solutions are<br/>designed to ensure energy security.
        </div>
        <div className='font-semibold text-head mt-4'>
          Backed By
        </div>
        <div className='flex flex-row gap-8'>
          <img src={antler} className='h-10 grayscale'/>
          <img src={grad} className='h-10 grayscale'/>
          <img src={venture} className='h-10 grayscale'/>
          <img src={arai} className='h-10 grayscale'/>
          <img src={aim} className='h-10 grayscale'/>
          <img src={hdfc} className='h-10 grayscale'/>
        </div>
      </section>  
      
      <section className='px-16 pt-32 flex flex-col gap-3'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-bold text-left mt-4 mb-8">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row w-full h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-32 overflow-hidden'>
            <div className='flex-grow basis-1/2 bg-gray-200'></div>
            <div className='flex-grow basis-1/2 pr-16 gap-3 flex flex-col justify-center'>
              <div className='text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable<br/>Energy</div>
              <div className='font-medium text-xl text-left text-text tracking-tight pr-48'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div>          
            </div>
          </div>

          <div className='flex flex-row w-full h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-32 overflow-hidden'>
            <div className='basis-1/2 flex flex-col items-center'>
              <div className='flex-grow pl-[6rem] pr-[4rem] gap-3 flex flex-col justify-center'>
                <div className=' w-fit text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable Energy</div>
                <div className=' w-fit pr-8 items-end flex flex-col font-medium text-xl text-left text-text tracking-tight'>
                  Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
                </div>          
              </div>
            </div>
            <div className='flex-grow basis-1/2 bg-gray-200'></div>
          </div>

          <div className='flex flex-row w-full h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-32 overflow-hidden'>
            <div className='flex-grow basis-1/2 bg-gray-200'></div>
            <div className='flex-grow basis-1/2 pr-16 gap-3 flex flex-col justify-center'>
              <div className='text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable<br/>Energy</div>
              <div className='font-medium text-xl text-left text-text tracking-tight pr-48'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div>          
            </div>
          </div>
        </div>
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 items-center'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-[3rem] leading-[1] font-bold text-center mt-4 mb-8">
          Leveraging <span className='text-brand'>Aluminum</span> for<br/>Limitless Energy
        </h1>
        <div className='flex flex-row w-full gap-12'>
          <div className='basis-1/2 p-2 h-[28rem] bg-gray-400 rounded-2xl'></div>
          <div className='basis-1/2 p-2 h-[28rem] flex flex-col gap-8 justify-center'>
            <div className='font-medium text-xl text-left text-text tracking-tight'>
              Revolutionizing energy storage by leveraging widely available materials such as aluminum and the natural abundance of atmospheric oxygen, we are developing highly efficient, scalable, and environmentally sustainable power solutions that have the potential to transform the future of clean energy, ensuring long-term energy security and reducing dependence on fossil fuels
            </div>
            <div className='bg-brand px-8 py-3 rounded-lg text-center text-white border-[2.5px] border-brand font-semibold 
                        transition-all duration-200 ease-in-out active:scale-95 cursor-pointer w-fit'>
              Explore Our Technology
            </div>
          </div>
        </div>
      </section>

      <section className='px-16 pt-20 flex flex-col gap-3 imb-12 tems-start mb-12'>
        <div className='text-head text-2xl font-semibold left-align'>Latest News</div>
        <div className='flex flex-row justify-between gap-8'>
          {news.map((item, index) => (
            <Newsbox key={index} news={item} />
          ))}
        </div>
        <NavLink to="/Newsroom" className='mt-8 text-sm font-semibold text-brand text-center pr-4'>Check our latest news and featurings</NavLink>
      </section>

    </div>
  );
};

export default Homepage;
