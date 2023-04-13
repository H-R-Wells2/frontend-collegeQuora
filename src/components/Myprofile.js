import React, { useContext, useEffect, useState } from 'react';
import authContext from '../context/auth/authContext';
import modeContext from '../context/mode/modeContext';
import cover from "../images/cover.jpg";
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { FaUserEdit } from "react-icons/fa";



export default function Myprofile() {





    // For getting user data
    const { getUserData, userData, setUserData } = useContext(authContext);
    useEffect(() => {
        getUserData()
        // eslint-disable-next-line
    }, [])

    // getting states from modecontext
    const { mainBox, textMain, backG, textMain2, bordInp, labelInp, alert } = useContext(modeContext)


    // to populate the modal
    const [open, setOpen] = useState(false);

    // Handle Update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password, username, collegeName, gender, bio } = userData;

        try {
            const response = await fetch("http://localhost:5000/api/auth/updateuser", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({ firstName, lastName, email, password, username, collegeName, gender, bio })
            });
            const json = await response.json();
            console.log(json);
            setOpen(false);
            alert('success', 'User data updated successfully!');
        } catch (error) {
            console.error(error);
            alert('error', 'Failed to update user data.');
        }
    }











    // on change
    const onChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }






    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen} >
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex h-screen items-start mt-32 justify-center p-4 text-center sm:p-0">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">


                                <Dialog.Panel className="w-1/3">
                                    {/* Main card code */}
                                    <div className={` ${mainBox} relative container max-w-lg px-9 py-10 sm:px-10 sm:pb-6 sm:pt-4 rounded-lg shadow-xl w-full sm:max-w-4xl transform transition-all text-left`}>

                                        <div className='flex justify-end'>
                                            <button onClick={() => setOpen(false)} className='hover:fill-slate-500 fill-slate-400'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20.000000pt"
                                                    height="20.000000pt" viewBox="0 0 200 512">
                                                    <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                                                </svg>
                                            </button>
                                        </div>





                                        {/* Create Post Form */}
                                        <form onSubmit={handleUpdate}>





                                            {/* Name */}
                                            <div className="mt-2 grid xl:grid-cols-2 xl:gap-6">
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input onChange={onChange} value={userData.firstName} type="text" name="firstName" id="first_name" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${bordInp} peer`} placeholder=" " required />
                                                    <label htmlFor="first_name" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-6 group">
                                                    <input onChange={onChange} value={userData.lastName} type="text" name="lastName" id="last_name" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${bordInp} peer`} placeholder=" " />
                                                    <label htmlFor="last_name" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
                                                </div>
                                            </div>



                                            {/* Email id */}
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input onChange={onChange} value={userData.email} type="email" name="email" id='email' className={` block py-2 mt-3 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                                                <label htmlFor="email" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                                            </div>




                                            {/* Username */}
                                            <div className="relative z-0 w-full mb-6 group">
                                                <input onChange={onChange} value={userData.username} name="username" id="username" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                                                <label htmlFor="username" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Username</label>
                                            </div>


                                            {/* collegeName */}
                                            <div className="relative z-0 w-full mb-4 group">
                                                <input onChange={onChange} value={userData.collegeName} name="collegeName" id="collegeName" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                                                <label htmlFor="collegeName" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>College Name</label>
                                            </div>


                                            {/* Bio */}
                                            <div className="relative z-0 w-full mb-4 group">
                                                <input onChange={onChange} value={userData.bio} name="bio" id="bio" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                                                <label htmlFor="bio" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Bio</label>
                                            </div>




                                            {/* gender */}
                                            <div className="col-span-6 sm:col-span-3 relative z-0 w-full mb-6 group ">
                                                <label htmlFor="gender" className={`block font-medium ${textMain}`}>
                                                    Gender</label>
                                                <select onChange={onChange} value={userData.gender} id="gender" name="gender" autoComplete="gender"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>male</option>
                                                    <option>female</option>
                                                    <option>other</option>
                                                </select>
                                            </div>







                                            {/* Button */}
                                            <div className="flex justify-center">

                                                <button type='submit'
                                                    className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                                    Update Information
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
                                `url(${cover})`
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
                                            <div className="pl-3 flex">
                                                <img
                                                    alt="..."
                                                    src={userData.idOfAvatar ? `https://drive.google.com/uc?export=view&id=${userData.idOfAvatar}` : `https://drive.google.com/uc?export=view&id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -my-24 -ml-24"
                                                    style={{ maxWidth: "220px" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button onClick={() => { setOpen(true) }}
                                                className="ml-60 mr-0 px-2 flex py-2 font-medium text-sm leading-tight uppercase rounded-2xl shadow-md transition  duration-150 ease-in-out md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 bg-blue-600 text-white "
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                <FaUserEdit className='mx-2 text-lg' />Edit Profile
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
                                    <div className={`mb-2 font-serif ${textMain}`}>
                                        Gender - {userData.gender ? userData.gender : 'No information added, please add.'}
                                    </div>
                                    <div className={`mb-2 font-semibold ${textMain} mt-10`}>
                                        College Name - {userData.collegeName}
                                    </div>
                                </div>
                                <div className={`mt-10 py-10 border-t border-gray-300 text-center`}>
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className={`mb-4 text-base leading-relaxed ${textMain}`}>
                                                {userData.bio ? userData.bio : 'No bio, please add using update information.'}
                                            </p>
                                            {/* <a
                                                href="#pablo"
                                                className="font-normal text-blue-500"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Show more
                                            </a> */}
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
