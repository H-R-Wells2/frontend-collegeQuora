import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import React, { useContext } from 'react'
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import blankprofile from "./blankprofile.jpg"



export default function SelectedPost(props) {

    // getting states from context
    const { mainBox, textMain } = useContext(modeContext)
    const { host } = useContext(postContext)

    // state for selectedPost
    const [selectedPost, setSelectedPost] = useState();

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
    }, [host]);



    useEffect(() => {
        getSelectedPost(id);
    }, [getSelectedPost, id]);



    if (!selectedPost) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-start ml-64 mr-4 py-3'>
            <div className="flex flex-col min-w-full gap-y-1">


                {/* Card for Question */}
                <div className={`shadow-lg min-w-full text-center justify-center pb-5 pt-10 rounded-lg max-w-2xl transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
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
                </div>

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
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}
