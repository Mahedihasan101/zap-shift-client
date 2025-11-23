import React from 'react';
import bgimg from '../../../assets/be-a-merchant-bg.png'
import img from '../../../assets/location-merchant.png'

const FirstPriority = () => {
    return (
        <div 
            className="max-w-7xl mx-auto rounded-[32px] bg-cover bg-no-repeat bg-[#03373d] my-20 "
            style={{
                backgroundImage: `url(${bgimg})`,
                backgroundPosition: 'top',
                backgroundRepeat: "no-repeat",
                backgroundSize: "1300px auto" 
                 
                  // 👈 bg image top এ বসবে
            }}
        >
            <div className='flex items-center relative'>
                <div className='py-20 pl-20 absolute'>
                    <h1 className='font-extrabold text-[40px] text-white'>
                        Merchant and Customer Satisfaction <br /> is Our First Priority
                    </h1>
                    <p className='font-normal text-[16px] text-[#DADADA] mt-4'>
                        We offer the lowest delivery charge with the highest value along with <br />
                        100% safety of your product. Pathao courier delivers your parcels in every <br />
                        corner of Bangladesh right on time.
                    </p>
                    <div className='flex gap-4 mt-8'>
                        <button className='py-4 px-8 rounded-4xl bg-[#caeb66] text-black font-bold text-[20px]'>
                            Become a Merchant
                        </button>
                        <button className='py-4 px-8 rounded-4xl bg-[#03373d] text-[#caeb66] border font-bold text-[20px]'>
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>

                <img src={img} alt="" className='pt-20 pr-10 pb-15 ml-170'/>
            </div>
        </div>
    );
};

export default FirstPriority;
