import Image from 'next/image'
import React from 'react'
import bg from '../assets/signup_Bg.jpg'
import SavedShow from '../components/SavedShow'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
      <Image className='w-full h-[400px] object-cover' src={bg} alt=''/>
      <div className=' bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className=' absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    <SavedShow/>
    </>
  )
}

export default Account
