import React from 'react'

const Temperature = ({data}) => {
  return (
    <div className='flex flex-col justify-center w-full items-center'>
        <img className='w-44 p-0' src={`http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : null}@2x.png`} alt="" />
        <p className='text-slate-300 capitalize text-xl'>
            {data.weather ? data.weather[0].description : null}
        </p>
        <p className='text-7xl text-white font-bold py-2'>
            {data.main ? Number((data.main.temp-32)*5/9).toFixed(2) : null}
            {data.main ? <span> &#176;C</span> : null}
        </p>
        <p className='text-3xl text-black/75'>{data.name}{data.main ? <span>, </span> : null} {data.sys ?data.sys.country : null}</p>
    </div>
  )
}

export default Temperature
