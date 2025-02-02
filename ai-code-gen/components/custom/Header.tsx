import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
const Header = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 fixed w-full'>
        <Image src={'/logo.png'} alt="alt" width={40} height={40} className='rounded-full'/>
   <div className='flex gap-4'>
   <Button className='rounded-full' variant="ghost">Sign In</Button>
   <Button className='bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all ease-in-out'>
   Get Started</Button>
   </div>
      
    </div>
  )
}

export default Header
