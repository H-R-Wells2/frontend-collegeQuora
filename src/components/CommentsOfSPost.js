import React, { useContext, useEffect, useRef, useState } from 'react'
import { BiUpvote, BiDownvote } from "react-icons/bi";
import modeContext from '../context/mode/modeContext';
import authContext from '../context/auth/authContext';
import { Link } from 'react-router-dom';
import { MdReportProblem, MdDeleteOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";



const CommentsOfSPost = (props) => {



    const { mainBox, textMain, alert, cardBtn, textmain2, cardBtnH } = useContext(modeContext);
    const { host, loggedInUserData } = useContext(authContext);
    const { getSelectedPost, comment, postId, selectedPost } = props;




    // To upvote a comment
    const handleCommentUpvoteClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("error", "Please log in to upvote a comment.");
            return;
        }

        try {
            const response = await fetch(`${host}/api/comments/${comment._id}/upvote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });

            if (response.status >= 400 && response.status < 600) {
                const data = await response.json();
                alert("error", data.error);
                return;
            }

            // eslint-disable-next-line
            const updatedComment = await response.json();
            getSelectedPost(postId);
            alert("success", "Upvoted successfully");
        } catch (error) {
            console.error(error);
            alert("error", "An error occurred while upvoting the comment.");
        }
    };




    // To downvote a comment
    const handleCommentDownvoteClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("error", "Please log in to downvote a comment.");
            return;
        }

        try {
            const response = await fetch(`${host}/api/comments/${comment._id}/downvote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });

            if (response.status >= 400 && response.status < 600) {
                const data = await response.json();
                alert("error", data.error);
                return;
            }

            // eslint-disable-next-line
            const updatedComment = await response.json();
            getSelectedPost(postId);
            alert("success", "Downvoted successfully");
        } catch (error) {
            console.error(error);
            alert("error", "An error occurred while downvoting the comment.");
        }
    };




    // State for dropdownmenu
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);



    // To Delete Comment
    const deleteComment = async (commentId) => {
        try {
            const response = await fetch(`${host}/api/comments/deleteComment/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (response.ok) {
                alert("success", "Comment has been deleted successfully");
                getSelectedPost(postId);
            } else {
                console.error(data);
                alert("error", "Comment not deleted");
            }
        } catch (error) {
            console.error(error);
            alert("success", "Comment not deleted");
        }
    }






    if (!selectedPost || !comment) {
        return <div>Loading...</div>;
    }




    return (
        <>


            <div className={`shadow-lg min-w-full text-left justify-center pb-5 pt-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                <div className='px-6'>
                    <div className='flex mb-2 justify-between'>
                        <div className='flex'>
                            <img
                                src={comment.user.idOfAvatar ? `https://drive.google.com/thumbnail?id=${comment.user.idOfAvatar}` : `https://drive.google.com/thumbnail?id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                alt="profile" className='w-9 h-9 rounded-full mr-1 border border-blue-500 object-cover' />
                            {/* <span className='font-bold cursor-pointer mt-1 ml-1'>{comment.user.username}</span> */}
                            <span className='font-bold cursor-pointer mt-1 ml-1'>
                                {loggedInUserData.username ?
                                    <Link to={`/users/${comment.user.username}`} className='font-bold cursor-pointer'>{comment.user.username}
                                    </Link> :
                                    <button
                                        className='text-lg font-semibold ml-2 h-max cursor-pointer mt-1'
                                        onClick={() => alert('error', 'Please log in to view user profiles.')}
                                    >
                                        {selectedPost.user.username}
                                    </button>
                                }
                            </span>
                        </div>
                        <div className=''>
                            <p className={`${textmain2} font-extralight text-xs mt-1 mr-2 sm:mr-6 flex flex-col`}>
                                <span>{new Date(comment.date).toLocaleDateString()}</span>
                                <span>{new Date(comment.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                            </p>
                        </div>
                    </div>
                    <p className='sm:ml-8 ml-1 mt-6 sm:mt-0'>{comment.comment}</p>
                </div>

                {/* Buttons */}
                <div className='flex justify-between sm:px-14 px-4 py-5'>
                    <div className='flex'>
                        <button onClick={() => { handleCommentUpvoteClick() }} type='button'
                            className={`${cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-500 flex`}><BiUpvote className='h-5 mr-1' />{comment.upvotes.length} Upvotes </button>
                        <button onClick={() => { handleCommentDownvoteClick() }} type='button'
                            className={`${cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-500 flex`}><BiDownvote className='h-5 mr-1' />{comment.downvotes.length}</button>
                    </div>
                    <div className="relative inline-block text-left" ref={dropdownRef}>
                        <button className={`${cardBtnH} rounded-full px-2`} onClick={() => setIsOpen(!isOpen)}>
                            <BsThreeDots className="h-8 w-6" />
                        </button>
                        <div
                            className={`${isOpen ? '' : 'hidden'} absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            {comment.user._id === loggedInUserData._id ? (
                                <button onClick={() => { deleteComment(comment._id) }} className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <MdDeleteOutline className="mr-1 h-5 w-5" /> Delete
                                </button>
                            ) : (
                                <button className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <MdReportProblem className='mr-2 h-5 w-4' />Report
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default CommentsOfSPost