import React from 'react'
import Typing from '../typingtext/Typing'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='flex justify-center items-center gap-5 w-full bg-[#effbf8] h-[100vh]'>
         <Typing />
         <div className="w-[50vw]">
            <Image src="/2.png" width={500} height={500} alt="hero image"/>
         </div>
    </div>
  )
}

export default Hero
