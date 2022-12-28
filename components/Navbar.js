import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const {user_name,logOut} = UserAuth()
  const router = useRouter();
  const handleLogout = async () =>{
    try {
      await logOut()
      router.push('/')
    } catch(error){

    }
  };


  return (
    <header className=' flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link href={'/'}>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {user_name?.email ? <div>
        <Link href={'/Account'}>
        <button className=' text-white pr-4'>Account</button>
        </Link>
        
        <button onClick={handleLogout} className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
        
      </div> : <div>
        <Link href={'/Login'}>
        <button className=' text-white pr-4'>Sign In</button>
        </Link>
        <Link href={'/SignUp'}>
        <button className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </Link>
      </div>}
    </header>
  )
}

export default Navbar
