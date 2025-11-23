import React from 'react';
import img from '../../assets/service.png'

const OurServices = () => {
    return (
        <div className='bg-[#03373d] rounded-4xl pt-[100px]'>
            <h1 className='font-extrabold text-[40px] text-white text-center'>Our Services</h1>
            <p className='font-medium text-[16px] text-[#DADADA] text-center mt-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            <div className='max-w-7xl mx-auto grid grid-cols-3 gap-6 pb-24 mt-8'>
                <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                 <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                 <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                 <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                 <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                 <div className='bg-white flex flex-col items-center rounded-3xl py-6 px-8 hover:bg-[#caeb66]'>
                    <div className=' rounded-full p-6 ' style={{
                        background: "linear-gradient(to bottom, #f0effc, #ffffff)"
                    }}>
                        <img src={img} alt="" />
                    </div>
                    <h1 className='font-bold text-2xl text-secondary my-4'>Express  & Standard Delivery</h1>
                    <p className='text-center font-medium text-[16px]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;