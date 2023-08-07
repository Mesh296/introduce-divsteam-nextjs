import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa'



function Footer() {
  return (
    <div className='bg-gradient-to-b from-[#F8F8F8] to-white h-/2 w-full flex justify-around items-start p-20 '>
      <div className="p-5 flex-col justify-center items-center text-center">

        <p className="text-gray-800 font-bold text-2xl pb-4 ">
          Connet with us
        </p>
        <p className='text-blue-500 font-bold text-2xl pb-2'>Through</p>
        <div className='flex justify-center gap-6'>
          <FaFacebook className='text-3xl cursor-pointer hover:text-blue-600 ' />
          <FaGithub className='text-3xl cursor-pointer hover:text-gray-600 ' />
          <FaYoutube className='text-3xl cursor-pointer hover:text-red-600 ' />
          <FaVk className='text-3xl cursor-pointer hover:text-blue-600 ' />
        </div>
      </div>
      <div className="p-5">
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-3'>Product</p>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>List</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Future & Options</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Stocks</li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-3'>Company</p>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>About us</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Products</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Pricing</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Careers</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Press & Media</li>
        </ul>
      </div>
      <div className="p-5">
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-3'>Support</p>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Contact</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Support Portals</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>List of Charges</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Doloads</li>
          <li className='text-gray-500 text-sm font-semibold cursor-pointer hover:text-blue-600 pb-2'>Videos</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer