import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { NavLink } from 'react-router';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Navbar = () => {
    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink to='coverage'>Coverage</NavLink></li>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>Services</NavLink></li>


    </>
    return (
        <div className="navbar bg-base-100 shadow-sm p-5  rounded-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex item-center gap-4'>
                    <a className="btn rounded-xl font-bold">Sign In</a>
                    <a className="btn btn-primary text-black rounded-xl font-bold">Sign Up </a>
                    <div className='bg-black w-10 rounded-full -ml-4 '><AiOutlineArrowUp className='text-[#caeb66] w-10 text-3xl mt-1 rotate-2' style={{ transform: "rotate(40deg)" }}/></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;