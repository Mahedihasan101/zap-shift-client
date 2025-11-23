import React from 'react';
import img from '../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className='font-extrabold text-[32px] text-secondary'>How It Works</h1>
            <div className='grid grid-cols-4 gap-6 mt-8'>
                <div className='bg-white p-8 rounded-3xl'>
                    <img src={img} alt="" />
                    <h1 className='font-bold text-[20px] text-secondary mt-6'>Booking Pick & Drop</h1>
                    <p className='font-medium text-[16px] text-[#606060] mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div >
                <div className='bg-white p-8 rounded-3xl'>
                    <img src={img} alt="" />
                    <h1  className='font-bold text-[20px] text-secondary mt-6'>Cash On Delivery</h1>
                    <p className='font-medium text-[16px] text-[#606060] mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className='bg-white p-8 rounded-3xl'>
                    <img src={img} alt="" />
                    <h1  className='font-bold text-[20px] text-secondary mt-6'>Delivery Hub</h1>
                    <p className='font-medium text-[16px] text-[#606060] mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
               <div className='bg-white p-8 rounded-3xl'>
                    <img src={img} alt="" />
                    <h1  className='font-bold text-[20px] text-secondary mt-6'>Booking SME & Corporate</h1>
                    <p className='font-medium text-[16px] text-[#606060] mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;