import './App.css';
import Navbar from "./components/Navbar";
import React, { useState } from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {



  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("md:hover:bg-gray-700 text-white hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white sm:border-0 border-2 border-white");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");


  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();


  // function to display msg in alert (not nessecery)
  const showAlert = (msg1, type1) => {
    setAlert({
      msg: msg1,
      type: type1
    })
  }


  // function to change mode (dark/light)
  const toggleMode = () => {
    // set dark mode
    if (mode === "bg-orange-100 text-black") {
      setMode('bg-gray-800 text-gray-300')
      setAbout('md:hover:bg-gray-700 text-white hover:text-white')
      setHome('bg-gray-900 text-white sm:border-0 border-2 border-white')


    }
    // set light mode
    else {
      setMode("bg-orange-100 text-black")
      setAbout('md:hover:bg-orange-50 text-black')
      setHome('bg-orange-200 text-black sm:border-0 border-2 border-black')
    }
  }

  
    // function to hide and unhide mobile navbar
    const toggleNavMenu = () => {
      if (navBtn === "block") {
        setNavBtn('hidden');
        setNavBtn2('block');
        setNavMenu('hidden');
      }
      else {
        setNavBtn('block');
        setNavBtn2('hidden');
        setNavMenu('block');
      }
    }



    // function to hide and unhide profileMenu 
    const toggleProfile = () => {
      if (profile === "hidden") {
        setProfile('block opacity-0');
        setTimeout(() => {
          setProfile('opacity-100')
        }, 100);
      }
      else {
        setProfile('opacity-0');
        setTimeout(() => {
          setProfile('hidden')
        }, 500);
      }
    }


  return (
    <>
    <Router>
      <Navbar profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} about={about} home={home} />
      </Router>
    </>
  );
}

export default App;
