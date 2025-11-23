import React from 'react';
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'

const ExtraBanner = () => {
    return (
        <div className=' max-w-7xl mx-auto border-secondary border-y-2 border-dashed '>

        <div className='flex px-8 mt-20  bg-white rounded-3xl'>
            <img src={img1 } alt="" className='max-w-[200px] max-h-[200px] p-8 border-secondary border-r-2 my-7 border-dashed ' />
            <div className=' pl-12 py-20'>
            <h1 className='font-extrabold text-2xl text-secondary'>Live Parcel Tracking</h1>
            <p className='font-medium text-[16px] text-[#606060] mt-4'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
            </div>
        </div>
         <div className='flex px-8 mt-6 bg-white rounded-3xl'>
            <img src={img2 } alt="" className='max-w-[200px] max-h-[200px] p-8 border-secondary border-r-2 my-7 border-dashed ' />
            <div className=' pl-12 py-20'>
            <h1 className='font-extrabold text-2xl text-secondary'>100% Safe Delivery</h1>
            <p className='font-medium text-[16px] text-[#606060] mt-4'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
            </div>
        </div>
         <div className='flex px-8 mt-6 bg-white rounded-3xl mb-20'>
            <img src={img2 } alt="" className='max-w-[200px] max-h-[200px] p-8 border-secondary border-r-2 my-7 border-dashed ' />
            <div className=' pl-12 py-20'>
            <h1 className='font-extrabold text-2xl text-secondary'>24/7 Call Center Support</h1>
            <p className='font-medium text-[16px] text-[#606060] mt-4'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
            </div>
        </div>
       
        </div>
    );
};

export default ExtraBanner;