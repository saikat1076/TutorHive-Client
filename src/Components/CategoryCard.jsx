import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import * as Icons from 'react-icons/fa'; // Import all icons
import { useNavigate } from 'react-router-dom';

const CategoryCard = () => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://tutor-hive-sever.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategory(data));
    }, []);
    const handleCategory = (item) => {
        navigate(`/find-tutors/${item.title}`)
    }
    
    return (
        <div>
            <div className='grid grid-cols-1 gap-3 lg:px-16 lg:grid-cols-3'>
                {category.map(item => {
                    const IconComponent = Icons[item.icon];
                    
                    return (
                        <div
                            onClick={() => handleCategory(item)}
                            key={item._id}
                            className="flex justify-between w-80 items-center p-4 shadow-lg hover:shadow-xl transition cursor-pointer rounded-md bg-white"
                        >
                            <div className="flex items-center space-x-4">
                                {IconComponent ? <IconComponent size={32} className="text-pink-400" /> : null}
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                            </div>
                            <FaArrowRight size={20} className="text-gray-400" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryCard;
