import React from 'react'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'
import {BiHappyAlt} from 'react-icons/bi'
import {FaDivide, FaWind} from 'react-icons/fa'
import {ImDroplet} from 'react-icons/im'

const Others = ({data}) => {


  return (
    <div>
        {data.main ? 
        <div className='grid grid-cols-3 gap-1'>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <AiOutlineArrowDown />
                    <p>Min</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.main ? Number((data.main.temp_min-32)*5/9).toFixed(0) : null} &#176;C
                </p>
            </div>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <AiOutlineArrowUp />
                    <p>Max</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.main ? Number((data.main.temp_max-32)*5/9).toFixed(0) : null} &#176;C
                </p>
            </div>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <BiHappyAlt />
                    <p>Feels Like</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.main ? Number((data.main.feels_like-32)*5/9).toFixed(0) : null} &#176;C
                </p>
            </div>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <FaDivide />
                    <p>Pressure</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.main ? data.main.pressure : null} hPa
                </p>
            </div>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <ImDroplet />
                    <p>Humidity</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.main ? data.main.humidity : null} %
                </p>
            </div>
            <div className='bg-black/50 px-1 py-1 text-slate-300 rounded-md'>
                <div className='others'>
                    <FaWind />
                    <p>Wind Speed</p>
                </div>
                <p className='text-2xl text-center'>
                    {data.wind ? data.wind.speed : null} m/s
                </p>
            </div>
        </div>
        : null }
    </div>
   
  )
}

export default Others
