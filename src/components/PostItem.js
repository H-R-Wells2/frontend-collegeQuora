import React, { useEffect, useState } from 'react'
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
    const { mainBox, textMain, textmain2, cardBtn, cardBtnH } = context;
    const { post } = props;


    const [Ptitle, setPtitle] = useState(post.title)
    var titleForQuestion = post.description.split(' ').slice(0, 5).join(' ') + '...';
    // if (post.title === "cqtempQuestion"){
    //     setPtitle(titleForQuestion)
    // }
    useEffect(() => {
        //Runs only on the first render
        if (post.title === "cqtempQuestion") {
            setPtitle(titleForQuestion)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // const img = "https://drive.google.com/uc?export=view&id=" + post.idOfImage;

    


    return (
        <>
            <div className={`mb-4 shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
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

                {post.idOfImage && <img className="" src={`https://drive.google.com/uc?export=view&id=${post.idOfImage}`} alt="" />}

                <div className="p-6">
                    <h5 className="text-2xl font-medium mb-2">{Ptitle}</h5>
                    <p className="text-base mb-4 ">
                        {post.description}
                    </p>
                    <p className={`${textmain2} mb-4`}>
                        #{post.tag}
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