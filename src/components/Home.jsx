import React from 'react'
import Search from './Search'

const Home = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-fill absolute top-0 left-0'
        src="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='w-full py-3 px-5 sm:w-[500px] bg-blue-200/50 h-full z-20 absolute top-0 left-0 sm:left-[50%] sm:translate-x-[-50%]'>
            <Search />
        </div>
    </div>
  )
}

export default Home
