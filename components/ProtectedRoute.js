import React from 'react'
import { useRouter } from 'next/navigation';
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
  const router = useRouter();
  const {user_name} = UserAuth()

  if(!user_name){
    return router.push('/')
  }else{
    return children;
  }
}

export default ProtectedRoute
