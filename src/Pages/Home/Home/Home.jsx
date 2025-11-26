import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../../../Component/HowItWorks/HowItWorks';
import OurServices from '../../../Component/OurServices/OurServices';
import Brands from '../Brands/Brands';
import ExtraBanner from '../ExtraBanner/ExtraBanner';
import FirstPriority from '../FristPriority/FirstPriority';
import Reviews from '../Reviews/Reviews';
import AskedQuestion from '../AskedQuestion/AskedQuestion';


const reviewsPromise = fetch('/public/reviews.json')
.then(res => res.json())


const Home = () => {
    return (
        <div>
               <Banner></Banner>
               <HowItWorks></HowItWorks>
               <OurServices></OurServices>
               <Brands></Brands>
               <ExtraBanner></ExtraBanner>
               <FirstPriority></FirstPriority>
               <Reviews reviewsPromise={reviewsPromise}></Reviews>
               <AskedQuestion></AskedQuestion>
               
        </div>
    );
};

export default Home;