import React from 'react'
import CollectionCard from '../../Components/CollectionCard'
CollectionCard
const page = () => {
  return (
   <>
   
   
   <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto ml-12 my-10'>
    <CollectionCard/>
    <CollectionCard/>
    <CollectionCard/>
   </div>
   </>
  )
}

export default page