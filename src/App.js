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
import AuthState from './context/auth/AuthState';
import Myprofile from './components/Myprofile';
import Searched from './components/Searched';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import About from './components/About';
import SelectedPost from './components/SelectedPost';
import Answer from './components/Answer';
import ProfilePage from './components/ProfilePage';



function App() {


  // getting states from context
  const { backG } = useContext(modeContext)






  return (
    <>
      <PostState>
        <div className={`${backG} transition ease-in-out duration-500 min-h-screen`}>
          <Router>
            <AuthState>
              <Navbar />
              <Sidebar />
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/spaces/general" element={<Content />} />
                <Route path="/spaces/bscit" element={<Bscit />} />
                <Route path="/spaces/bms" element={<Bms />} />
                <Route path="/spaces/baf" element={<Baf />} />
                <Route path="/spaces/bcom" element={<Bcom />} />
                <Route path='/spaces' element={<Spaces />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/myprofile" element={<Myprofile />} />
                <Route path="/searched" element={<Searched />} />
                <Route path="/policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/about" element={<About />} />
                <Route path="/answer" element={<Answer />} />
                <Route path="/post/:id" element={<SelectedPost />} />
                <Route path="/users/:username" element={<ProfilePage />} />
              </Routes>
            </AuthState>
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