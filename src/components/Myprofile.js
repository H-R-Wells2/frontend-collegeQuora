import React, { useContext, useEffect } from 'react'
import authContext from '../context/auth/authContext';
import modeContext from '../context/mode/modeContext';


export const Myprofile = () => {




    // For printing notes
    const { getUserData, userData } =  useContext(authContext);
    useEffect(() => {
        getUserData()
        // eslint-disable-next-line
    }, [])


    // getting states from modecontext
    const { mainBox, textMain, backG, textMain2 } = useContext(modeContext)






    return (
        <>
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
                                            <button
                                                className="ml-60 mr-0 active:mr-60 active:ml-0 px-2 flex py-2 font-medium text-sm leading-tight uppercase rounded-2xl shadow-md transition  duration-150 ease-in-outmd:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 bg-blue-600 text-white "
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Connect
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
