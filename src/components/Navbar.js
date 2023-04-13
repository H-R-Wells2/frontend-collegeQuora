import React, { useEffect, useContext, useRef, useState } from 'react';
import blankprofile from "../images/blankprofile.jpg";
import CQlogo1 from "../images/CQlogo1.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import AddQuestionModal from './AddQuestionModal';
import { IoLogIn } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import Alert from './Alert';



export default function Navbar() {


    // getting states from context
    const context = useContext(modeContext)
    const { mode, about, navBtn, navBtn2, navMenu, mainBox, textMain, textArea, svg, toggleMode, addOrCrClass, cancelBtn, open, setOpen, home, showWhenLogedIn, hideWhenLoggedIn, toggleProfile, toggleNavMenu, loggedIn } = context

    // getting states for alert
    const { alert, showAlert, alertMessage, alertType } = context

    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
    }, [location]);


    //to check if logged in and navigate to login page when click on add question
    const addQuestionBtn = () => {
        if (loggedIn) {
            setOpen(true)
        }
        else {
            navigate('/login')
            alert('error', "please login first")
        }
    }


    // log out
    const logout = () => {
        navigate('/login')
        window.location.reload();
        localStorage.removeItem('token');
    }



    // for profile menu
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleProfileClick = () => {
        setIsOpen(!isOpen);
        toggleProfile();
    }


    // to close the profile menu when clicks outside of the menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };


    // To search posts
    const { getSearchedPosts, searchParams, setSearchParams } = useContext(postContext);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchParams({ ...searchParams, [name]: value });
        if (event.target.validity.tooShort) {
            event.target.setCustomValidity(`Please enter at least ${event.target.minLength} characters.`);
        } else {
            event.target.setCustomValidity('');
        }
    };


    
    // Submit parameters to search
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getSearchedPosts();
        // setSearchParams({ title: "" });
        navigate('/searched');
    };













    return (
        <div className={` ${mode} w-full shadow-gray-400 shadow-md transition ease-in-out duration-500 sticky top-0 z-50`}>
            <nav id="navb">
                <div className="max-w-7xl mx-auto px-2 sm:px-1 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        {/* <img className="h-16 w-42" src={CQlogo1} alt="" /> */}
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">







                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button" onClick={toggleNavMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 ring-gray-500 ring-inset outline-none ring-1 "
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>


                                {/*Icon when menu is closed. */}
                                <svg
                                    className={`${navBtn2} h-6 w-6`}
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
                                    className={`${navBtn} h-6 w-6`}
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



                                    <Link className={` mt-1 h-10 w-40 `} to={'/'}>
                                        <img className="  h-10 w-40   " src={CQlogo1} alt="" /></Link>


                                    <Link to={'/spaces'}
                                        className={`${location.pathname === "/spaces" || location.pathname === "/spaces/bscit" || location.pathname === "/spaces/bms" || location.pathname === "/spaces/baf" || location.pathname === "/spaces/bcom" || location.pathname === "/spaces/general" ? home : about} px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Spaces</Link>


                                    <Link to={'/answer'}
                                        className={`${location.pathname === "/answer" ? home : about}  px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Answer</Link>


                                    <Link to={'/notifications'}
                                        className={`${location.pathname === "/notifications" ? home : about} px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Notifications</Link>


                                    {/* Search bar */}
                                    <form onSubmit={handleSubmit} className="mt-1 relative flex items-center h-9 rounded-lg focus-within:shadow-lg border-gray-400 border-2 bg-white overflow-hidden">
                                        <button className="grid place-items-center h-full w-12 text-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>

                                        <input required name='title' value={searchParams.title} onChange={handleInputChange}
                                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-1"
                                            type="text"
                                            id="search"
                                            minLength={3}
                                            title={`Please enter at least 3 characters.`}
                                            placeholder="Search something.." />
                                    </form>

                                </div>
                            </div>
                        </div>








                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {/* Add question */}
                            <button onClick={addQuestionBtn} type='button'
                                className={`${open === true ? home : about} ml-2 px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300 hidden sm:block`}>Add Questions</button>



                            {/* default - on */}
                            <label className="relative flex justify-between items-center group p-2 text-xl">
                                <input type="checkbox" onClick={toggleMode} className=" h-7 w-7 absolute left-1/2 -translate-x-1/2 appearance-none peer rounded-md" />
                                <span className="w-7 h-7 flex items-center flex-shrink-0 p-1 bg-blue-600 rounded-full ease-in-out peer-checked:bg-gray-300 ">{svg}</span>
                            </label>







                            {/* <!-- Profile dropdown --> */}
                            <div className="ml-1 relative">
                                <div>
                                    <button
                                        type="button" onClick={handleProfileClick}
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 w-max"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={blankprofile} alt="" />
                                    </button>
                                </div>


                                {/* profile */}
                                {isOpen && (
                                    <div
                                        ref={menuRef}
                                        className="absolute right-0 top-0 mt-10 w-48 rounded-lg shadow-lg bg-white z-10"
                                    >
                                        <Link onClick={() => {
                                            toggleProfile();
                                            setIsOpen(false);
                                        }} to='/myprofile'
                                            className={`px-4 rounded-t-lg py-2 hover:bg-gray-200 text-sm text-gray-700 ${showWhenLogedIn}`}
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-0">
                                            My Profile
                                        </Link>
                                        <button onClick={() => {
                                            logout();
                                            setIsOpen(false);
                                        }}
                                            className={`border-t rounded-b-lg border-gray-400 px-4 py-2 hover:bg-gray-200 text-sm w-full text-start text-gray-700 ${showWhenLogedIn}`}
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-0">
                                            Log Out
                                        </button>
                                        <Link onClick={() => {
                                            toggleProfile();
                                            setIsOpen(false);
                                        }} to='/login'
                                            className={`rounded-t-lg px-4 py-2 hover:bg-gray-200 text-sm text-gray-700 border-b-2 flex ${hideWhenLoggedIn}`}
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-1">
                                            <IoLogIn className='h-5 w-5 mx-1' />Log In
                                        </Link>
                                        <Link onClick={() => {
                                            toggleProfile();
                                            setIsOpen(false);
                                        }} to='/signup'
                                            className={`rounded-b-lg flex px-4 py-2 hover:bg-gray-200 text-sm text-gray-700 ${hideWhenLoggedIn}`}
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="user-menu-item-2">
                                            <BsFillPersonFill className='h-5 w-4 mr-1 mx-1' />Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>






                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`sm:hidden  ${navMenu} `} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to='/'
                            className={`${home} block border-2 transition  ease-in-out duration-500  px-3 py-2 rounded-md text-base font-medium`}
                            aria-current="page">
                            Home
                        </Link>

                        <Link to='/about'
                            className={`${about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            About
                        </Link>

                        <Link to='/'
                            className={`${about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Terms
                        </Link>

                        <Link to='/'
                            className={`${about} block px-3 py-2 rounded-md text-base border-2 border-gray-400 font-medium`}>
                            Privacy Policy
                        </Link>

                    </div>
                </div>
            </nav >
            <AddQuestionModal open={open} setOpen={setOpen} mainBox={mainBox} textArea={textArea} textMain={textMain} addOrCrClass={addOrCrClass} cancelBtn={cancelBtn} />
            {showAlert && (
                <Alert type={alertType} message={alertMessage} />
            )}
        </div >
    )
}


