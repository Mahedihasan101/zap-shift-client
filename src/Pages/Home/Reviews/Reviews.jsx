import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import img from '../../../assets/customer-top.png'
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewsCard from './ReviewsCard';

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews)
  return (
    <div className='mt-24'>
      <div className='text-center '>
        <img src={img} alt="" className='mx-auto' />
        <h1 className='font-extrabold text-[40px] text-secondary mt-8'>What our customers are sayings</h1>
        <p className='font-medium text-[20px] text-[#606060] my-6'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
      </div>
      <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,

            scale: 0.75,
          }}
          loop={true}
         
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
          {
            reviews.map(review => <SwiperSlide key={review.id}>
              <ReviewsCard review={review}></ReviewsCard>
            </SwiperSlide>)
          }

        </Swiper>
      </>
    </div>
  );
};

export default Reviews;