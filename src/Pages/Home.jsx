import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryCard from '../Components/CategoryCard';
import Banner from '../Components/Banner';
import StartsSection from '../Components/StartsSection';
import WhyChooseUs from '../Components/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StartsSection></StartsSection>
          <div>
            <div className='py-7'>
                <h1 className='text-4xl py-3 font-extrabold text-center'>Explore Courses By Category</h1>
                <p className='text-lg font-medium text-center'>Browse top class courses by browsing our category which will be more easy for you!</p>
            </div>
            <div className='p-5'><CategoryCard></CategoryCard></div>
          </div>
          <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;