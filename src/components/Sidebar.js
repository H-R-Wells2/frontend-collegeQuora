import React from "react";
import { AiFillProfile, AiOutlineTeam } from "react-icons/ai";
import { HiOutlineCalculator, HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineComputer, MdOutlineBusinessCenter, MdOutlineCalculate, MdOutlinePrivacyTip } from "react-icons/md";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Sidebar(props) {



    let location = useLocation();
    useEffect(() => {
    }, [location]);



    return (
        <>
            <div className={`${props.mode} hidden sm:block transition ease-in-out duration-500 flex-col h-screen p-3 shadow w-60`}>
                <div className="flex justify-center">
                    <span className="text-xl font-bold text-center w-full">Spaces</span>
                </div>
                <div className="space-y-3">


                    <div className="flex-1">
                        <ul className="pt-2 pb-4 mb-6 space-y-1 text-md">
                            <li className="rounded-sm">
                                <Link to={'/spaces/general'}><button type='button'
                                    className={`${location.pathname === "/spaces/general" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiFillProfile className="mr-2 h-6 w-6" />General</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bscit'}><button type='button'
                                    className={`${location.pathname === "/spaces/bscit" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineComputer className="mr-2 h-6 w-6" />BSc-IT</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bms'}><button type='button'
                                    className={`${location.pathname === "/spaces/bms" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineBusinessCenter className="mr-2 h-6 w-6" />BMS</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/baf'}><button type='button'
                                    className={`${location.pathname === "/spaces/baf" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineCalculator className="mr-2 h-6 w-6" />BAF</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bcom'}><button type='button'
                                    className={`${location.pathname === "/spaces/bcom" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineCalculate className="mr-2 h-6 w-6" />B.Com</button></Link>
                            </li>
                        </ul>
                        <ul className={`${props.line} border-t pt-4 transition ease-in-out duration-500`}>
                            <li className="rounded-sm ">
                                <Link to={'/about'}><button type='button'
                                    className={`${location.pathname === "/about" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiOutlineTeam className="mr-2 h-6 w-6" />About</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/terms'}><button type='button'
                                    className={`${location.pathname === "/terms" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineDocumentText className="mr-2 h-6 w-6" />Terms</button></Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/privacy'}><button type='button'
                                    className={`${location.pathname === "/privacy" ? props.home : props.about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlinePrivacyTip className="mr-2 h-6 w-6" />Privacy Policy</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}