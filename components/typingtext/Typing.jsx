"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Typing = () => {
  return (
    <div className='w-[50vw]'>
        <h1 className='text-[#130f49] text-[3rem] font-bold'>
            HI, I'm <span className='text-[#a5a6ff]'>Shavaiz!</span>
         </h1>
            <h1>
                <span  className='text-[#130f49] text-[3rem] font-bold'>Creative</span> <br />
                    <TypeAnimation
                            preRenderFirstString={false}
                            cursor={false}
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    'Coder',
                                    5000,
                                    'Designer',
                                ]}
                        speed={10}
                        repeat={Infinity}
                        className='text-[#130f49] text-[3rem] font-bold transition-all duration-500 ease-in'
                        />
            </h1>
        <h1 className='text-[#a5a6ff] text-[3rem] font-bold'>Based in Gilgit</h1>
    </div>
  )
}

export default Typing
