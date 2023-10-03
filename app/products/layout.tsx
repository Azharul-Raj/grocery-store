'use client'
import { useState,useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ProductHeader from '../components/ProductHeader';
import { PuffLoader } from 'react-spinners';


export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMount,setIsMount]=useState(false);
  const [isOpen,setIsOpen]=useState(false);

  
  useEffect(()=>{
    setIsMount(true)
  },[])
  if(!isMount) return <PuffLoader color="#36d7b7" />
  return (
    <section className='h-screen flex bg-gray-100'>
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {/* Sidebar */}
      <div className=" flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <ProductHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
        {children}
      </div>
    </section>
  )
}