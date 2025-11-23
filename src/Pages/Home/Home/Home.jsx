import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Component/HowItWorks/HowItWorks';
import OurServices from '../../../Component/OurServices/OurServices';
import Brands from '../Brands/Brands';
import ExtraBanner from '../ExtraBanner/ExtraBanner';
import FirstPriority from '../FristPriority/FirstPriority';


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <HowItWorks></HowItWorks>
               <OurServices></OurServices>
               <Brands></Brands>
               <ExtraBanner></ExtraBanner>
               <FirstPriority></FirstPriority>
               
        </div>
    );
};

export default Home;