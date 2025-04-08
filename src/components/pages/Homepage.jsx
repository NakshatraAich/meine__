import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Newsbox from "../Newsbox"; // Ensure correct path
import { useState, useRef } from "react";

import { hero, smallHero, antler, grad, venture, arai, aim, hdfc, img1, img2, img3, img4} from '../../assets';
import { news1,news2,news3,news4,news5,news6,news7,news8,news9,news10,news11 } from '../../assets';

import { NavLink } from 'react-router';

const Homepage = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const news = [
      {
        image: news11,
        content: 'Felicitated by Hon\'ble Minister of Commerce & Industry Shri Piyush Goyal at Startup Mahakumbh.',
        link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meinelectric-movefastbuildthings-deeptech-activity-7314505968090800129-HQY7/?rcm=ACoAADaEQ-wBJydGZrDNbomXjUOokVzxbaCVyzo'
      },
     {
       image: news1,
       content: 'MEINE Electric Wins Student Startup of the Year 2024 at Micelio Mobility Awards.',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_cleanenergy-meineelectric-movefastbuildthings-ugcPost-7261298015968055296-bkL-/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
      image: news10,
      content: 'MEINE Electric featured on CNBC-TV18 as a Top 5 Finalist in LeapToUnicorn Season 2',
      link: 'https://www.linkedin.com/posts/stuti-kakkar_stealth-spotlight-leaptounicorn-activity-7268657594808832001-l6kD/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news2,
       content: 'MEINE Electric Named a Top 5 Finalist in #LeapToUnicorn Season 2.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_top-5-startups-of-2024-grand-finale-episode-activity-7268519955912888320-crgW/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news3,
       content: 'MEINE Electric Recognized at Microsoft\'s Tech Sector Decarbonization Innovation Challenge.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_decarbonizing-datacentres-ai-activity-7266715955005665281-ann8/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news4,
       content: 'MEINE Electric Featured on CNBC-TV18 Young Turks: A Milestone in Our Journey.',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastbuildthings-bigthingsahead-ugcPost-7275778387028119552-91rF/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news5,
       content: 'MEINE Electric Featured in Antler\'s ESG & Impact Report as a Key Driver of Sustainability in India.',
       link: 'https://www.linkedin.com/posts/stuti-kakkar_indias-sustainability-leap-activity-7299133370960072704-jLaV/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news6,
       content: 'Investing in Meine Electric: Creating a solution for limitless renewable energy',
       link: 'https://www.antler.co/blog/investing-in-meine-electric-creating-a-solution-for-limitless-renewable-energy'
     },
     {
       image: news7,
       content: 'Insights from Smile Summit: Strengthening Local Supply Chains & Innovation Resilience',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-movefastandbuildthings-hydrogenfuelcells-activity-7227715300148862976-2Ut2/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news8,
       content: 'MEINE Electric Showcased to Anna University\'s Vice Chancellor & Former NSIC CMD',
       link: 'https://www.linkedin.com/posts/priyansh-mohan-2002_meineelectric-sustainableenergy-innovation-activity-7215699877467455488-nSrm/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     },
     {
       image: news9,
       content: 'MEINE Electric Wins Tamil Nadu Student Innovators (TNSI) Award 2024.',
       link: 'https://www.linkedin.com/feed/update/urn:li:activity:7010884927990710272/?rcm=ACoAADVLxlcBv-YgidtwKXSHjFebL_hgw1Px-7A'
     }
   ];

  return (
    <div>
      <section 
        className="hidden sm:block w-full min-h-[70vh] bg-contain bg-right-top bg-no-repeat" 
        style={{ backgroundImage: `url(${hero})` }}
      >
          <section className="text-center px-6 xl:px-16 pt-[8rem] md:pt-[10rem] xl:pt-[16rem] flex flex-col gap-1 md:gap-2 xl:gap-3">
            <h1 className="text-head text-4xl md:text-4xl xl:text-[4.3rem] xl:leading-[1] font-bold text-left">
              Limitless Energy<br/>with <span className='text-brand'>Metal Air Fuel Cells</span>
            </h1>
            <h2 className='font-medium xl:text-xl md:text-base text-base text-left text-text tracking-tight'>
              Revolutionizing energy generation by harnessing the power of metal and<br/>oxygen to create sustainable energy solutions for the future
            </h2>
            <div className='flex flex-row gap-2 md:gap-4 mt-2 md:mt-2 xl:mt-6'>
              <NavLink 
                to="/Solutions" 
                className='bg-brand px-6 py-2 lg:px-8 lg:py-3 rounded-lg xl:text-base md:text-sm text-xs text-center text-white border-[2.5px] border-brand font-semibold 
                            transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
                Learn More
              </NavLink>
              <NavLink 
                to="/Contact Us" 
                className='px-6 py-2 lg:px-8 lg:py-3 rounded-lg xl:text-base md:text-sm text-xs text-brand text-center font-semibold border-[2.5px] border-brand 
                            transition-all duration-200 ease-in-out active:scale-95 cursor-pointer'>
                Contact Us
              </NavLink>
            </div>
          </section>
          
          <section className='px-6 xl:px-16 pt-[6rem] md:pt-[8rem] xl:pt-[18rem] flex flex-col gap-3'>
          <div className='text-sm md:text-base font-semibold text-head mt-9 text-center'>
              Backed By
            </div>
            <div className='flex flex-row flex-wrap gap-4 md:gap-12 items-center justify-center mb-28'>
              <img src={antler} className='h-7 xl:h-10 grayscale'/>
              <img src={grad} className='h-7 xl:h-10 grayscale'/>
              <img src={venture} className='h-7 xl:h-10 grayscale'/>
              <img src={arai} className='h-7 xl:h-10 grayscale'/>
              <img src={aim} className='h-7 xl:h-10 grayscale'/>
              <img src={hdfc} className='h-7 xl:h-10 grayscale'/>
            </div>
            <div className='font-semibold text-head text-2xl md:text-3xl xl:text-4xl'>
              About <span className='text-brand'>Meine Electric</span>
            </div>
            <div className='font-medium text-sm md:text-lg xl:text-2xl text-left text-text tracking-tight max-w-[1000px]'>
            MEINE Electric is an Indian deep-tech company at the forefront of energy innovation. We are developing cutting-edge metal-air technology to deliver multi-day, reliable, and cost-effective energy backup—reinventing energy security and powering a sustainable future.
            </div>
          </section>  
      </section>

      <section>
        <section 
        className='sm:hidden flex flex-col w-full min-h-[100vh]                                                                        0vh] bg-cover bg-right-top bg-no-repeat'
        style={{ backgroundImage: `url(${smallHero})` }}
      >
        {/* Spacer div to push content to the bottom */}
        <div className="flex-grow"></div>

        {/* Text Content */}
        <div className="px-6 font-bold text-left text-head text-3xl leading-[1]"> 
          Limitless Energy with <span className='text-brand'>Metal Air Fuel Cells</span>
        </div>
        <div className="px-6 mt-2 font-sm text-left text-text font-medium tracking-tight"> 
          Revolutionizing energy generation by harnessing the power of metal and oxygen to create sustainable energy solutions for the future          
        </div>
        <div className="px-6 mt-4 flex flex-row w-full gap-4">
          <NavLink to='/Contact' className='py-3 px-6 flex-grow text-center border-[3px] border-brand bg-brand text-white font-semibold text-sm rounded-lg'>Schedule A Call</NavLink>
          <NavLink to='/Company' className='py-3 px-6 flex-grow text-center border-[3px] border-brand text-brand font-semibold text-sm rounded-lg'>Join Us Onboard</NavLink>
        </div>
      </section>


        <section className='px-6 pt-[4rem] sm:hidden flex flex-col gap-3'>
          <div className='text-sm md:text-base font-semibold text-head text-center'>
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
          <div className='font-semibold text-head text-2xl md:text-3xl xl:text-4xl mt-12'>
            About <span className='text-brand'>Meine Electric</span>
          </div>
          <div className='font-medium text-lg xl:text-2xl text-left text-text tracking-tight'>
            MEINE Electric is an Indian deep-tech company at the forefront of energy innovation. We are developing cutting-edge metal-air technology to deliver multi-day, reliable, and cost-effective energy backup—reinventing energy security and powering a sustainable future.          
          </div>
        </section> 
      </section>
             
      <section className='px-6 xl:px-16 pt-16 hidden md:flex flex-col gap-3'>
        <div className='bg-brand p-2 w-28 rounded-full'></div>
        <h1 className="text-head text-2xl sm:text-4xl xl:text-[3rem] xl:leading-[1] font-bold text-left mt-4 mb-8">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cell
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-row w-full h-[20rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <img src={img1}
            className='flex-grow w-1/2 bg-gray-200'></img>
            <div className='flex-grow w-1/2 py-8 pr-10 xl:pr-12 gap-3 flex flex-col justify-center'>
              <div className='text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>Uninterrupted power when<br className='xl:block hidden'/>you need it most</div>
              <div className='font-medium text-lg xl:text-xl text-left text-text tracking-tight xl:pr-48'>
                Aluminum-air technology delivers an ultra-high energy density, providing 100+ hours of reliable backup. Refuelling is instant—simply replace the aluminum, and the system is ready to power on with no downtime.
              </div>          
            </div>
          </div>
          <div className='flex flex-row w-full h-[20rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <div className='w-1/2 flex flex-col items-center'>
              <div className='flex-grow pl-[2rem] py-8 xl:pl-[6rem] xl:pr-[4rem] gap-3 flex flex-col justify-center'>
                <div className=' w-fit text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>Clean energy for a decarbonized future.
                </div>
                <div className=' w-fit lg:pr-8 items-end flex flex-col font-medium text-lg xl:text-xl text-left text-text tracking-tight'>
                Aluminum-air fuel cells produce no direct carbon emissions and operate silently, making them a game-changer for industrial decarbonization and sustainable power generation.
                </div>          
              </div>
            </div>
            <img src={img2} 
            className='flex-grow w-1/2 bg-gray-200'></img>
          </div>
          <div className='flex flex-row w-full h-[20rem] xl:h-[24rem] rounded-3xl shadow-[0_15px_80px_rgba(120,121,121,0.2)] gap-8 lg:gap-24 xl:gap-32 overflow-hidden'>
            <img src={img3}
            className='flex-grow w-1/2 bg-gray-200'></img>
            <div className='flex-grow w-1/2 py-8 pr-10 xl:pr-12 gap-3 flex flex-col justify-center'>
              <div className='text-2xl xl:text-3xl font-semibold text-altHead leading-[1]'>The most accessible energy<br className='xl:block hidden'/>source on the Planet</div>
              <div className='font-medium text-lg xl:text-xl text-left text-text tracking-tight xl:pr-48'>
                Aluminum, making up 8% of the Earth's crust, is the most abundant metal on the planet. It enables a decentralized energy supply chain, ensuring accessibility, affordability, and energy independence.
              </div>          
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 xl:px-16 pt-16 md:hidden flex flex-col gap-3'>
        <div className='bg-brand p-2 w-16 rounded-full'></div>
        <h1 className="text-head text-2xl leading-[1] font-bold text-left mt-2 mb-6">
          Utilizing <span className='text-brand'>Aluminum</span> To Develop<br/>A New-Age Fuel Cell
        </h1>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src={img1}
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>Uninterrupted power when <br className='xl:block hidden'/>you need it most</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
              Aluminum-air technology delivers an ultra-high energy density, providing 100+ hours of reliable backup. Refuelling is instant—simply replace the aluminum, and the system is ready to power on with no downtime.              </div> 
            </div> 
          </div>

          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src={img2} 
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>Clean energy for a decarbonized future.</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
              Aluminum-air fuel cells produce no direct carbon emissions and operate silently, making them a game-changer for industrial decarbonization and sustainable power generation.              </div> 
            </div> 
          </div>

          <div className='flex flex-col rounded-3xl overflow-hidden shadow-[0_15px_80px_rgba(120,121,121,0.4)]'>
            <img 
            src={img3}
            className='h-[24rem]'/>
            <div className='flex flex-col p-6 gap-1'>
              <div className='text-xl font-semibold text-altHead leading-[1]'>The most accessible energy source on the Planet</div>
              <div className='font-medium text-base text-left text-text tracking-tight'>
              Aluminum, making up 8% of the Earth's crust, is the most abundant metal on the planet. It enables a decentralized energy supply chain, ensuring accessibility, affordability, and energy independence.
              </div> 
            </div> 
          </div>
        </div>

      </section>

      <section className='px-6 xl:px-16 pt-20 flex flex-col gap-3 items-center'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
        <h1 className="text-head text-2xl sm:text-4xl xl:text-5xl font-bold text-center mt-2 sm:mt-4 mb-6 sm:mb-8">
        Breakthrough <span className='text-brand'>Energy Technology</span><br/>for a Resilient World
        </h1>
        <div className='flex flex-col lg:flex-row w-full gap-4 lg:gap-8'>
          <img 
            className='bg-gray-400 rounded-lg sm:rounded-2xl w-full lg:w-1/2'
            src={img4} />
          <div className='sm:p-2 flex flex-col gap-4 lg:gap-8 justify-center w-full lg:w-1/2'>
            <div className='font-medium text-base sm:text-lg xl:text-xl text-left text-text tracking-tight'>
            By leveraging aluminum & oxygen, we are redefining how energy is stored, transported, and utilized—building a resilient & energy secure future free from fossil fuels and dependence on grid. 
            </div>
            <NavLink
            to="/Technology" 
              className='bg-brand px-6 sm:px-8 text-xs sm:text-sm xl:text-base xl:px-8 py-3 rounded-lg text-center text-white border-[2.5px] border-brand font-semibold 
                        transition-all duration-200 ease-in-out active:scale-95 cursor-pointer w-fit '>
              Explore Our Technology
            </NavLink>
          </div>
        </div>
      </section>

      <div className="w-full xl:px-16 px-6 pt-12">

        <div className="flex justify-between items-center mb-4 px-2">
          <h2 className="text-xl font-bold">Latest News</h2>
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className={`p-2 rounded-full ${
                isBeginning ? "bg-gray-300 opacity-30 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={isBeginning}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className={`p-2 rounded-full ${
                isEnd ? "bg-gray-300 opacity-30 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={isEnd}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1} // Default value
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            640: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {news.map((item, index) => (
            <SwiperSlide key={index} className="px-2">
              <Newsbox news={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>
    </div>
  );
};

export default Homepage;
