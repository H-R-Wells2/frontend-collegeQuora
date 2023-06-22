import React, { useContext } from 'react'
import { AiOutlineCompass } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import modeContext from '../context/mode/modeContext';


export default function Spaces(props) {



      // getting states from context
      const context = useContext(modeContext)
      const { mainBox, textMain } = context



  return (    
    <div className='flex justify-start mx-6 sm:ml-64 mr-4 py-3'>
      <div className="flex flex-col w-1/2 gap-y-4">



        <div className={`shadow-lg text-center justify-center py-5 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
          <div className='text-4xl flex font-semibold justify-center'>
            <IoIosPeople className='mt-1' />
            <span className='ml-2'>Welcome To spaces</span>
          </div>
          <div className='text-4xl mt-4 flex font-semibold justify-center'>
           
            <button className={`px-2 flex py-2 font-medium text-sm leading-tight uppercase rounded-2xl shadow-md  transition  duration-150 ease-in-out  md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 bg-blue-600 text-white `}>
            <AiOutlineCompass className='h-5 w-5 mr-1' />Discover Spaces
            </button>

          </div>

        </div>




      </div>
    </div>
  )
}
