import React from 'react';
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';
import Img from '../assets/authImage.png'

const AuthLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto h-screen flex flex-col'>
            <Logo />

            {/* Center Section */}
            <div className='flex flex-1 items-center justify-center gap-10'>
                
                {/* Form Area */}
                <div className='flex-1 flex justify-center'>
                    <Outlet />
                </div>

                {/* Image Area */}
                <div className='flex-1 flex justify-center bg-[#fafdf0]'>
                    <img src={Img} alt="" className='max-w-full ' />
                </div>

            </div>
        </div>
    );
};

export default AuthLayOut;
