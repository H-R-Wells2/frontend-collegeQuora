import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import React, { useContext } from "react";
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
import ModeState from './context/mode/ModeState';
import modeContext from './context/mode/modeContext';



function App() {


  // getting states from context
  const { backG } = useContext(modeContext)




  return (
    <>
    <PostState>
      <div className={`${backG} transition ease-in-out duration-500 min-h-screen`}>
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/spaces/bscit" element={<Bscit />} />
            <Route path="/spaces/bms" element={<Bms />} />
            <Route path="/spaces/baf" element={<Baf />} />
            <Route path="/spaces/bcom" element={<Bcom />} />
            <Route path='/spaces' element={<Spaces />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </PostState>
    </>
  );
}


export default function AppWrapper() {
  return (
    <ModeState>
      <App />
    </ModeState>
  )
}