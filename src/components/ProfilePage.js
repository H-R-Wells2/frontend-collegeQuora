import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import postContext from '../context/posts/postContext';
import modeContext from '../context/mode/modeContext';
import cover from "../images/cover.jpg";




export default function ProfilePage() {

    // getting states from modecontext
    const { mainBox, textMain, backG, textMain2 } = useContext(modeContext)
    const { host } = useContext(postContext);

    const [user, setUser] = useState(null);
    const { username } = useParams();



    const fetchUser = useCallback(async (username) => {
        try {
            const response = await fetch(`${host}/api/auth/${username}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
            });
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error(error.message);
        }
        // eslint-disable-next-line
    }, [host, username]);


    useEffect(() => {
        fetchUser(username);
    }, [fetchUser, username]);





    return (
        <div className='ml-60'>

            {user ? (
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
                                    <div className="flex justify-between mx-56">
                                        {/* Profile Image */}
                                        <div className="w-full lg:w-3/12 px-4 flex justify-center">
                                            <div className="relative">
                                                <div className="pl-3 flex">
                                                    <img
                                                        alt="..."
                                                        src={user.idOfAvatar ? `https://drive.google.com/uc?export=view&id=${user.idOfAvatar}` : `https://drive.google.com/uc?export=view&id=1HHTqxMVPJSDMTBvl2ZlyYzse4gpPSeBv`}
                                                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -my-24 -ml-24"
                                                        style={{ maxWidth: "220px" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Data */}
                                        <div className="w-full lg:w-4/12 px-4">
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

                                    {/* User Data */}
                                    <div className="text-center mt-12">
                                        <h3 className={`text-3xl font-semibold leading-normal mb-1 ${textMain}`}>
                                            {user.firstName} {user.lastName}
                                        </h3>
                                        <div className={`leading-normal mt-0 mb-1 font-bold text-lg ${textMain}`}>
                                            {user.username}
                                        </div>
                                        <div className={`text-sm leading-normal mt-0 mb-1 ${textMain2} font-bold`}>
                                            {user.email}
                                        </div>
                                        <div className={`mb-2 font-serif ${textMain}`}>
                                            Gender - {user.gender ? user.gender : 'No information added, please add.'}
                                        </div>
                                        <div className={`mb-2 font-semibold ${textMain} mt-10`}>
                                            College Name - {user.collegeName}
                                        </div>
                                    </div>
                                    <div className={`mt-10 py-10 border-t border-gray-300 text-center`}>
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className={`mb-4 text-base leading-relaxed ${textMain}`}>
                                                    {user.bio ? user.bio : 'No bio, please add using update information.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            ) : (
                <div className='w-full flex justify-center mt-28'>
                    <div role="status" className='mt-48'>
                        <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}
