import React, { useContext } from 'react'
import blankprofile from "./blankprofile.jpg"
import { BiUpvote } from "react-icons/bi"
import { MdOutlineComputer } from "react-icons/md";
import modeContext from '../context/mode/modeContext';


export default function Bscit(props) {




    // getting states from context
    const context = useContext(modeContext)
    const { mainBox, textMain, cardBtn } = context




    return (
        <div className='flex justify-start ml-64 mr-4 py-3'>
            <div className="flex flex-col gap-y-4">



                <div className={`shadow-lg text-center justify-center py-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                    <div className='text-4xl flex font-semibold justify-center'>
                        <MdOutlineComputer className='mt-1' />
                        <span className='ml-2'>BSc-IT</span>
                    </div>

                </div>





                <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                    <div className='flex'>
                        <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
                        <span className='text-base ml-2'>Shubham Kadam</span>
                        <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
                    </div>
                    <div className="flex flex-col">
                        <img className="w-full h-auto mb-6" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                        <div className="p-6">
                            <h5 className="text-xl font-medium mb-2">Title...</h5>
                            <p className="text-base mb-4 ">
                                Lorem ipsum dolor sit amet consectetur....
                            </p>
                            <button
                                type='button'
                                className={`${cardBtn} px-3 py-2 rounded-3xl text-sm font-medium transition  ease-in-out duration-300 flex`}
                            >
                                <BiUpvote className='h-5 mr-1' />
                                Upvote
                            </button>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
