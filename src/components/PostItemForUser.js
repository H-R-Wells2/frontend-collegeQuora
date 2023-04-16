import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import blankprofile from "../images/blankprofile.jpg";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';






const PostItemForUser = (props) => {

    // getting states from context
    const context = useContext(modeContext);
    const { mainBox, textMain, textmain2, cardBtn, cardBtnH, textArea, alert, commentBox } = context;
    const { post, setUserPosts } = props;


    // getting states/functions from postContext
    const { addComment, getPosts, host } = useContext(postContext);


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
            setUserPosts(prevPosts => prevPosts.map(prevPost => prevPost._id === updatedPost._id ? updatedPost : prevPost));
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
            setUserPosts(prevPosts => prevPosts.map(prevPost => prevPost._id === updatedPost._id ? updatedPost : prevPost));
        } catch (error) {
            console.error(error);
            alert("error", "An error occurred while downvoting the post.");
        }
    };










    return (
        <>
            <div className={`mb-4 shadow-lg rounded-lg max-w-2xl pt-2 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                <div className='flex justify-between mb-1'>
                    <div className='flex'>
                        <img className="ml-2 mb-2 h-8 w-8 rounded-full" src={blankprofile} alt="" />
                        <Link className='text-base ml-2 h-max cursor-pointer mt-1' to={`/users/${post.user.username}`}>{post.user.username}</Link>
                    </div>
                    <div className=''>
                        <p className={`${textmain2} text-xs mt-3 mr-6`}>
                            {new Date(post.date).toLocaleDateString()} {new Date(post.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                        </p>

                    </div>
                </div>

                {/* Image */}
                <div className='mx-1 flex justify-center'>
                    {post.idOfImage && <img className="" src={`https://drive.google.com/uc?export=view&id=${post.idOfImage}`} alt="" />}
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
                        <button className={`${cardBtnH} rounded-full px-2`}>
                            <BsThreeDots className='h-6 w-6' />
                        </button>
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
                        {post.comments && post.comments.length > 0 ? <div className="pl-3 flex">
                            <img src={blankprofile} alt="profile" className='w-7 h-7 rounded-full mr-1' />
                            <span className='font-bold cursor-pointer'>{post.comments[post.comments.length - 1].user.username}</span>
                            <span className='ml-2'>{post.comments.length > 0 && (
                                <span className='ml-2'>
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

export default PostItemForUser