import React from 'react';

import { hero, smallHero, antler, grad, venture, arai, aim, hdfc } from '../../assets';
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
    <div>
      <section 
        className="hidden sm:block w-full min-h-[70vh] bg-contain bg-right-top bg-no-repeat" 
        style={{ backgroundImage: `url(${hero})` }}
      >
          <section className="text-center px-6 lg:px-16 pt-[8rem] md:pt-[10rem] xl:pt-[16rem] flex flex-col gap-1 md:gap-2 xl:gap-3">
            <h1 className="text-head text-4xl md:text-4xl xl:text-[4.3rem] xl:leading-[1] font-bold text-left">
              Limitless Energy<br/>with <span className='text-brand'>Metal Air Fuel Cells</span>
            </h1>
            <h2 className='font-medium xl:text-xl md:text-sm text-sm text-left text-text tracking-tight'>
              Revolutionizing energy generation by harnessing the power of metal and<br/>oxygen to create sustainable power solutions for the future
            </h2>
            <div className='flex flex-row gap-2 md:gap-4 mt-2 md:mt-2 xl:mt-6'>
              <NavLink 
                to="/Contact" 
                className='bg-brand px-6 py-2 lg:px-8 lg:py-3 rounded-lg xl:text-base md:text-sm text-xs text-center text-white border-[2.5px] border-brand font-semibold 
                            transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
                Schedule A Call
              </NavLink>
              <NavLink 
                to="/Company" 
                className='px-6 py-2 lg:px-8 lg:py-3 rounded-lg xl:text-base md:text-sm text-xs text-brand text-center font-semibold border-[2.5px] border-brand 
                            transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
                Join Us Onboard
              </NavLink>
            </div>
          </section>
          
          <section className='px-6 lg:px-16 pt-[6rem] md:pt-[8rem] xl:pt-[18rem] flex flex-col gap-3'>
            <div className='font-semibold text-head text-2xl md:text-3xl xl:text-4xl'>
              About <span className='text-brand'>Meine Electric</span>
            </div>
            <div className='font-medium text-sm md:text-lg xl:text-2xl text-left text-text tracking-tight'>
                Meine Electric is an Indian company pioneering innovation in energy manufacturing<br/>and technology. Our reliable, cost-effective, multi-day energy solutions are<br/>designed to ensure energy security.
            </div>
            <div className='text-sm md:text-base font-semibold text-head mt-4'>
              Backed By
            </div>
            <div className='flex flex-row flex-wrap gap-4 md:gap-12'>
              <img src={antler} className='h-7 xl:h-10 grayscale'/>
              <img src={grad} className='h-7 xl:h-10 grayscale'/>
              <img src={venture} className='h-7 xl:h-10 grayscale'/>
              <img src={arai} className='h-7 xl:h-10 grayscale'/>
              <img src={aim} className='h-7 xl:h-10 grayscale'/>
              <img src={hdfc} className='h-7 xl:h-10 grayscale'/>
            </div>
          </section>  
      </section>

      <section>
        <section 
          className='sm:hidden flex flex-col w-full min-h-[100vh] bg-cover bg-right-top bg-no-repeat'
          style={{ backgroundImage: `url(${smallHero})` }}
        >
            <div className='px-6 mt-[34rem] font-bold text-left text-head text-3xl leading-[1]'> 
              Limitless Energy with <span className='text-brand'>Metal Air Fuel Cells</span>
            </div>
            <div className='px-6 mt-2 font-sm text-left text-text font-medium tracking-tight'> 
              Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future          
            </div>
            <div className='px-6 mt-4 flex flex-row w-full gap-4'>
              <div className='py-3 px-6 flex-grow text-center border-[3px] border-brand bg-brand text-white font-semibold text-sm rounded-lg'>Schedule A Call</div>
              <div className='py-3 px-6 flex-grow text-center border-[3px] border-brand text-brand font-semibold text-sm rounded-lg'>Join Us Onboard</div>
            </div>
        </section>

        <section className='px-6 pt-[4rem] pb-[2rem] sm:hidden flex flex-col gap-3'>
          <div className='font-semibold text-head text-2xl md:text-3xl xl:text-4xl'>
            About <span className='text-brand'>Meine Electric</span>
          </div>
          <div className='font-medium text-lg xl:text-2xl text-left text-text tracking-tight'>
              Meine Electric is an Indian company pioneering innovation in energy manufacturing<br/>and technology. Our reliable, cost-effective, multi-day energy solutions are<br/>designed to ensure energy security.
          </div>
          <div className='text-sm md:text-base font-semibold text-head mt-4'>
            Backed By
          </div>
          <div className='flex flex-row flex-wrap gap-4 md:gap-12'>
            <img src={antler} className='h-7 xl:h-10 grayscale'/>
            <img src={grad} className='h-7 xl:h-10 grayscale'/>
            <img src={venture} className='h-7 xl:h-10 grayscale'/>
            <img src={arai} className='h-7 xl:h-10 grayscale'/>
            <img src={aim} className='h-7 xl:h-10 grayscale'/>
            <img src={hdfc} className='h-7 xl:h-10 grayscale'/>
          </div>
        </section> 
      </section>

             
      <section className='px-6 lg:px-16 pt-32 hidden sm:flex flex-col gap-3'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-2xl sm:text-4xl xl:text-[3rem] xl:leading-[1] font-bold text-left mt-4 mb-8">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row w-full h-[16rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <img src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" className='flex-grow basis-1/2 bg-gray-200'></img>
            <div className='flex-grow basis-1/2 pr-10 xl:pr-16 gap-3 flex flex-col justify-center'>
              <div className='text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable <br className='xl:block hidden'/>Energy</div>
              <div className='font-medium text-lg xl:text-xl text-left text-text tracking-tight xl:pr-48'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div>          
            </div>
          </div>
          <div className='flex flex-row w-full h-[16rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <div className='basis-1/2 flex flex-col items-center'>
              <div className='flex-grow pl-[4rem] xl:pl-[6rem] xl:pr-[4rem] gap-3 flex flex-col justify-center'>
                <div className=' w-fit text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable Energy</div>
                <div className=' w-fit lg:pr-8 items-end flex flex-col font-medium text-lg xl:text-xl text-left text-text tracking-tight'>
                  Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
                </div>          
              </div>
            </div>
            <img src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"  className='flex-grow basis-1/2 bg-gray-200'></img>
          </div>
          <div className='flex flex-row w-full h-[16rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <img src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"  className='flex-grow basis-1/2 bg-gray-200'></img>
            <div className='flex-grow basis-1/2 pr-10 xl:pr-16 gap-3 flex flex-col justify-center'>
              <div className='text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable <br className='xl:block hidden'/>Energy</div>
              <div className='font-medium text-lg xl:text-xl text-left text-text tracking-tight xl:pr-48'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div>          
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 lg:px-16 pt-16 sm:hidden flex flex-col gap-3'>
        <div className='bg-brand p-2 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] font-bold text-left mt-2 mb-6">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cells
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" 
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable <br className='xl:block hidden'/>Energy</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div> 
            </div> 
          </div>

          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" 
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable <br className='xl:block hidden'/>Energy</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div> 
            </div> 
          </div>

          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" 
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>Paving the way for Sustainable <br className='xl:block hidden'/>Energy</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
                Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable power solutions for the future
              </div> 
            </div> 
          </div>
        </div>

      </section>

      <section className='px-6 lg:px-16 pt-20 flex flex-col gap-3 items-center'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
        <h1 className="text-head text-2xl sm:text-4xl xl:text-[3rem] leading-[1] font-bold text-center mt-2 sm:mt-4 mb-6 sm:mb-8">
          Leveraging <span className='text-brand'>Aluminum</span> for<br/>Limitless Energy
        </h1>
        <div className='flex flex-col lg:flex-row w-full gap-4 lg:gap-8'>
          <img 
            className='bg-gray-400 rounded-lg sm:rounded-2xl w-full lg:w-1/2'
            src="https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" />
          <div className='sm:p-2 flex flex-col gap-4 lg:gap-8 justify-center w-full lg:w-1/2'>
            <div className='font-medium text-base sm:text-lg xl:text-xl text-left text-text tracking-tight'>
              Revolutionizing energy storage by leveraging widely available materials such as aluminum and the natural abundance of atmospheric oxygen, we are developing highly efficient, scalable, and environmentally sustainable power solutions that have the potential to transform the future of clean energy, ensuring long-term energy security and reducing dependence on fossil fuels
            </div>
            <div className='bg-brand px-6 sm:px-8 text-xs sm:text-sm xl:text-base xl:px-8 py-3 rounded-lg text-center text-white border-[2.5px] border-brand font-semibold 
                        transition-all duration-200 ease-in-out active:scale-95 cursor-pointer w-fit'>
              Explore Our Technology
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 lg:px-16 pt-20 flex flex-col gap-3 imb-12 tems-start mb-12'>
        <div className='text-head text-2xl font-semibold left-align'>Latest News</div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-8'>
          {news.map((item, index) => (
            <Newsbox key={index} news={item} />
          ))}
        </div>
        <NavLink to="/Newsroom" className='mt-16 text-sm font-semibold text-brand text-center pr-4'>Check our latest news and featurings</NavLink>
      </section>

    </div>
  );
};

export default Homepage;
