import React from 'react';
import bannerimg from '../../../assets/tiny-deliveryman.png'
import bannerimg2 from '../../../assets/big-deliveryman.png'
import { AiOutlineArrowUp } from 'react-icons/ai';

const Banner1 = () => {
    return (
        <div className='flex items-center bg-[#ffffff] p-20 rounded-2xl mt-8'>
            <div>
                <img src={bannerimg} alt="" className='max-w-[220px]' />
                <h1 className='font-extrabold text-[56px] text-secondary'>We Make Sure Your<br /><span className='text-[#acc857]'>Parcel Arrives</span>On Time<br />- No Fuss.</h1>
                <p className='text-[#606060] font-normal text-[16px]'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                <div className='flex mt-8'>
                    <a className="btn btn-primary text-[20px] font-bold text-black rounded-[99px] p-6">Track Your Parcel </a>
                <div className='bg-black w-12 rounded-full -ml-1 '><AiOutlineArrowUp className='text-[#caeb66] w-10 text-3xl mt-2 ml-1 rotate-2' style={{ transform: "rotate(40deg)" }} /></div>
                <button className='btn ml-4 p-6 font-bold text-[20px] rounded-[12px]'>Be A Rider </button>
                </div>
                
            </div>
            <div>
                <img src={bannerimg2} alt="" />
            </div>


        </div>
    );
};

export default Banner1;