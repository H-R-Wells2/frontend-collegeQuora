import React from 'react'
import blankprofile from "./blankprofile.jpg"
import { BiUpvote } from "react-icons/bi"
import { HiOutlineCalculator } from "react-icons/hi";


export default function Baf(props) {
    return (
        <div className='flex justify-start ml-64 mr-4 py-3'>
            <div className="flex flex-col gap-y-4">



                <div className={`shadow-lg text-center justify-center py-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${props.mainBox} ${props.textMain}`}>
                    <div className='text-4xl flex font-semibold justify-center'>
                        <HiOutlineCalculator className='mt-1' />
                        <span className='ml-2'>BAF</span>
                    </div>

                </div>





                <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${props.mainBox} ${props.textMain}`}>
                    <div className='flex'>
                        <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
                        <span className='text-base ml-2'>Shubham Kadam</span>
                        <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
                    </div>

                    <img className="" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />

                    <div className="p-6">
                        <h5 className="text-xl font-medium mb-2">Title...</h5>
                        <p className="text-base mb-4 ">
                            Lorem ipsum dolor sit amet consectetur....
                        </p>
                        <button type='button'
                            className={`${props.cardBtn} px-3 py-2 rounded-3xl text-sm font-medium transition  ease-in-out duration-300 flex`}><BiUpvote className='h-5 mr-1' /> Upvote</button>
                    </div>
                </div>

                


            </div>
        </div>
    )
}
