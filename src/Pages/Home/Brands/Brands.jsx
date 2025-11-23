import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import amazon2 from '../../../assets/brands//amazon_vector.png'
import amazon3 from '../../../assets/brands/casio.png'
import amazon4 from '../../../assets/brands/moonstar.png'
import amazon5 from '../../../assets/brands/randstad.png'
import amazon6 from '../../../assets/brands/star.png'
import amazon7 from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';
 const brands = [amazon,amazon2,amazon3,amazon4,amazon5,amazon6,amazon7]

const Brands = () => {
    return (
        
       <div className='mb-24'>
        <h1 className='font-extrabold text-3xl text-secondary text-center mt-24 mb-10'>We've helped thousands of sales teams</h1>
         <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay:1000,
                disableOnInteraction:false,
            }}>
            {
                brands.map((brand,index)=><SwiperSlide key={index}><img src={brand} alt="" /></SwiperSlide>)
            }
        </Swiper>
       </div>
    );
};

export default Brands;