import Link from 'next/link'
import React from 'react'
import prd from '@/public/prd.jpg'
import Image from 'next/image'


const ProductCard = () => {
  return (
    <Link href={'/'} className='w-[18rem] transition-transform duration-300 hover:scale-105'>
        <div className='w-[18rem] '>
        <Image src={prd} className='object-cover h-[18rem] rounded-lg' / >
        </div>
        <div className='px-1 mt-1'>
        <p className='pt-2 font-medium'>Product Name</p>
    <div className='flex justify-between mt-2'>
        <div className='flex gap-4'><p>$499</p>
        <p className='line-through'>$899</p></div>
        <div className='text-[green] text-[14px]'>20% off</div>
    </div>
    </div>
    </Link>
  )
}

export default ProductCard