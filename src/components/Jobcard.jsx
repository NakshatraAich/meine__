import React from 'react'

const Jobcard = ({ item }) => {
  return (
    <div className='flex flex-col h-full gap-16 px-8 py-10 rounded-2xl shadow-[0_15px_80px_rgba(120,121,121,0.3)]'>
        <div className='flex flex-col gap-1 flex-grow'>
            <div className='text-3xl leading-[1] font-semibold text-head'>{item.post}</div>
            <div className='text-sm mt-1 font-semibold text-brand'>{item.features}</div>
            <div className='text-sm mt-1 font-medium text-text'>{item.content}</div>
        </div>
        <div className='hover:underline font-medium text-xl text-head mt-auto text-left'>
            Apply
        </div>
    </div>
  )
}

export default Jobcard
