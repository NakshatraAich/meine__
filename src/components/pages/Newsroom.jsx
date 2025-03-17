import React from 'react'
import Newsbox from '../Newsbox';

const Newsroom = () => {
  
  const news = [
    {
      date: '12-Jan-2024',
      image: 'https://micelio.com/wp-content/uploads/2024/12/DSC00543-scaled.jpg',
      content: 'MEINE Electric Wins Student Startup of the Year 2024 at Micelio Mobility Awards!'
    },
    {
      date: '15-Jan-2024',
      image: 'https://images.moneycontrol.com/static-mcnews/2025/02/20250204092502_Video-3.png?impolicy=website&width=1600&height=900',
      content: 'MEINE Electric Shines on CNBC-TV18 as a Top 5 Finalist in #LeapToUnicorn Season 2!'
    },
    {
      date: '15-Jan-2024',
      image: 'https://drive.usercontent.google.com/download?id=18aV6EgLsKGkkPfg-0MmE82zpYRaQ4ETa',
      content: 'MEINE Electric Recognized at Microsoft\'s Tech Sector Decarbonization Innovation Challenge!'
    },
    {
      date: '12-Jan-2024',
      image: null,
      content: 'MEINE Electric Featured on CNBC-TV18 Young Turks: A Milestone in Our Journey!'
    },
    {
      date: '15-Jan-2024',
      image: null,
      content: 'MEINE Electric Featured in Antler\'s ESG & Impact Report as a Key Driver of Sustainability in India!'
    },
    {
      date: '15-Jan-2024',
      image: null,
      content: 'Insights from Smile Summit: Strengthening Local Supply Chains & Innovation Resilience'
    },{
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
    },{
      date: '12-Jan-2024',
      image: null,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    }
  ];

  return (
    <div className='px-6 xl:px-16 mt-32 lg:mt-64 mb-12'>
      <div className='text-4xl sm:text-6xl lg:text-8xl font-semibold text-head mb-8 lg:mb-16'>Newsroom</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
      {news.map((item, index) => (
          <Newsbox key={index} news={item} />
      ))}
    </div>
    </div>
  )
}

export default Newsroom
