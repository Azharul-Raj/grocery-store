"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image';
import {FiSearch,FiShoppingCart,FiUser} from 'react-icons/fi';


interface HeaderProps{
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

function ProductsHeader({isOpen,setIsOpen}:HeaderProps) {
  return (
    // <header className='sticky top-0 flex bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-400 z-50'>
    <header className=' bg-white rounded-lg'>
        <div className="flex justify-between mx-2   items-center py-2">
            {/* HAMBURGER ICON */}
                <div onClick={()=>setIsOpen(!isOpen)} className="space-y-1 mr-3 cursor-pointer lg:hidden">
                    <div className="h-0.5 w-5 bg-black"></div>
                    <div className="h-0.5 w-5 bg-black"></div>
                    <div className="h-0.5 w-5 bg-black"></div>
                </div>
            {/* HAMBURGER ICON */}
            <div className="px-8">
            <form className='lg:w-[500px]' action="">
              <div className="relative  ">
                <div className="absolute top-3 left-3">
                  {/* <Image width={18} src={search} alt='search'/> */}
                  <FiSearch/>
                </div>
              <input className='border focus:outline-none text-gray-900 py-2 pl-8 rounded-full w-[80%] md:w-full' placeholder='Search here...' type="text" name="" id="" />
              </div>
            </form>
            </div>
            {/* PROFILE */}
        <div className="flex justify-center items-center space-x-3 cursor-pointer">
          <div className="relative text-black">
            {/* <div className="absolute bg-red-600 rounded-full right-0 -top-1">
              <p className='px-0.5 text-white text-xs'>9</p>
            </div> */}
            <FiShoppingCart size={25}/>
          </div>
          <div className="text-black">
            <div className="absolute bg-red-600 rounded-full right-14 top-3">
              <p className='px-1 text-white text-xs'>9</p>
            </div>
            <FiUser size={25}/>
          </div>
          
        </div>
        </div>
    </header>
  )
}

export default ProductsHeader;