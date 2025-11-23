import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div className=' bg-[#eaeced] pt-8'>
            <div className='max-w-[1500px] mx-auto  '>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;