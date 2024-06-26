import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import authContext from '../context/auth/authContext';
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { MdReportProblem, MdDeleteOutline, MdOutlineShare } from "react-icons/md";






const PostItem = (props) => {

    // getting states from context
    const context = useContext(modeContext);
    const { mainBox, textMain, textmain2, cardBtn, cardBtnH, textArea, alert, commentBox } = context;
    const { post } = props;


    // console.log(post)


    // getting states/functions from Context
    const { addComment, getPosts, host, setPosts } = useContext(postContext);
    const { loggedInUserData, getLoggedInUserData } = useContext(authContext);


    // to change title to question when submitting question
    const [Ptitle, setPtitle] = useState(post.title)
    var titleForQuestion = post.description.split(' ').slice(0, 5).join(' ') + '...';
    useEffect(() => {
        //Runs only on the first render
        if (post.title === "cqtempQuestion") {
            setPtitle(titleForQuestion);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // to show the input box when clicked on add comment button
    const [addCommentState, setAddCommentState] = useState('hidden');
    const inputRef = useRef(null);

    useEffect(() => {
        if (addCommentState === 'block') {
            inputRef.current.focus();
        }
    }, [addCommentState]);


    const [loadedComments, setLoadedComments] = useState('block');
    const toggleAddComment = () => {
        if (addCommentState === 'hidden') {
            setAddCommentState('block');
            setLoadedComments('hidden');
        } else {
            setAddCommentState('hidden');
            setLoadedComments('block');
        }
    };


    // onChange for comment
    const [comment, setComment] = useState({ comment: "" });
    const onChange = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    };


    // function when submit comment
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            alert('error', 'Please log in to add a comment.');
            return;
        }
        addComment(comment, post._id, 0);
        // console.log(post._id);
        toggleAddComment();
        setComment({ comment: "" });
        getPosts();
    };


    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, [comment]);








    // To upvote a post
    const handleUpvoteClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("error", "Please log in to upvote a post.");
            return;
        }

        try {
            const response = await fetch(`${host}/api/posts/${post._id}/upvote`, {
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

            const updatedPost = await response.json();
            // Update the userPosts state with the updated post data
            setPosts(prevPosts => prevPosts.map(prevPost => prevPost._id === updatedPost._id ? updatedPost : prevPost));
        } catch (error) {
            console.error(error);
            alert("error", "An error occurred while upvoting the post.");
        }
    };






    // To downvote a post
    const handleDownvoteClick = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("error", "Please log in to downvote a post.");
            return;
        }

        try {
            const response = await fetch(`${host}/api/posts/${post._id}/downvote`, {
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

            const updatedPost = await response.json();
            // Update the userPosts state with the updated post data
            setPosts(prevPosts => prevPosts.map(prevPost => prevPost._id === updatedPost._id ? updatedPost : prevPost));
        } catch (error) {
            console.error(error);
            alert("error", "An error occurred while downvoting the post.");
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



    // To share post
    const copyPostUrl = async () => {
        setIsOpen(false);
        try {
            await navigator.clipboard.writeText(`${window.location.host}/post/${post._id}`);
            alert("success", "URL copied to clipboard")
        } catch (err) {
            console.error("Failed to copy post URL: ", err);
            alert("error", "Failed to copy post URL");
        }
    };




    // To Delete Post
    const deletePost = async (postId) => {
        setIsOpen(false);
        try {
            const response = await fetch(`${host}/api/posts/deletepost/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (response.ok) {
                getPosts();
                getLoggedInUserData();
                alert("success", "post has beeen deleted successfully");
            } else {
                console.error(data);
                // Handle the error
            }
        } catch (error) {
            console.error(error);
            // Handle the error
        }
    }





    return (
        <>
            <div className={`mb-4 shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                <div className='flex justify-between mb-1 mt-2'>
                    <div className='flex'>
                        <div className='ml-4 mb-2 w-10 h-10 overflow-hidden'>
                            <img className="h-full w-full rounded-full border border-blue-500 object-cover"
                                src={post.user.idOfAvatar ? `https://drive.google.com/thumbnail?id=${post.user.idOfAvatar}` : `https://drive.google.com/thumbnail?id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                alt="" />
                        </div>
                        {loggedInUserData.username ?
                            <Link
                                className='text-md sm:text-lg font-semibold ml-2 h-max cursor-pointer mt-1'
                                to={
                                    post.user.username === loggedInUserData.username
                                        ? '/myprofile'
                                        : `/users/${post.user.username}`
                                }
                            >
                                {post.user.username}
                            </Link>
                            :
                            <button
                                className='text-md sm:text-lg font-semibold ml-2 h-max cursor-pointer mt-1'
                                onClick={() => alert('error', 'Please log in to view user profiles.')}
                            >
                                {post.user.username}
                            </button>
                        }



                    </div>
                    <div className=''>
                        <p className={`${textmain2} font-extralight text-xs mt-1 mr-2 sm:mr-6 flex flex-col`}>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span>{new Date(post.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        </p>

                    </div>
                </div>

                {/* Image */}
                <div className='mx-1 flex justify-center'>
                    {/* {post.idOfImage && <img className="w-full" src={`https://drive.google.com/thumbnail?id=${post.idOfImage}`} alt="" />} */}
                    {post.idOfImage && <img className="w-full" src={`https://drive.google.com/thumbnail?id=${post.idOfImage}`} alt="post" />}
                </div>

                {/* Main Post */}
                <div className="p-6">
                    <Link to={`/post/${post._id}`} className="cursor-pointer text-2xl font-medium mb-2">{Ptitle}</Link>
                    <p className="text-base mb-4 ">
                        {post.description}
                    </p>
                    <p className={`${textmain2} mb-4`}>
                        #{post.tag}
                    </p>

                    {/* Bottom Buttons */}
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <button onClick={() => { handleUpvoteClick() }} type='button'
                                className={`${cardBtn} px-3 py-2 rounded-l-3xl text-sm font-medium transition ease-in-out duration-500 flex`}><BiUpvote className='h-5 mr-1' />{post.upvotes.length} Upvotes </button>
                            <button onClick={() => { handleDownvoteClick() }} type='button'
                                className={`${cardBtn} border-l border-gray-400 px-3 py-2 rounded-r-3xl text-sm font-medium transition ease-in-out duration-500 flex`}><BiDownvote className='h-5 mr-1' />{post.downvotes.length}</button>
                            <button onClick={toggleAddComment} className={`${cardBtnH} ml-2 rounded-full px-2`}>
                                <FaRegCommentDots className='h-5 w-6' />
                            </button>
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
                                {post.user._id === loggedInUserData._id ? (
                                    <button onClick={() => { deletePost(post._id) }} className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <MdDeleteOutline className="mr-1 h-5 w-5" /> Delete
                                    </button>
                                ) : (
                                    <button className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <MdReportProblem className='mr-2 h-5 w-4' />Report
                                    </button>
                                )}
                                <button onClick={copyPostUrl} className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <MdOutlineShare className='mr-2 h-5 w-4' /> Share
                                </button>
                            </div>
                        </div>


                    </div>
                </div>


                {/* Comment Card */}
                <div className={`${commentBox} transition ease-in-out duration-500 flex rounded-b-lg py-4 px-4`}>

                    {/* add comment */}
                    <div className={`w-full ${addCommentState}`}>
                        <form onSubmit={handleSubmit} className="flex w-full justify-center">
                            <textarea name='comment' value={comment.comment} onChange={onChange} ref={inputRef} className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${textArea}`} autoComplete="off" placeholder="Write your comment... OR Give Answer..."></textarea>
                            <button type='submit' className={`${textMain} transition ease-in-out duration-500 hover:bg-gray-600 h-10 ml-2 rounded-full px-2`}>
                                <FiSend className='h-5 w-6' />
                            </button>
                        </form>
                    </div>

                    {/* loadedComments */}
                    <div className={`${loadedComments} ${textMain} transition ease-in-out duration-500 py-1.5`}>
                        {post.comments && post.comments.length > 0 ? <div className=" flex">
                            <img src={post.comments[post.comments.length - 1].user.idOfAvatar ? `https://drive.google.com/thumbnail?id=${post.comments[post.comments.length - 1].user.idOfAvatar}` : `https://drive.google.com/thumbnail?id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                alt="profile" className='w-9 h-9 rounded-full mr-1 border border-blue-500 object-cover ' />
                            <span className='hidden sm:block'>
                                {loggedInUserData.username ?
                                    <Link
                                        className='font-bold cursor-pointer'
                                        to={
                                            post.comments[post.comments.length - 1].user.username === loggedInUserData.username
                                                ? '/myprofile'
                                                : `/users/${post.comments[post.comments.length - 1].user.username}`
                                        }
                                    >
                                        {post.comments[post.comments.length - 1].user.username}
                                    </Link>
                                    :
                                    <button
                                        className='text-lg font-semibold ml-2 h-max cursor-pointer mt-1'
                                        onClick={() => alert('error', 'Please log in to view user profiles.')}
                                    >
                                        {post.user.username}
                                    </button>
                                }

                            </span>
                            <span className='ml-2'>{post.comments.length > 0 && (
                                <span className=''>
                                    {post.comments[post.comments.length - 1].comment}
                                </span>
                            )}
                            </span>
                        </div> : <div className={`${textMain} transition ease-in-out duration-500`}>No comments yet</div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostItem