import React from 'react'
import Newsbox from '../Newsbox';

const Newsroom = () => {
  
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
    <div className='px-16 mt-64 mb-12'>
      <div className='text-4xl sm:text-6xl lg:text-8xl font-semibold text-head mb-16'>Newsroom</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-16">
      {news.map((item, index) => (
          <Newsbox key={index} news={item} />
      ))}
    </div>
    </div>
  )
}

export default Newsroom
