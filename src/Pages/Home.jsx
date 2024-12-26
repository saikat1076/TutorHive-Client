import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryCard from '../Components/CategoryCard';
import Banner from '../Components/Banner';
import StartsSection from '../Components/StartsSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StartsSection></StartsSection>
          <CategoryCard></CategoryCard>
        </div>
    );
};

export default Home;