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







    const host = "http://localhost:5000";


    const [loggedInUserData, setLoggedInUserData] = useState([]);
    const [loggedInUserPosts, setLoggedInUserPosts] = useState([]);
    const [loggedInUserComments, setLoggedInUserComments] = useState([]);



    // Get data of logged in user
    const getLoggedInUserData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }
    
            // Fetch user data
            const response = await fetch(`${host}/api/auth/getuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token,
                },
            });
            const loggedInUserData = await response.json();
            setLoggedInUserData(loggedInUserData);
    
            // Fetch user's posts and comments in parallel
            const [postsResponse, commentsResponse] = await Promise.all([
                fetch(`${host}/api/posts/user/${loggedInUserData._id}`),
                fetch(`${host}/api/comments/user/${loggedInUserData._id}/posts`),
            ]);
            const postsData = await postsResponse.json();
            const commentsData = await commentsResponse.json();
            setLoggedInUserPosts(postsData);
            setLoggedInUserComments(commentsData);
        } catch (error) {
            console.error(error);
        }
    };
    



    // call getLoggedInUserData when component mounts
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getLoggedInUserData();
        }
    }, []);







    return (
        <authContext.Provider value={{ host, handleLoggedIn, checkLogin, getLoggedInUserData, loggedInUserData, setLoggedInUserData, loggedInUserPosts, setLoggedInUserPosts, loggedInUserComments }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState