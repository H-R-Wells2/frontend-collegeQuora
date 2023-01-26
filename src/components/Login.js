import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {


    const [credentials, setCredetials] = useState({email: "", password: ""})
    let navigate = useNavigate();

     // on change
     const onChange = (e) => {
        setCredetials({ ...credentials, [e.target.name]: e.target.value })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email , password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // save the auth token and redirect
            localStorage.setItem('token', json.authToken)
            navigate('/')
            props.setLoggedIn(true)
        }else{
            alert("Invalid credentials");
        }
    }



    return (
            <div className=' flex justify-center'>
                <div className={`mt-16 flex justify-center w-full max-w-lg `}>

                    <div className={`${props.mainBox} z-20 mx-8 container max-w-xs px-9 py-10 sm:px-10 sm:pb-10 sm:pt-5 rounded-lg shadow-lg  w-full lg:max-w-2xl transition ease-in-out duration-500 `}>

                        <label className={` ${props.textMain} text-3xl font-mono form-label transition  ease-in-out duration-500 inline-block mb-4 font-bold`}>Log in</label>


                        <form onSubmit={handleSubmit}>
                            <div className=" mb-6">
                                <div className='flex justify-between'>
                                    <label htmlFor='email' className={` ${props.textMain} text-xl form-label transition ease-in-out duration-500 inline-block mb-2 font-semibold`}>Email ID</label>
                                    <p className={` ${props.textMain} transition ease-in-out duration-500  mt-2 text-sm`}>Need an account?
                                        <Link to={'/signup'} className={`${props.logsign} font-medium transition ease-in-out duration-500 mx-1`} >sign up</Link></p>
                                </div>

                                <input id="email" type="email" onChange={onChange} value={credentials.email} name="email"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Enter Email ID" required />
                            </div>


                            <div className=" mb-6">
                                <label htmlFor='password' className={` ${props.textMain} text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold`}>Password</label>

                                <input id="password" type="password" onChange={onChange} value={credentials.password } name="password"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Enter Password" required />
                            </div>
                            <div className="flex  mb-6">
                                <div className="flex h-3 mt-0.5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <label htmlFor="remember" className={` ${props.remText} text-gray-300 ml-2 text-sm font-medium transition ease-in-out duration-500 cursor-pointer `}>Remember me</label>
                            </div>







                            {/* Button */}
                            <div className="flex justify-center">

                                <button type='submit'
                                    className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-semibold text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                    Log in
                                </button>
                            </div>
                            <p className={` ${props.textMain} transition ease-in-out duration-500 text-sm cursor-pointer text-center mt-3`}>Forgot password?</p>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login