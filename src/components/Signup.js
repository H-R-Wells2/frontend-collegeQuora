import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import modeContext from '../context/mode/modeContext';
import postContext from '../context/posts/postContext';
import authContext from '../context/auth/authContext';

const Signup = () => {



    // getting states from context
    const { mainBox, textMain, logsign, labelInp, bordInp, setLoggedIn, alert, checkLogin } = useContext(modeContext);
    const { host } = useContext(postContext);
    const { getLoggedInUserData } = useContext(authContext);



    // useStates for credentials
    const [credentials, setCredetials] = useState({ firstName: "", lastName: "", email: "", password: "", username: "", collegeName: "", gender: "", bio: "" })
    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { firstName, lastName, email, password, username, collegeName, gender, bio } = credentials;
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password, username, collegeName, gender, bio })
            });
            const json = await response.json();


            if (json.success) {
                localStorage.setItem('token', json.authToken);
                alert('success', "User registered successfully");
                getLoggedInUserData();
                checkLogin();
                navigate('/');
                setLoggedIn(true);
            } else {
                alert('error', json.error);
            }
        } catch (error) {
            console.error(error);
            alert('error', 'An error occurred. Please try again later.');
        }
    };







    // on change to check repeate pssword
    const [disabledBtn, setDisabledBtn] = useState("hidden")
    const validating = () => {
        if (document.getElementById("password").value === document.getElementById("cpassword").value) {
            setDisabledBtn("hidden")

        }
        else {
            setDisabledBtn("block")
        }


    }
    const onChange = (e) => {
        const inputName = e.target.name;
        let inputValue = e.target.value;

        // Disallow capital letters in the "username" input field
        if (inputName === "username" && inputValue !== inputValue.toLowerCase()) {
            inputValue = inputValue.toLowerCase();
            e.target.value = inputValue;
        }

        setCredetials({ ...credentials, [inputName]: inputValue });
    }



    return (
        <div className='flex justify-center'>
            <div className={`flex justify-center w-full max-w-lg mt-10 `}>

                <div className={`${mainBox} mb-8 z-20 mx-2 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                    <h1 className={`${textMain} text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold `}>Sign up</h1>
                    <form onSubmit={handleSubmit}>



                        {/* Name */}
                        <div className="mt-2 grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={onChange} type="text" name="firstName" id="first_name" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${bordInp} peer`} placeholder=" " required />
                                <label htmlFor="first_name" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={onChange} type="text" name="lastName" id="last_name" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  ${bordInp} peer`} placeholder=" " />
                                <label htmlFor="last_name" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
                            </div>
                        </div>



                        {/* Email id */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={onChange} type="email" name="email" id='email' className={` block py-2 mt-3 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="email" className={`peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                            <p className={`${textMain} transition ease-in-out duration-500 mt-2 text-sm`}>Already have an account?
                                <Link to={'/login'} className={`${logsign} transition ease-in-out duration-500 font-medium ml-1`} >Log in</Link></p>
                        </div>




                        {/* Username */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={onChange} name="username" id="username" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Username</label>
                        </div>




                        {/* College Name */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={onChange} name="collegeName" id="collegeName" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>College Name</label>
                        </div>


                        {/* gender */}
                        <div className="col-span-6 sm:col-span-3 relative z-0 w-full mb-6 group">
                            <label htmlFor="gender" className={`block font-medium ${textMain}`}>
                                Gender
                            </label>
                            <select id="gender" name="gender" autoComplete="gender" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={credentials.gender} onChange={onChange} required>
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>


                        {/* Bio */}
                        <div className="relative z-0 w-full mb-4 group">
                            <input onChange={onChange} name="bio" id="bio" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="bio" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Bio</label>
                        </div>


                        {/* Password */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={onChange} minLength={5} type="password" name="password" id="password" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="password" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 ${labelInp} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                        </div>

                        {/* Confirm password */}
                        <div className="relative z-0 w-full mb-6 group">
                            <input onChange={validating} type="password" name="cpassword" id="cpassword" className={`block py-2.5 px-0 w-full text-base ${textMain} transition ease-in-out duration-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 ${bordInp} peer`} placeholder=" " required />
                            <label htmlFor="cpassword" className={`peer-focus:font-medium absolute text-lg text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  ${labelInp}  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Confirm password</label>
                            <span className={`text-red-500 flex transition ease-in-out duration-300 ${disabledBtn}`}>Password doesn't match <IoMdCloseCircleOutline className="h-5 w-4 mt-1 ml-1" /></span>
                        </div>










                        {/* Button */}
                        <div className="flex justify-center">

                            <button type='submit'
                                className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                Sign up
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup