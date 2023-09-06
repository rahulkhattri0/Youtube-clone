import React from 'react'
import ytlogo from '../assets/ytlogo.jpg'
import user from '../assets/user.jpg'
import {ImSearch} from 'react-icons/im'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center p-2 m-2 shadow-lg'>
        <Link to={"/"}>
            <img
            src={ytlogo}
            alt='yt-logo'
            className='h-14'
            />
        </Link>
        
        <div className='w-1/2 flex flex-row'>
            <input type='text' className='w-full border rounded-l-full border-gray-200'/>
            <button className='p-2 border-gray-200 rounded-r-full bg-gray-200'>
                <ImSearch/>
            </button>
        </div>
        <img
            src={user}
            alt='user'
            className='h-10'
        />
    </div>
  )
}

export default Header