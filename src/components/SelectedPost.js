import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import blankprofile from "../images/blankprofile.jpg";
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';



export default function SelectedPost(props) {

    // getting states from context
    const { mainBox, textMain, addCommentState, alert } = useContext(modeContext)
    const { host, addComment } = useContext(postContext)

    // state for selectedPost
    const [selectedPost, setSelectedPost, textArea] = useState();

    // onChange for comment
    const [comment, setComment] = useState({ comment: "" });

    // Get the "id" parameter from the URL
    const { id } = useParams();

    // Get single post
    const getSelectedPost = useCallback(async (id) => {
        try {
            const response = await fetch(`${host}/api/posts/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                },
            });
            const data = await response.json();
            setSelectedPost(data);
        } catch (error) {
            console.error(error.message);
        }
        // eslint-disable-next-line
    }, [host]);



    useEffect(() => {
        getSelectedPost(id);
    }, [getSelectedPost, id]);



    if (!selectedPost) {
        return <div>Loading...</div>;
    }

    const onChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };

    // function when submit comment
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert('error', "Please log in to add a comment.");
            return;
        }
        try {
            await addComment(comment, selectedPost._id, 0);
            setComment({ comment: "" });
            getSelectedPost(id);
        } catch (error) {
            console.error(error);
            alert('error', "An error occurred while submitting your comment.");
        }
    };


    return (
        <div className='flex justify-start ml-64 mr-4 py-3'>
            <div className="flex flex-col min-w-full gap-y-1">




                {/* Card for Question */}
                <div className={`shadow-lg min-w-full text-center justify-center pb-5 pt-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                    <div className='ml-8 flex justify-between mb-1'>
                        <div className='flex'>
                            <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
                            <Link className='text-base ml-2 h-max cursor-pointer mt-1' to={`/users/${selectedPost.user.username}`}>{selectedPost.user.username}</Link>
                            <span className='text-sm ml-1 h-max text-blue-500 cursor-pointer'>Follow</span>
                        </div>
                    </div>

                    <div className='text-4xl flex font-semibold justify-center'>
                        <span className='mx-2'>
                            {selectedPost.title !== 'cqtempQuestion'
                                ? selectedPost.title
                                : selectedPost.description.split(' ').slice(0, 5).join(' ') + '...'
                            }
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-center py-5 text-2xl'>
                        {selectedPost.idOfImage && <img className="" src={`https://drive.google.com/uc?export=view&id=${selectedPost.idOfImage}`} alt="" />}
                        <div className='px-3 py-2'>{selectedPost.description}</div>
                    </div>

                    {/* To add coment */}
                    <div className={` mx-5 ${addCommentState}`}>
                        <form onSubmit={handleSubmit} className="flex w-full justify-center">
                            <textarea required name='comment' value={comment.comment} onChange={onChange} className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${textArea}`} autoComplete="off" placeholder="Write your comment... OR Give Answer..."></textarea>
                            <button type='submit' className={`hover:bg-gray-600 h-10 ml-2 rounded-full px-2`}>
                                <FiSend className='h-5 w-6' />
                            </button>
                        </form>
                    </div>
                </div>


                {/* Answers */}
                <div className={`shadow-lg text-center min-w-max justify-center py-10 rounded-lg transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                    <div className='text-4xl flex font-semibold justify-center'>
                        <span className='ml-2'>Answers</span>
                    </div>

                </div>


                {/* Card for Answers */}
                {selectedPost.comments.map(comment => (
                    <div key={comment._id} className={`shadow-lg min-w-full text-left justify-center pb-5 pt-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                        <div className='px-6'>
                            <div className='flex mb-2'>
                                <img src={blankprofile} alt="profile" className='w-7 h-7 rounded-full mr-1' />
                                <span className='font-bold cursor-pointer'>{comment.user.username}</span>
                            </div>
                            <p className='ml-8'>{comment.comment}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}
