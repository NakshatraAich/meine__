import React from 'react';

const Newsbox = ({ news }) => {
    return (
        <div className='flex flex-col w-full gap-2 h-[24rem] justify-between'>
            <div>
                {/* <div className='text-xs'>{news.date}</div> */}
                <img src = {news.image} height="256px" width="auto" className='w-full h-64 rounded-xl flex-shrink-0 mt-2 object-cover' alt='image'></img> {/* Fixed 16rem x 16rem */}
                <div className='text-lg mt-2 text-altHead font-semibold '>{news.content}</div>
            </div>
            {/* <div className='text-sm font-medium text-text cursor-pointer hover:underline'>Know More</div> */}
        </div>
    )
}

export default Newsbox;