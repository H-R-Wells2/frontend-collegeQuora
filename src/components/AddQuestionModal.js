import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import { FaImage } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";



export default function AddQuestionModal(props) {


    // getting states from modeContext
    const context = useContext(modeContext);
    const { mainBox, textMain, textArea, addOrCrClass, cancelBtn, open, setOpen } = context;



    // useStates for selected form
    const [viewFormAdd, setViewFormAdd] = useState("block");
    const [viewFormCr, setViewFormCr] = useState("hidden");
    const [selectedBtn1, setSelectedBtn1] = useState("border-b-4 border-blue-500");
    const [selectedBtn2, setSelectedBtn2] = useState("");


    const addQuestionOnModal = () => {
        setViewFormAdd("block")
        setViewFormCr("hidden")
        setSelectedBtn1("border-b-4 border-blue-500")
        setSelectedBtn2("")
    }

    const createPostOnModal = () => {
        setViewFormAdd("hidden")
        setViewFormCr("block")
        setSelectedBtn1("")
        setSelectedBtn2("border-b-4 border-blue-500")
    }


    // getting states from postContext
    const { addPost } = useContext(postContext);

    const [post, setPost] = useState({ title: "", description: "", tag: "" })
    const [question, setQuestion] = useState({ qtitle: "", qtag: "" })

    // submit code for post
    const onSubmitPost = (e) => {
        e.preventDefault();
        addPost(post.title, post.description, post.tag);
        // to clear form after submit
        setPost({ title: "", description: "", tag: "" });
    }

    // submit code for question
    const onSubmitQuestion = (e) => {
        e.preventDefault();
        addPost("cqtempQuestion", question.qtitle, question.qtag);
        // to clear form after submit
        setQuestion({ qtitle: "", qtag: "" });
    }

    // onChange for post
    const onChangePost = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    // onChange for question
    const onChangeQuestion = (e) => {
        setQuestion({ ...question, [e.target.name]: e.target.value })
    }


    // To preview image
    const [imgHide, setImgHide] = useState('hidden')
    const [file, setFile] = useState();
    function handleAttachImg(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
        setImgHide('')
    }
    function handleRemoveImage(e) {
        setImgHide('hidden')
        setFile();
    }




    // to upload images
    // const folder_id = '1tb4d8fZUfRJWHTixZJdPYRsnlHmdau4j'




    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen} >
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex h-screen items-start mt-20 justify-center p-4 text-center sm:p-0">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">


                                <Dialog.Panel className="">
                                    {/* Apna code */}
                                    <div className={` ${mainBox} relative container max-w-sm px-9 py-10 sm:px-10 sm:pb-6 sm:pt-4 rounded-lg shadow-xl w-full sm:max-w-4xl transform transition-all text-left`}>

                                        <div className='flex justify-end'>
                                            <Link to={"/"}><button onClick={() => setOpen(false)} className='hover:fill-slate-500 fill-slate-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                                    height="20.000000pt" viewBox="0 0 200 512">
                                                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                                </svg>
                                            </button></Link>
                                        </div>


                                        {/* To select add question or create post */}
                                        <div className='flex justify-between font-semibold border-b-2 border-gray-400 mb-4'>

                                            <button className={`${addOrCrClass} ${selectedBtn1} w-72 py-1 px-4 rounded-l-md text-center cursor-pointer`} onClick={addQuestionOnModal}>
                                                <span className={`${textMain} text-xl `}>Add Question</span>
                                            </button>

                                            <button className={`${addOrCrClass} ${selectedBtn2} w-72 py-1 px-4 rounded-r-md text-center cursor-pointer`} onClick={createPostOnModal}>
                                                <span className={`${textMain} text-xl `}>Create Post</span>
                                            </button>

                                        </div>




                                        {/* Add Question Form */}
                                        <form onSubmit={onSubmitQuestion} className={`${viewFormAdd}`}>


                                            <div className='bg-blue-200 rounded-xl py-2 px-2 mb-2'>
                                                Tips on getting good answers quickly
                                                <ul className='list-disc ml-5 '>
                                                    <li>Make sure your question has not been asked already</li>
                                                    <li>Keep your question short and to the point</li>
                                                    <li>Double-check grammar and spelling</li>
                                                </ul>
                                            </div>

                                            {/* Question */}
                                            <div id="titlediv" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Question</label>

                                                <textarea onChange={onChangeQuestion} name="qtitle" value={question.qtitle} id="etitle" minLength={3} required type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder='Start your question with "What", "How", "Why", etc.' autoComplete="off" />
                                            </div>


                                            {/* Tag */}
                                            <div className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Tag</label>

                                                <input name='qtag' onChange={onChangeQuestion} value={question.qtag} id="etag"
                                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${textArea}`}
                                                    rows="1" autoComplete="off" placeholder="Enter related tags like #Educational"></input>
                                            </div>







                                            {/* Button */}
                                            <div className="flex justify-end">

                                                <button type='reset' onClick={() => setOpen(false)} className={`text-lg px-3 ${textMain} ${cancelBtn} rounded-2xl mx-1`}>
                                                    Cancel
                                                </button>

                                                <button type="submit"
                                                    className=" sm:w-1/4 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-2xl shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out disabled:bg-blue-500 disabled:md:hover:bg-blue-500 disabled:focus:bg-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed">
                                                    Add Question
                                                </button>
                                            </div>
                                        </form>











                                        {/* Create Post Form */}
                                        <form className={`${viewFormCr}`} onSubmit={onSubmitPost} >

                                            {/* Title */}
                                            <div id="titlediv" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Title</label>

                                                <input value={post.title} id="ptitle" minLength={3} required type="text" name="title" onChange={onChangePost}
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="1"
                                                    placeholder="Title..." autoComplete="off" />
                                            </div>


                                            {/* Description */}
                                            <div id="descriptiondiv" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Description</label>

                                                <textarea value={post.description} id="edescription" minLength={3} required type="text" name="description" onChange={onChangePost}
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="2"
                                                    placeholder="Description..." autoComplete="off" />
                                            </div>



                                            {/* Tag */}
                                            <div className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Tag</label>

                                                <input value={post.tag} id="etag" name="tag" onChange={onChangePost} required
                                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${textArea}`}
                                                    rows="1" autoComplete="off" placeholder="Tag..."></input>
                                            </div>



                                            {/* Upload Image */}

                                            <div className={`${textMain} mb-3`}>
                                                <div className='flex gap-2 mb-1'>
                                                    <input onChange={handleAttachImg} accept="image/jpeg" type="file" id="files" className="hidden" />
                                                    <label type='button' htmlFor="files" className={`ml-2 cursor-pointer`}><FaImage title='Attach Image' className='h-8 w-8' /></label>
                                                    <label onClick={handleRemoveImage} type='button' htmlFor="" className={`${imgHide} mr-4 cursor-pointer`}><MdRemoveCircle title='Remove Image' className='h-7 w-7' /></label>
                                                </div>
                                                <img className={`${imgHide} max-w-prose`} alt='to be attached' src={file} />
                                            </div>







                                            {/* Button */}
                                            <div className="flex justify-end">

                                                <button type='reset' onClick={() => setOpen(false)} className={`text-lg px-3 ${textMain}  ${cancelBtn} rounded-2xl mx-1`}>
                                                    Cancel
                                                </button>

                                                <button type="submit"
                                                    className=" w-1/4 px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded-2xl shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400  transition  duration-150 ease-in-out disabled:bg-blue-500 disabled:md:hover:bg-blue-500 disabled:focus:bg-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed">
                                                    Post
                                                </button>
                                            </div>
                                        </form>


                                    </div>

                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}
