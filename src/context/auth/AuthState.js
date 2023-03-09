import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authContext from './authContext'



const AuthState = (props) => {




    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const checkLogin = () => {
        if (localStorage.getItem('token')) {
            setIsLoggedIn(true)
        }
    }
    const navigate = useNavigate();
    const handleLoggedIn = () => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }



    // to expire token
    useEffect(() => {
        const token = localStorage.getItem('token');
        const expirationTime = localStorage.getItem('expirationTime');
    
        if (token && expirationTime) {
          const now = new Date().getTime();
          if (now > expirationTime) {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
          }
        }
      }, []);

      useEffect(() => {
        const expirationTime = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
        localStorage.setItem('expirationTime', expirationTime);
      }, []);







    const host = "http://localhost:5000"


    const dataInitial = []
    const [userData, setUserData] = useState(dataInitial)

    // Get data of user
    const getUserData = async () => {
        // To-Do API call
        // API call
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setUserData(json)
    }





    return (
        <authContext.Provider value={{ handleLoggedIn, checkLogin, getUserData, userData }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState