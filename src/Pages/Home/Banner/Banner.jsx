import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
       
            <Carousel 
            autoPlay={true}
            autoplaySpeed={1000}
            infinite={true}
            infiniteLoop={true}>
                <div>
                    <Banner1></Banner1>
                </div>
                 <div>
                   <Banner2></Banner2>
                </div>
                 <div>
                    <Banner3></Banner3>
                </div>
                
                
                
            </Carousel>
 
            
            

        
    );
};

export default Banner;