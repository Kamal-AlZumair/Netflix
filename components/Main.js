import React, { useEffect, useState } from 'react'
import requests from '../utils/requests'
import axios from 'axios';
import Image from 'next/image';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
    })
  },[])

  return (
    <div className=' w-full h-[550px] text-white'>
      <div className=' w-full h-full'>
        <div className=' absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <Image width={'1920'} height={'1080'} className='w-full h-full object-cover'  alt={`${movie?.title}`} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}/>
        <div className=' absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className=' my-4'>
            <button className=' border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className=' border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
          </div>
          <p className=' text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className=' truncate w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Main