import React, { useContext } from "react";
import { AiFillProfile, AiOutlineTeam } from "react-icons/ai";
import { HiOutlineCalculator, HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineComputer, MdOutlineCalculate, MdOutlinePrivacyTip } from "react-icons/md";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import modeContext from "../context/mode/modeContext";
import postContext from "../context/posts/postContext";
import { IoCaretDownCircleSharp } from "react-icons/io5";


export default function SidebarForMobile() {


    // getting states from context
    const context = useContext(modeContext)
    const { mode, about, line, home, navMenu, toggleNavMenu, open, setOpen, loggedIn } = context
    const { searchParams, setSearchParams, getSearchedPosts } = useContext(postContext)

    let navigate = useNavigate();


    // effect on navigation
    let location = useLocation();
    useEffect(() => {
    }, [location]);

    // Submit parameters to search
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getSearchedPosts();
        // setSearchParams({ title: "" });
        navigate('/searched');
        toggleNavMenu();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchParams({ ...searchParams, [name]: value });
        if (event.target.validity.tooShort) {
            event.target.setCustomValidity(`Please enter at least ${event.target.minLength} characters.`);
        } else {
            event.target.setCustomValidity('');
        }
    };

    //to check if logged in and navigate to login page when click on add question
    const addQuestionBtn = () => {
        if (loggedIn) {
            setOpen(true);
            toggleNavMenu();
        }
        else {
            navigate('/login');
            alert('error', "please login first");
        }
    }

    return (
        <>
            <div
                className={`${mode} z-40 fixed sm:hidden transition-transform ease-in-out duration-500 ${navMenu === 'hidden' ? '-translate-x-full' : 'translate-x-0'
                    } flex-col h-full p-3 shadow w-60`}
            >


                {/* Add question */}
                <button onClick={addQuestionBtn} type='button'
                    className={`${open === true ? home : about} mt-3 mb-4 px-3 py-3 rounded-md text-sm font-medium transition  ease-in-out duration-300 w-full text-center border`}>Add Questions</button>


                {/* Search bar */}
                <form onSubmit={handleSubmit} className="mt-1 relative flex items-center h-9 rounded-lg focus-within:shadow-lg border-gray-400 border-2 bg-white overflow-hidden">


                    <input required name='title' value={searchParams.title} onChange={handleInputChange}
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 pl-1"
                        type="text"
                        id="searchf"
                        minLength={3}
                        title={`Please enter at least 3 characters.`}
                        placeholder="Search something.." />
                    <button className="grid place-items-center h-full w-12 text-gray-600 bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>


                <div className={`${line} border-t mt-5 flex justify-center `}>
                    <span className="mr-16 text-xl font-bold flex items-center p-2 rounded-md "><IoCaretDownCircleSharp className="mr-2 h-6 w-6" />Spaces</span>
                </div>
                <div className="space-y-3">


                    <div className="flex-1">
                        <ul className="pt-2 pb-4 mb-2 space-y-2 text-md">
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/spaces/general'}
                                    className={`${location.pathname === "/spaces/general" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiFillProfile className="mr-2 h-6 w-6" />General</Link>
                            </li>
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/spaces/bscit'}
                                    className={`${location.pathname === "/spaces/bscit" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineComputer className="mr-2 h-6 w-6" />BSc-IT</Link>
                            </li>
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/spaces/baf'}
                                    className={`${location.pathname === "/spaces/baf" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineCalculator className="mr-2 h-6 w-6" />BAF</Link>
                            </li>
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/spaces/bcom'}
                                    className={`${location.pathname === "/spaces/bcom" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineCalculate className="mr-2 h-6 w-6" />B.Com</Link>
                            </li>
                        </ul>
                        <ul className={`${line} border-t pt-4 space-y-2 transition ease-in-out duration-500`}>
                            <li onClick={toggleNavMenu} className="rounded-sm ">
                                <Link to={'/about'}
                                    className={`${location.pathname === "/about" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiOutlineTeam className="mr-2 h-6 w-6" />About</Link>
                            </li>
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/terms'}
                                    className={`${location.pathname === "/terms" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineDocumentText className="mr-2 h-6 w-6" />Terms</Link>
                            </li>
                            <li onClick={toggleNavMenu} className="rounded-sm">
                                <Link to={'/policy'}
                                    className={`${location.pathname === "/policy" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlinePrivacyTip className="mr-2 h-6 w-6" />Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}