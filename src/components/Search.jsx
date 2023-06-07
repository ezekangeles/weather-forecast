import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'
import Temperature from './Temperature'
import Others from './Others'

const Search = () => {

    const [city, setCity] = useState('')
    const [data, setData] = useState([])

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`

    const getCity = (e) =>{
        e.preventDefault()
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) =>{
               alert('Please Enter valid City')
            })
            setCity('')     
    }

  return (
    <div className='w-full h-full flex flex-col justify-between py-5'>
      <form onSubmit={getCity} className='w-full flex flex-row relative items-center'>
        <input type="text" value={city} placeholder='Enter City' onChange={(e)=>setCity(e.target.value)}
        className='w-full px-3 py-2 outline-none rounded-md capitalize'/>
        <button className='absolute top-[50%] right-0 translate-y-[-50%] px-3'><AiOutlineSearch /></button>
      </form>
      <Temperature data={data}/>
      <Others data={data}/>
    </div>
  )
}

export default Search
