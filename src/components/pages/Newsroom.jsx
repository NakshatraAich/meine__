import React from 'react'
import Newsbox from '../Newsbox';
import { news1,news2,news3,news4,news5,news6,news7,news8,news9 } from '../../assets';

const Newsroom = () => {
  
  const news = [
    {
      date: '12-Jan-2024',
      image: news1,
      content: 'MEINE Electric Wins Student Startup of the Year 2024 at Micelio Mobility Awards!'
    },
    {
      date: '15-Jan-2024',
      image: news2,
      content: 'MEINE Electric Shines on CNBC-TV18 as a Top 5 Finalist in #LeapToUnicorn Season 2!'
    },
    {
      date: '15-Jan-2024',
      image: news3,
      content: 'MEINE Electric Recognized at Microsoft\'s Tech Sector Decarbonization Innovation Challenge!'
    },
    {
      date: '12-Jan-2024',
      image: news4,
      content: 'MEINE Electric Featured on CNBC-TV18 Young Turks: A Milestone in Our Journey!'
    },
    {
      date: '15-Jan-2024',
      image: news5,
      content: 'MEINE Electric Featured in Antler\'s ESG & Impact Report as a Key Driver of Sustainability in India!'
    },
    {
      date: '15-Jan-2024',
      image: news6,
      content: 'Investing in Meine Electric: Creating a solution for limitless renewable energy'
    },
    {
      date: '15-Jan-2024',
      image: news7,
      content: 'Insights from Smile Summit: Strengthening Local Supply Chains & Innovation Resilience'
    },
    {
      date: '12-Jan-2024',
      image: news8,
      content: 'MEINE Electric Showcased to Anna University\'s Vice Chancellor & Former NSIC CMD'
    },
    {
      date: '15-Jan-2024',
      image: news9,
      content: 'MEINE Electric Wins Tamil Nadu Student Innovators (TNSI) Award 2024!'
    }
  ];

  return (
    <div className='px-6 xl:px-16 mt-32 lg:mt-64 mb-12'>
      <div className='text-4xl sm:text-6xl lg:text-8xl font-semibold text-head mb-8 lg:mb-16'>Newsroom</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-8 sm:gap-y-16">
        {news.map((item, index) => (
            <Newsbox key={index} news={item} />
        ))}
      </div>
      <div className='xl:px-16 px-6 mb-8 sm:mb-12 flex flex-col justify-end items-end'>
        <div className='bg-brand w-16 p-2 sm:w-28 rounded-full'></div>
      </div>
    </div>
  )
}

export default Newsroom
