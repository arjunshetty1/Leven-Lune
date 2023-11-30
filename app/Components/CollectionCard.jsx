import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import c1 from '@/public/collection1.jpg'


const CollectionCard = () => {
  return (
    <>
    <Link href={'/'} className='transition-transform duration-300 hover:scale-105' >
    
    <Image className='object-cover w-[22rem] h-[22rem] rounded-lg ' src={c1}/>
    <p className='mt-3 text-xl px-2'>Collection Name</p>

    </Link>
    </>
  )
}

export default CollectionCard