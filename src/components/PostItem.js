import React from 'react'
import { useContext } from 'react';
import blankprofile from "./blankprofile.jpg"
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import modeContext from '../context/mode/modeContext';








const PostItem = (props) => {

    // getting states from context
    const context = useContext(modeContext)
    const { mainBox, textMain, cardBtn, cardBtnH } = context;
    const { post } = props;



    return (
        <>
            <div className={`shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                <div className='flex justify-between mb-1'>
                    <div className='flex'>
                        <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
                        <span className='text-base ml-2 h-max cursor-pointer mt-1'>{post.user.username}</span>
                        <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
                    </div>
                    <div className=''>
                        <IoCloseOutline className='cursor-pointer mt-1 h-6 w-6 mx-2' />
                    </div>
                </div>

                {/* <img className="" src="https://img.collegequora.workers.dev/0:/cqimg1.jpg" alt="" /> */}

                <div className="p-6">
                    <h5 className="text-2xl font-medium mb-2">{post.title}</h5>
                    <p className="text-base mb-4 ">
                        {post.description}
                    </p>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <button type='button'
                                className={`${cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiUpvote className='h-5 mr-1' />Upvote</button>
                            <button type='button'
                                className={`${cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-300 flex`}><BiDownvote className='h-5 mr-1' /></button>
                            <button className={`${cardBtnH} ml-2 rounded-full px-2`}>
                                <FaRegCommentDots className='h-5 w-6' />
                            </button>
                        </div>
                        <button className={`${cardBtnH} rounded-full px-2`}>
                            <BsThreeDots className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem