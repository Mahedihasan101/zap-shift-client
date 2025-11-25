import React from 'react';

const ReviewsCard = ({review}) => {
    
    return (
       
      <div className="bg-base-100 shadow-xl p-6 max-w-md border border-gray-100 relative my-4 rounded-2xl ">
        
        {/* Quote Icon */}
        <div className="text-5xl text-teal-200">“</div>

        {/* Review Text */}
        <p className="text-gray-600 text-sm mt-1">
      {review.review}
        </p>

        {/* Divider */}
       

        {/* Profile Info */}
        <div className="flex items-center gap-4 border-t-2 border-dashed pt-3 mt-2">
          <div className="avatar ">
            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden ">
              <img
                src={review.user_photoURL}
              />
            </div>
          </div>

          <div className=''>
            <h2 className=" font-bold text-gray-800">{review.userName}</h2>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
   
    );
};

export default ReviewsCard;