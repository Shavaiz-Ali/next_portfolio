"use client";
import { useState } from 'react';
import { NavData } from '@/utils/Constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {FaFacebookF} from "react-icons/fa6";
import {FaLinkedinIn} from "react-icons/fa6";
import {AiOutlineGithub} from "react-icons/ai";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home")
  return (
    <nav className='flex flex-col justify-center items-center w-[320px] h-[100vh] fixed top-0 left-0 float-right border-r border-black/[0.15]'>
        <div className="flex flex-col justify-center items-center">
            <div className="relative h-[90px] w-[90px] rounded-full border border-purple-600">
                <Image src={"/1.jpg"} fill alt='logo' className='absolute rounded-full object-cover'/>
            </div>
            <h3 className='relative text-[40px] text-gray-300/[0.25] tracking-tighter font-bold top-[-16px]'>
                𝒮𝒽𝒶𝓋𝒶𝒾𝓏 𝒜𝓁𝒾
             <span className="absolute text-[#130f49] text-[1.2rem] font-semibold top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] tracking-normal">Shavaiz Ali</span>
            </h3>
        </div>
        <ul className="flex flex-col justify-center items-center gap-5 my-[2.4rem]">
            {
                NavData.map((item) =>(
                    <Link href={item.link} key={item.id} className={`text-[14px] ${activeTab === item.name ? "text-purple-600" : "text-black/[0.50]"}`} onClick={() => {setActiveTab(item.name)}}>{item.name}</Link>
                ))
            }
        </ul>
        <div className="flex justify-center items-center flex-col gap-4">
            <div className="flex justify-center items-center gap-4">
                <Link href={"/"} className='h-[40px] w-[40px] bg-gray-200/[0.35] rounded-full flex justify-center items-center'><FaFacebookF /></Link>
                <Link href={"/"} className='h-[40px] w-[40px] bg-gray-200/[0.35] rounded-full flex justify-center items-center'><FaLinkedinIn /></Link>
                <Link href={"/"} className='h-[40px] w-[40px] bg-gray-200/[0.35] rounded-full flex justify-center items-center'><AiOutlineGithub /></Link>
            </div>
            <div className="text-center w-[80%]">
                <p className="text-[15px] text-[black]/[0.50]">Copyright © 2023 Robert Elisc. All rights reserved.</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
