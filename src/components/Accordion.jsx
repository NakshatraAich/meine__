import React, { useState } from 'react'
import { motion } from 'motion/react'

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden"
        >
          <div
            className={`py-2 font-semibold cursor-pointer border-b-[0.5px] border-text transition-all duration-300 ease-in-out 
            ${activeIndex === index ? 'text-xs text-brand' : 'text-text'}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>

          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: activeIndex === index ? 'auto' : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-2 pt-4 text-white">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
