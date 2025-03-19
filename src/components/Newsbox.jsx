import React from 'react';

const Newsbox = ({ news }) => {
    return (
        <div className='flex flex-col w-full gap-0 h-[24rem] justify-between'>
            <div>
                {/* <div className='text-xs'>{news.date}</div> */}
                <img src = {news.image} height="256px" width="auto" className='object-cover object-top w-full h-64 rounded-xl flex-shrink-0 mt-2 objec-cover' alt='image'></img> {/* Fixed 16rem x 16rem */}
                <div className='text-lg mt-2 text-altHead font-semibold '>{news.content}</div>
            </div>
            <div className='text-sm font-medium text-text cursor-pointer hover:underline self-start pb-4'><a target="_blank" href={news.link}>Know More</a></div>
        </div>
    )
}

export default Newsbox;