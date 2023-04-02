import React, { useContext } from 'react'
// import authContext from '../context/auth/authContext';
import modeContext from '../context/mode/modeContext';
import { Link } from 'react-router-dom';




const NotLoggedIn = () => {



 // getting states from modecontext
 const { backG, textArea } = useContext(modeContext)











  return (
    <div className={`${backG} ${textArea} transition duration-150 ease-in-out `}>

            {/* <!-- Hero Area Start --> */}
            <section id="hero-area" className={`pt-28 pb-1`}>
                <div className="container">
                    <div className="flex justify-between">
                        <div className="w-full text-center">
                            <h2 className="text-4xl font-bold leading-snug mb-10 wow fadeInUp" data-wow-delay="1s">College-Quora
                                <br className="hidden lg:block" />Ask to your collegemates</h2>
                            <div className="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
                                <Link to={'/login'}><button type='button'
                                    className="w-28 px-7 py-3 md:py-2.5 bg-blue-600 text-white font-medium text-lg leading-tight  rounded-full shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">Log in</button></Link>
                            </div>
                            <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
                                <img className="img-fluid mx-auto" src="assets/img/hero.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero Area End --> */}




            <section id="Subscribes" className={`text-center py-10`}>
                <div className="container">
                    <div className="flex justify-center mx-3">
                        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
                            <h4 className="mb-3 font-medium text-lg" data-wow-delay="0.3s">Start For Free</h4>
                            <p className="mb-4 text-gray-600 leading-loose text-sm wow fadeInUp" data-wow-delay="0.6s">Ask any questions directly to all your collegemates  <br /> Best platform to make contacts with each other</p>
                            <form for="">
                                <div className="wow fadeInDown" data-wow-delay="0.3s">
                                    <input type="Email" className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none" name="email" placeholder="Email Address" />
                                    <button className="border-0 bg-blue-600 text-white rounded-full pr-2 pl-2 h-12 duration-300 hover:opacity-75" type="submit">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>






            



        </div>
  )
}

export default NotLoggedIn