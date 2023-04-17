import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import authContext from '../context/auth/authContext';
import { FiSend } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { MdReportProblem, MdDeleteOutline, MdOutlineShare } from "react-icons/md";




export default function SelectedPost(props) {

    // getting states from context
    const { mainBox, textMain, addCommentState, alert, cardBtnH } = useContext(modeContext);
    const { host, addComment } = useContext(postContext);
    const { loggedInUserData } = useContext(authContext);

    // state for selectedPost
    const [selectedPost, setSelectedPost, textArea] = useState(null);

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

    let navigate = useNavigate();

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


    

    // To share post
    const copyPostUrl = async () => {
        setIsOpen(false);
        try {
            await navigator.clipboard.writeText(`${window.location.host}/post/${selectedPost._id}`);
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
                navigate('/');
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
        <div className='flex justify-start ml-64 mr-4 py-3'>



            {selectedPost === null ? (
                <div role="status" className='ml-72 mt-48'>
                    <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (



                <div className="flex flex-col min-w-full gap-y-1">


                    {/* Card for Question */}
                    <div className={`shadow-lg min-w-full text-center justify-center pb-5 pt-6 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                        <div className='ml-8 flex justify-between mb-2'>
                            <div className='flex'>
                                <div className='ml-4 mb-2 w-10 h-10 overflow-hidden'>
                                    <img className="h-full w-full rounded-full border border-blue-500 object-cover"
                                        src={selectedPost.user.idOfAvatar ? `https://drive.google.com/uc?export=view&id=${selectedPost.user.idOfAvatar}` : `https://drive.google.com/uc?export=view&id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                        alt="" />
                                </div>
                                <Link className='text-base ml-2 h-max cursor-pointer mt-1 font-bold' to={`/users/${selectedPost.user.username}`}>{selectedPost.user.username}</Link>
                            </div>
                            <div className="relative inline-block text-left mr-8" ref={dropdownRef}>
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
                                    {selectedPost.user._id === loggedInUserData._id ? (
                                        <button onClick={() => { deletePost(selectedPost._id) }} className="flex text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
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
                                    <img
                                        src={comment.user.idOfAvatar ? `https://drive.google.com/uc?export=view&id=${comment.user.idOfAvatar}` : `https://drive.google.com/uc?export=view&id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                        alt="profile" className='w-9 h-9 rounded-full mr-1 border border-blue-500 object-cover' />
                                    {/* <span className='font-bold cursor-pointer mt-1 ml-1'>{comment.user.username}</span> */}
                                    <span className='font-bold cursor-pointer mt-1 ml-1'>
                                        <Link to={`/users/${comment.user.username}`} className='font-bold cursor-pointer'>{comment.user.username}</Link>
                                    </span>
                                </div>
                                <p className='ml-8'>{comment.comment}</p>
                            </div>
                        </div>
                    ))}


                </div>

            )}
        </div>
    );
}
