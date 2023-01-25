import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import React, { useState } from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Content from './components/Content';
import Bscit from './components/Bscit';
import Bms from './components/Bms';
import Baf from './components/Baf';
import Bcom from './components/Bcom';
import Spaces from './components/Spaces';



function App() {






  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("md:hover:bg-gray-700 text-white hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white sm:border-0 border-2 border-white shadow-sm shadow-gray-400");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");


  // useStates for alert
  const [alertHide, setAlertHide] = useState("block");
  const [alert, setAlert] = useState();



  // useStates for Svg
  const [svg, setSvg] = useState(<svg height={19} width={19} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>)


  // useStates for Line
  const [line, setLine] = useState("border-gray-200")

  // useState for button in card
  const [cardBtn, setCardBtn] = useState("bg-blue-600 text-white")




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
      setHome('bg-gray-900 text-white sm:border-0 border-2 border-white shadow-sm shadow-gray-400')
      setSvg(<svg height={19} width={19} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>)
      setLine("border-gray-200")
      setCardBtn("bg-blue-600 text-white")
    }
    // set light mode
    else {
      setMode("bg-orange-100 text-black")
      setAbout('md:hover:bg-orange-50 text-black')
      setHome('bg-orange-200 text-black sm:border-0 border-2 border-black shadow-sm shadow-gray-400')
      setSvg(<svg height={19} width={19} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>)
      setLine("border-gray-800")
      setCardBtn("bg-orange-400 text-black")
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
        <Navbar profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} showAlert={showAlert} mode={mode} toggleMode={toggleMode} about={about} home={home} svg={svg} />
        <Sidebar mode={mode} home={home} about={about} line={line} />
        <Routes>
          <Route path="/" element={<Content mode={mode} cardBtn={cardBtn} />} />
          <Route path="/spaces/bscit" element={<Bscit mode={mode} cardBtn={cardBtn} />} />
          <Route path="/spaces/bms" element={<Bms mode={mode} cardBtn={cardBtn} />} />
          <Route path="/spaces/baf" element={<Baf mode={mode} cardBtn={cardBtn} />} />
          <Route path="/spaces/bcom" element={<Bcom mode={mode} cardBtn={cardBtn} />} />
          <Route path='/spaces' element={<Spaces mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;