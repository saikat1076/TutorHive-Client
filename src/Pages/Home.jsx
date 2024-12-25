import React from 'react';
import Navbar from '../Components/Navbar';
import CategoryCard from '../Components/CategoryCard';
import Banner from '../Components/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <CategoryCard></CategoryCard>
        </div>
    );
};

export default Home;