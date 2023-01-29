import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import React, { useState } from "react";
import Login from './components/Login';
import Signup from './components/Signup';


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
import PostState from './context/posts/PostState';



function App() {






  // useStates for Navbar
  const [mode, setMode] = useState("bg-gray-800 text-gray-300");
  const [about, setAbout] = useState("md:hover:bg-gray-700 text-white hover:text-white");
  const [home, setHome] = useState("bg-gray-900 text-white sm:border-0 border-2 border-white shadow-sm shadow-gray-400");
  const [navBtn, setNavBtn] = useState("hidden");
  const [navBtn2, setNavBtn2] = useState("block");
  const [navMenu, setNavMenu] = useState("hidden");
  const [profile, setProfile] = useState("hidden");

  // useStates for Card
  const [mainBox, setMainBox] = useState("bg-gray-700");
  const [textMain, settextMain] = useState('text-white');
  const [textArea, setTextArea] = useState('bg-slate-300 placeholder-slate-600');

  // useStates for login
  const [logsign, setLogsign] = useState("text-sky-400")
  const [remText, setRemText] = useState("text-gray-300")
  const [labelInp, setLabelInp] = useState("peer-focus:text-sky-400")
  const [bordInp, setBordInp] = useState("focus:border-sky-400")
  const [loggedIn, setLoggedIn] = useState(false)

  // useStates for persnol notes
  const [backG, setBackG] = useState("bg-slate-400")
  const [tagColor, setTagColor] = useState("bg-gray-200")


  // useStates for alert
  // const [alertHide, setAlertHide] = useState("block");
  // const [alert, setAlert] = useState();



  // useStates for Svg
  const [svg, setSvg] = useState(<svg height={19} width={19} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>)


  // useStates for Line
  const [line, setLine] = useState("border-gray-200");

  // useState for button in card
  const [cardBtn, setCardBtn] = useState("bg-blue-600 hover:bg-blue-700 text-white");
  const [cardBtnH, setCardBtnH] = useState("hover:bg-slate-500");




  // function to display msg in alert (not nessecery)
  // const showAlert = (msg1, type1) => {
  //   setAlert({
  //     msg: msg1,
  //     type: type1
  //   })
  // }


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
      setCardBtn("bg-blue-600 hover:bg-blue-700 text-white")
      setMainBox('bg-gray-700')
      settextMain('text-white')
      setTextArea('bg-slate-300 placeholder-slate-600')
      setBackG("bg-slate-400")
      setTagColor("bg-gray-200")
      setLogsign("text-sky-400")
      setRemText("text-gray-300")
      setBordInp("focus:border-sky-400")
      setLabelInp("peer-focus:text-blue-400")
      setCardBtnH("hover:bg-slate-500")
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
      setCardBtn("bg-orange-300 hover:bg-orange-200 text-black")
      setMainBox('bg-orange-50')
      settextMain('text-black')
      setTextArea('bg-white placeholder-slate-400')
      setBackG("bg-orange-200")
      setTagColor("bg-gray-300")
      setLogsign("text-blue-700")
      setRemText("text-gray-900")
      setBordInp("focus:border-blue-600")
      setLabelInp("peer-focus:text-blue-600")
      setCardBtnH("hover:bg-orange-200")
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
  const [showWhenLogedIn, setShowWhenLoggedIn] = useState("hidden")
  const [hideWhenLoggedIn, setHideWhenLoggedIn] = useState("block")
  const toggleProfile = () => {
    if (profile === "hidden") {
      setProfile('block opacity-0');
      setTimeout(() => {
        setProfile('opacity-100')
      }, 100);
      if (loggedIn === true) {
        setShowWhenLoggedIn("block");
        setHideWhenLoggedIn("hidden");
      }
      else {
        setShowWhenLoggedIn("hidden");
        setHideWhenLoggedIn("block")
      }
    }
    else {
      setProfile('opacity-0');
      setTimeout(() => {
        setProfile('hidden')
      }, 500);


    }
  }


  return (
    <div className={`${backG} transition ease-in-out duration-500 min-h-screen`}>
      <PostState>
      <Router>
        <Navbar profile={profile} toggleProfile={toggleProfile} navBtn={navBtn} navBtn2={navBtn2} navMenu={navMenu} toggleNavMenu={toggleNavMenu} mode={mode} toggleMode={toggleMode} about={about} home={home} svg={svg} loggedIn={loggedIn} showWhenLogedIn={showWhenLogedIn} hideWhenLoggedIn={hideWhenLoggedIn} />
        <Sidebar mode={mode} home={home} about={about} line={line} />
        <Routes>
          <Route path="/" element={<Content mainBox={mainBox} textMain={textMain} cardBtn={cardBtn} cardBtnH={cardBtnH} />} />
          <Route path="/spaces/bscit" element={<Bscit mainBox={mainBox} textMain={textMain} cardBtn={cardBtn} />} />
          <Route path="/spaces/bms" element={<Bms mainBox={mainBox} textMain={textMain} cardBtn={cardBtn} />} />
          <Route path="/spaces/baf" element={<Baf mainBox={mainBox} textMain={textMain} cardBtn={cardBtn} />} />
          <Route path="/spaces/bcom" element={<Bcom mainBox={mainBox} textMain={textMain} cardBtn={cardBtn} />} />
          <Route path='/spaces' element={<Spaces mainBox={mainBox} textMain={textMain} backG={backG} />} />
          <Route path="/login" element={<Login backG={backG} textMain={textMain} tagColor={tagColor} mainBox={mainBox} textArea={textArea} logsign={logsign} remText={remText} setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup backG={backG} textMain={textMain} tagColor={tagColor} mainBox={mainBox} textArea={textArea} logsign={logsign} remText={remText} bordInp={bordInp} labelInp={labelInp} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </Router>
      </PostState>
    </div>
  );
}

export default App;