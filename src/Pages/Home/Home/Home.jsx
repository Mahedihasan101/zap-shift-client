import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Component/HowItWorks/HowItWorks';
import OurServices from '../../../Component/OurServices/OurServices';
import Brands from '../Brands/Brands';


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <HowItWorks></HowItWorks>
               <OurServices></OurServices>
               <Brands></Brands>
               
        </div>
    );
};

export default Home;