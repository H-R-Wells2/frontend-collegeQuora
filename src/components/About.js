import React, { useContext } from 'react';
import modeContext from '../context/mode/modeContext';
import hrwells from "../images/hrwells.jpg";



const About = () => {

    // getting states from modecontext
    const { textMain, mainBox, mode, textSec } = useContext(modeContext)


    return (
        <div className={`flex justify-center items-center`}>
            <div className={`w-full max-w-4xl transition ease-in-out duration-500 p-8 my-4 rounded-lg ${mainBox} ${textMain}`}>



                {/* <!-- Container for demo purpose --> */}
                <div className="container my-24 px-6 mx-auto">

                    {/* <!-- Section: Design Block --> */}
                    <section className="mb-32">
                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                                <p className=" mb-6">
                                    If you have any questions, comments, or concerns about College-Quora, please don't hesitate to reach out to us.
                                    You can contact us by sending an email to our support team at support@college-quora.com.
                                </p>
                                <p className=" mb-2"> Our support team typically responds to inquiries within 24-48 hours, although response times may vary during peak periods.
                                    Thank you for using College-Quora! We value your feedback and are committed to providing the best possible experience for college students.</p>
                                <p className=" mb-2">+ 01 234 567 89</p>
                                <p className=" mb-2">support@college-quora.com</p>
                            </div>
                            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                <form>
                                    <div className="form-group mb-6">
                                        <input id="name" type="text" name="name"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Name" required />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input id="email" type="email" name="email"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Email ID" required />
                                    </div>
                                    <div className="form-group mb-6">
                                        <textarea id="message" type="message" name="message"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Message" required />
                                    </div>
                                    <div className="flex  mb-6">
                                        <div className="flex h-3 mt-0.5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                        </div>
                                        <label htmlFor="remember" className={`select-none ${textMain} text-gray-300 ml-2 text-sm font-medium transition ease-in-out duration-500 cursor-pointer `}>Send me a copy of this message</label>
                                    </div>
                                    <button type='submit'
                                        className=" w-full px-2 py-3 md:py-2.5 bg-blue-600 text-white font-semibold text-lg leading-tight  rounded shadow-md md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 transition  duration-150 ease-in-out">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Section: Design Block --> */}

                </div>
                {/* <!-- Container for demo purpose --> */}


                {/* Who I am */}
                <div className='flex px-3 justify-center'>
                    <section className={`${mode} rounded-lg transition ease-in-out duration-500`}>
                        <div className="container px-10 py-8 mx-auto">
                            <div className="items-center lg:flex">
                                <div className="lg:w-1/2">
                                    <h2 className={`${textMain} transition ease-in-out duration-500 text-3xl font-bold `}>Who am I?</h2>

                                    <p className={`mt-4 ${textSec} transition ease-in-out duration-500  lg:max-w-md`}>
                                        Hi, I am Shubham Kadam, developer of this site. I am a BScIt student from Mumbai University. and motivated college student looking to apply extensive skills in developement by myself till now but trying to find good works in which I can grab the opportunity to learn and earn simultenusly. Thank You!
                                    </p>

                                    <div className="flex items-center mt-6 -mx-2">
                                        <a className="mx-2" href="/" aria-label="Twitter">
                                            <svg className="w-5 h-5 fill-current hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                                            </svg>
                                        </a>

                                        <a className="mx-2" href="/" aria-label="Facebook">
                                            <svg className="w-5 h-5 fill-current hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                                            </svg>
                                        </a>

                                        <a className="mx-2" href="/" aria-label="Linkden">
                                            <svg className="w-5 h-5 fill-current hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                                            </svg>
                                        </a>

                                        <a className="mx-2" href="https://github.com/H-R-Wells2" aria-label="Github">
                                            <svg className="w-5 h-5  fill-current  hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-8 lg:mt-0 lg:w-1/2">
                                    <div className="flex items-center justify-center lg:justify-end">
                                        <div className="max-w-lg">
                                            <img className="object-cover object-center w-full h-64 rounded-md shadow" src={hrwells} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>




            </div>

        </div>
    )
}

export default About