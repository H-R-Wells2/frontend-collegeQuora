import React, { useContext, useEffect, useState } from 'react';
import authContext from '../context/auth/authContext';
import modeContext from '../context/mode/modeContext';

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'



export default function Myprofile() {




    // For getting user data
    const { getUserData, userData, setUSerData } = useContext(authContext);
    useEffect(() => {
        getUserData()
        // eslint-disable-next-line
    }, [])


    // getting states from modecontext
    const { mainBox, textMain, backG, textMain2, textArea, cancelBtn } = useContext(modeContext)




    // to populate the modal
    const [open, setOpen] = useState(false);

      // on change
      const onChange = (e) => {
        setUSerData({ ...userData, [e.target.name]: e.target.value })
    }






    return (
        <>

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
                                            <button onClick={() => setOpen(false)} className='hover:fill-slate-500 fill-slate-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                                    height="20.000000pt" viewBox="0 0 200 512">
                                                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                                </svg>
                                            </button>
                                        </div>





                                        {/* Create Post Form */}
                                        <form >

                                            {/* First Name */}
                                            <div id="FirstName" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Title</label>

                                                <input onChange={onChange} value={userData.firstName} id="firstName" minLength={3} required type="text" name="firstName"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="1"
                                                    placeholder="Title..." autoComplete="off" />
                                            </div>


                                            {/* Last Name */}
                                            <div id="FirstName" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Title</label>

                                                <input onChange={onChange} value={userData.lastName} id="lastName" minLength={3} required type="text" name="lastName"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="1"
                                                    placeholder="Title..." autoComplete="off" />
                                            </div>


                                            {/* Description */}
                                            <div id="descriptiondiv" className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Description</label>

                                                <textarea id="edescription" minLength={3} required type="text" name="description"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" rows="2"
                                                    placeholder="Description..." autoComplete="off" />
                                            </div>



                                            {/* Tag */}
                                            <div className="form-group mb-6">
                                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${textMain}`}>Tag</label>

                                                <input id="etag" name="tag" required
                                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${textArea}`}
                                                    rows="1" autoComplete="off" placeholder="Tag..."></input>
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




            <main className="profile-page">
                <section className="relative block" style={{ height: "458px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://img.collegequora.workers.dev/0:/CQimg11.jpg')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className={`relative py-16 ${backG} transition ease-in-out duration-500`}>
                    <div className="container mx-auto px-4">
                        <div className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64 transition ease-in-out duration-500 ${mainBox} ${textMain}`}>
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={"https://img.collegequora.workers.dev/0:/CQimg10.jpg"}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -my-24 -ml-24"
                                                style={{ maxWidth: "220px" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button onClick={()=>{setOpen(true)}}
                                                className="ml-60 mr-0 px-2 flex py-2 font-medium text-sm leading-tight uppercase rounded-2xl shadow-md transition  duration-150 ease-in-out md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 bg-blue-600 text-white "
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Edit Information
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className={`text-xl font-semibold block uppercase tracking-wide ${textMain}`}>
                                                    22
                                                </span>
                                                <span className={`text-sm ${textMain2}`}>Connections</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className={`text-xl font-semibold block uppercase tracking-wide ${textMain}`}>
                                                    10
                                                </span>
                                                <span className={`text-sm ${textMain2}`}>Questions</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className={`text-xl font-semibold block uppercase tracking-wide ${textMain}`}>
                                                    89
                                                </span>
                                                <span className={`text-sm ${textMain2}`}>Answers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className={`text-3xl font-semibold leading-normal mb-1 ${textMain}`}>
                                        {userData.firstName} {userData.lastName}
                                    </h3>
                                    <div className={`leading-normal mt-0 mb-1 font-bold text-lg ${textMain}`}>
                                        {userData.username}
                                    </div>
                                    <div className={`text-sm leading-normal mt-0 mb-1 ${textMain2} font-bold`}>
                                        {userData.email}
                                    </div>
                                    <div className={`mb-2 font-semibold ${textMain} mt-10`}>
                                        College Name - {userData.collegeName}
                                    </div>
                                </div>
                                <div className={`mt-10 py-10 border-t border-gray-300 text-center`}>
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className={`mb-4 text-base leading-relaxed ${textMain}`}>
                                                An artist of considerable range, Jenna the name taken by
                                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                performs and records all of his own music, giving it a
                                                warm, intimate feel with a solid groove structure. An
                                                artist of considerable range.
                                            </p>
                                            <a
                                                href="#pablo"
                                                className="font-normal text-blue-500"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
