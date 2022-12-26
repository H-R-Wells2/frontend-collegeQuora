import React, { useEffect } from 'react';
// import hrwells from "./hrwells.jpg";
import blankprofile from "./blankprofile.jpg"
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {


    let location = useLocation();
    useEffect(() => {
    }, [location]);


  return (
    <div className={` ${props.mode} shadow-md transition  ease-in-out duration-500 sticky top-0 z-50`}>
      <nav id="navb">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
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
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">

                  <Link to={'/'}><button type='button'
                    className={`${location.pathname === "/" ? props.home : props.about} transition  ease-in-out duration-300  px-3 py-2 rounded-md text-sm font-medium`}
                    aria-current="page">Home</button></Link>


                  <Link to={'/notes'}><button type='button'
                    className={`${location.pathname === "/notes" ? props.home : props.about} px-3 py-2 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>All Notes</button></Link>


                  <Link to={'/about'}><button type='button'
                    className={`${location.pathname === "/about" ? props.home : props.about}  px-3 py-2 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>About</button></Link>




                  <Link to={'/login'}><button type='button'
                    className={`${location.pathname === "/login" || location.pathname === "/signup" ? props.home : props.about} px-3 py-2 rounded-md text-sm font-medium transition  ease-in-out duration-300`}>Log in</button></Link>
                </div>
              </div>
            </div>








            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              {/* toggleMode */}
              {/* default off */}
              {/* <label className="relative flex justify-between items-center group p-2 text-xl">
                <input type="checkbox" onClick={props.toggleMode} className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-400 rounded-full duration-300 ease-in-out peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4 "></span>
              </label> */}


              {/* default - on */}
              <label className="relative flex justify-between items-center group p-2 text-xl">
                <input type="checkbox" onClick={props.toggleMode} className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
                <span className="w-10 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-blue-600 rounded-full duration-300 ease-in-out peer-checked:bg-gray-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:-translate-x-4 after:ml-4"></span>
              </label>




              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button" onClick={props.toggleProfile}
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 "
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
                  <Link to='/'
                    className="block px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0">
                    Your Profile
                  </Link>
                  <Link to='/'
                    className="block px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1">
                    Settings
                  </Link>
                  <Link to='/login'
                    className="block px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2">
                    Log out
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
    </div >
  )
}


Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
  }
  
  
  Navbar.defaultProps = {
    title: 'Bitch',
    aboutText: 'Fcuk'
  }