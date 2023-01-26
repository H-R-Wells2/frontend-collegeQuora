import React, { useEffect, useState } from 'react';
// import hrwells from "./hrwells.jpg";
import blankprofile from "./blankprofile.jpg"
import CQlogo1 from "./CQlogo1.png"
import { Link, useLocation } from "react-router-dom";
import AddQuestionModal from './AddQuestionModal';
import { IoLogIn } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";




export default function Navbar(props) {

    // useStates for Card
    const [mainBox, setMainBox] = useState("bg-gray-700");
    const [textMain, settextMain] = useState('text-white');
    const [textArea, setTextArea] = useState('bg-slate-300 placeholder-slate-600');

    // useStates for modal buttons
    const [addOrCrClass, setAddOrCrClass] = useState("hover:bg-orange-200")
    
    // useStates for cancel button in modal
    const [cancelBtn, setCancelBtn] = useState("hover:bg-gray-600")


    const [open, setOpen] = useState(false)

    const addQuestionBtn = () => {
        setOpen(true)
        if (props.mode === "bg-gray-800 text-gray-300") {
            setMainBox('bg-gray-700')
            settextMain('text-white')
            setTextArea('bg-slate-300 placeholder-slate-600')
            setAddOrCrClass('hover:bg-gray-500')
            setCancelBtn("hover:bg-gray-600 ")
        }
        else {
            setMainBox('bg-orange-100')
            settextMain('text-black')
            setTextArea('bg-white placeholder-slate-400')
            setAddOrCrClass('hover:bg-orange-200')
            setCancelBtn("hover:bg-orange-200")
        }

    }

    let location = useLocation();
    useEffect(() => {
    }, [location]);


    return (
        <div className={` ${props.mode} w-full shadow-gray-400 shadow-md transition ease-in-out duration-500 sticky top-0 z-50`}>
            <nav id="navb">
                <div className="max-w-7xl mx-auto px-2 sm:px-1 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        {/* <img className="h-16 w-42" src={CQlogo1} alt="" /> */}
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">







                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button" onClick={props.toggleNavMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 ring-gray-500 ring-inset outline-none ring-1 "
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>


                                {/*Icon when menu is closed. */}
                                <svg
                                    className={`${props.navBtn2} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                {/*Icon when menu is open. */}
                                <svg
                                    className={`${props.navBtn} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>






                        {/* Nav tabs */}
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                            <div className="hidden sm:block sm:ml-0">
                                <div className="flex sm:space-x-4">



                                    <Link  className={`mt-1`} to={'/'}>
                                       <img className=" h-10 w-40" src={CQlogo1} alt="" /></Link>


                                    <Link to={'/spaces'}
                                        className={`${location.pathname === "/spaces" || location.pathname === "/spaces/bscit" || location.pathname === "/spaces/bms" || location.pathname === "/spaces/baf" || location.pathname === "/spaces/bcom" || location.pathname === "/spaces/general" ? props.home : props.about} px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Spaces</Link>


                                    <Link to={'/answer'}
                                        className={`${location.pathname === "/answer" ? props.home : props.about}  px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Answer</Link>


                                    <Link to={'/notifications'}
                                        className={`${location.pathname === "/notifications" ? props.home : props.about} px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Notifications</Link>


                                    {/* Search bar */}
                                    <div className="mt-1 relative flex items-center h-9 rounded-lg focus-within:shadow-lg border-gray-400 border-2 bg-white overflow-hidden">
                                        <div className="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>

                                        <input
                                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                            type="text"
                                            id="search"
                                            placeholder="Search something.." />
                                    </div>

                                </div>
                            </div>
                        </div>








                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                            <button onClick={addQuestionBtn} type='button'
                                className={`${open === true ? props.home : props.about} ml-2 px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300 hidden sm:block`}>Add Questions</button>



                            {/* default - on */}
                            <label className="relative flex justify-between items-center group p-2 text-xl">
                                <input type="checkbox" onClick={props.toggleMode} className=" h-7 w-7 absolute left-1/2 -translate-x-1/2 appearance-none peer rounded-md" />
                                <span className="w-7 h-7 flex items-center flex-shrink-0 p-1 bg-blue-600 rounded-full ease-in-out peer-checked:bg-gray-300 ">{props.svg}</span>
                            </label>



                            {/* <!-- Profile dropdown --> */}
                            <div className="ml-1 relative">
                                <div>
                                    <button
                                        type="button" onClick={props.toggleProfile}
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 w-max"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={blankprofile} alt="" />
                                    </button>
                                </div>


                                {/* profile */}
                                <div
                                    className={`${props.profile} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ease-in-out duration-300 `}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1">
                                    {/* <Link to='/'
                                        className="block px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-0">
                                        Your Profile
                                    </Link> */}
                                    <Link onClick={props.toggleProfile} to='/login'
                                        className="px-4 py-2 hover:bg-gray-200 text-sm text-gray-700 border-b-2 flex"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-1">
                                        <IoLogIn className='h-5 w-5 mx-1' />Log In
                                    </Link>
                                    <Link onClick={props.toggleProfile} to='/signup'
                                        className="flex px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="user-menu-item-2">
                                        <BsFillPersonFill className='h-5 w-4 mr-1 mx-1' />Sign Up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`sm:hidden  ${props.navMenu} `} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/'
                            className={`${props.home} block border-2 transition  ease-in-out duration-500  px-3 py-2 rounded-md text-base font-medium`}
                            aria-current="page">
                            Text Control
                        </Link>

                        <Link to='/about'
                            className={`${props.about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            About
                        </Link>

                        <Link to='/'
                            className={`${props.about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Projects
                        </Link>

                        <Link to='/'
                            className={`${props.about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Calender
                        </Link>

                    </div>
                </div>
            </nav >
            <AddQuestionModal open={open} setOpen={setOpen} mainBox={mainBox} textArea={textArea} textMain={textMain} addOrCrClass={addOrCrClass} cancelBtn={cancelBtn} />
        </div >
    )
}


