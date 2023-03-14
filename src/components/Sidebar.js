import React, { useContext } from "react";
import { AiFillProfile, AiOutlineTeam } from "react-icons/ai";
import { HiOutlineCalculator, HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineComputer, MdOutlineBusinessCenter, MdOutlineCalculate, MdOutlinePrivacyTip } from "react-icons/md";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import modeContext from "../context/mode/modeContext";


export default function Sidebar() {


    // getting states from context
    const context = useContext(modeContext)
    const { mode, about, line, home } = context

    // effect on navigation
    let location = useLocation();
    useEffect(() => {
    }, [location]);



    return (
        <>
            <div className={`${mode} fixed hidden sm:block transition ease-in-out duration-500 flex-col h-screen p-3 shadow w-60`}>
                <div className="flex justify-center">
                    <span className="text-xl font-bold text-center w-full">Spaces</span>
                </div>
                <div className="space-y-3">


                    <div className="flex-1">
                        <ul className="pt-2 pb-4 mb-6 space-y-2 text-md">
                            <li className="rounded-sm">
                                <Link to={'/spaces/general'}
                                    className={`${location.pathname === "/spaces/general" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiFillProfile className="mr-2 h-6 w-6" />General</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bscit'}
                                    className={`${location.pathname === "/spaces/bscit" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineComputer className="mr-2 h-6 w-6" />BSc-IT</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bms'}
                                    className={`${location.pathname === "/spaces/bms" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineBusinessCenter className="mr-2 h-6 w-6" />BMS</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/baf'}
                                    className={`${location.pathname === "/spaces/baf" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineCalculator className="mr-2 h-6 w-6" />BAF</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/spaces/bcom'}
                                    className={`${location.pathname === "/spaces/bcom" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlineCalculate className="mr-2 h-6 w-6" />B.Com</Link>
                            </li>
                        </ul>
                        <ul className={`${line} border-t pt-4 space-y-2 transition ease-in-out duration-500`}>
                            <li className="rounded-sm ">
                                <Link to={'/about'}
                                    className={`${location.pathname === "/about" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><AiOutlineTeam className="mr-2 h-6 w-6" />About</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/terms'}
                                    className={`${location.pathname === "/terms" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><HiOutlineDocumentText className="mr-2 h-6 w-6" />Terms</Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to={'/policy'}
                                    className={`${location.pathname === "/policy" ? home : about} w-44 flex items-center p-2 space-x-3 rounded-md transition ease-in-out duration-500`}><MdOutlinePrivacyTip className="mr-2 h-6 w-6" />Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}