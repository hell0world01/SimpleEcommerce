import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import React from 'react'
import {slides} from './assets/assets'
// import Card from '../Card';
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex(prev => {
            if(prev === 0) return slides.length - 1;
            return prev - 1
        })
    }
    const handleNext = () => {
        setCurrentIndex(prev => {
            if(prev === slides.length -1) return 0;
            return prev + 1;
        })
    }
    const selectedSlide = i => {
        setCurrentIndex(i)
    }
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto my-16 px-4 relative group'>
        <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        </div>
        {/* Left Arrow*/}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl bg-black/20 rounded-full text-white cursor-pointer' onClick={handlePrev}>
            <BsChevronCompactLeft size={30}/>
        </div>
        {/* Right Arrow*/}
        <div className='hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl bg-black/20 rounded-full text-white cursor-pointer' onClick={handleNext}>
            <BsChevronCompactRight size={30}/>
        </div>
        <div className='flex justify-center py-2'>
            {
                slides.map( (_, index) => { 
                    return (
                    <button key={index} onClick={() => selectedSlide(index)}>
                        <RxDotFilled />
                    </button>)})
            }
        </div>
        {/* <Card /> */}
    </div>
  )
}

export default Hero