import React from 'react';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <h1 className='font-extrabold text-3xl -ml-5'>ZapShift</h1>
        </div>
    );
};

export default Logo;