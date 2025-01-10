import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryCard from '../Components/CategoryCard';
import Banner from '../Components/Banner';
import StartsSection from '../Components/StartsSection';
import WhyChooseUs from '../Components/WhyChooseUs';
import ReviewCarousel from '../Components/ReviewCarousel';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StartsSection></StartsSection>
          <div>
            <div className='my-5'>
                <h1 className='text-4xl pb-2 font-bold text-center'>Explore Courses By Category</h1>
                <p className='text-lg font-medium text-center'>Browse top class courses by browsing our category which will be more easy for you!</p>
            </div>
            <div className='p-3'><CategoryCard></CategoryCard></div>
          </div>
          <WhyChooseUs></WhyChooseUs>
          <ReviewCarousel></ReviewCarousel>
        </div>
    );
};

export default Home;