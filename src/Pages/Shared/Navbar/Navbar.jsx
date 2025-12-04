import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { AiOutlineArrowUp } from 'react-icons/ai';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const {user,logOut}=useAuth();

    const handleLogOut =()=>{
        logOut()
        .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                    {
                        user ? <a onClick={handleLogOut} className="btn rounded-xl font-bold">LogOut</a>:<a className="btn rounded-xl font-bold"> <Link to='login'>Sign In</Link></a>
                        
                    }
                    <a className="btn btn-primary text-black rounded-xl font-bold">Be a rider</a>
                    <div className='bg-black w-10 rounded-full -ml-4 '><AiOutlineArrowUp className='text-[#caeb66] w-10 text-3xl mt-1 rotate-2' style={{ transform: "rotate(40deg)" }}/></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;