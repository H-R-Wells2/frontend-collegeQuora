import React from 'react'
import blankprofile from "./blankprofile.jpg"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";



export default function Content(props) {
  return (
    <div className='flex justify-start ml-64 mr-4 py-3'>
      <div className="flex flex-col gap-y-4">



        <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${props.mainBox} ${props.textMain}`}>
          <div className='flex justify-between mb-1'>
            <div className='flex'>
              <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
              <span className='text-base ml-2 h-max cursor-pointer mt-1'>Shubham Kadam</span>
              <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
            </div>
            <div className=''>
              <IoCloseOutline className='cursor-pointer mt-1 h-6 w-6 mx-2' />
            </div>
          </div>

          <img className="" src="https://mdbootstrap.com/img/new/standard/nature/180.jpg" alt="" />

          <div className="p-6">
            <h5 className="text-2xl font-medium mb-2">Title...</h5>
            <p className="text-base mb-4 ">
              Lorem ipsum dolor sit amet consectetur....
            </p>
            <div className='flex justify-between'>
              <div className='flex'>
                <button type='button'
                  className={`${props.cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiUpvote className='h-5 mr-1' />Upvote</button>
                <button type='button'
                  className={`${props.cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiDownvote className='h-5 mr-1' /></button>
                <button className={`${props.cardBtnH} ml-2 rounded-full px-2`}>
                  <FaRegCommentDots className='h-5 w-6' />
                </button>
              </div>
              <button className={`${props.cardBtnH} rounded-full px-2`}>
                <BsThreeDots className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>









        <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${props.mainBox} ${props.textMain}`}>
          <div className='flex justify-between mb-1'>
            <div className='flex'>
              <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
              <span className='text-base ml-2 h-max cursor-pointer mt-1'>Shubham Kadam</span>
              <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
            </div>
            <div className=''>
              <IoCloseOutline className='cursor-pointer mt-1 h-6 w-6 mx-2' />
            </div>
          </div>

          <img className="" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />

          <div className="p-6">
            <h5 className="text-2xl font-medium mb-2">Title...</h5>
            <p className="text-base mb-4 ">
              Lorem ipsum dolor sit amet consectetur....
            </p>
            <div className='flex justify-between'>
              <div className='flex'>
                <button type='button'
                  className={`${props.cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiUpvote className='h-5 mr-1' />Upvote</button>
                <button type='button'
                  className={`${props.cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiDownvote className='h-5 mr-1' /></button>
                <button className={`${props.cardBtnH} ml-2 rounded-full px-2`}>
                  <FaRegCommentDots className='h-5 w-6' />
                </button>
              </div>
              <button className={`${props.cardBtnH} rounded-full px-2`}>
                <BsThreeDots className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>







        <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${props.mainBox} ${props.textMain}`}>
          <div className='flex justify-between mb-1'>
            <div className='flex'>
              <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
              <span className='text-base ml-2 h-max cursor-pointer mt-1'>Shubham Kadam</span>
              <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
            </div>
            <div className=''>
              <IoCloseOutline className='cursor-pointer mt-1 h-6 w-6 mx-2' />
            </div>
          </div>

          <img className="" src="https://mdbootstrap.com/img/new/standard/nature/176.jpg" alt="" />

          <div className="p-6">
            <h5 className="text-2xl font-medium mb-2">Title...</h5>
            <p className="text-base mb-4 ">
              Lorem ipsum dolor sit amet consectetur....
            </p>
            <div className='flex justify-between'>
              <div className='flex'>
                <button type='button'
                  className={`${props.cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiUpvote className='h-5 mr-1' />Upvote</button>
                <button type='button'
                  className={`${props.cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiDownvote className='h-5 mr-1' /></button>
                <button className={`${props.cardBtnH} ml-2 rounded-full px-2`}>
                  <FaRegCommentDots className='h-5 w-6' />
                </button>
              </div>
              <button className={`${props.cardBtnH} rounded-full px-2`}>
                <BsThreeDots className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
