import React, { useContext } from 'react';
import modeContext from '../context/mode/modeContext';
import { IoCloseOutline } from "react-icons/io5";


const Alert = ({ type, message }) => {
    
    const { setShowAlert } = useContext(modeContext);

    
    const tailwindClasses = {
        success: 'bg-green-100 border-green-500 text-green-700',
        warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
        error: 'bg-red-100 border-red-500 text-red-700',
    };


    const classes = `px-4 py-3 rounded border ${tailwindClasses[type]}`;

    return (
        <div className={`${classes} mt-20 sm:mr-6 absolute w-full sm:w-1/2 right-0 top-0 rounded-xl z-10`}>
            <div className='flex justify-between'>
            <p className="font-bold">{type}</p>
            <div className='flex justify-end'>
                <IoCloseOutline onClick={()=>{setShowAlert(false)}} className='cursor-pointer mb-1 h-6 w-6 mx-2' />
            </div>
            </div>
            
            <p>{message}</p>
        </div>
    );
};

export default Alert;