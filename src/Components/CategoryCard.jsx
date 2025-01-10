import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CategoryCard = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://tutor-hive-sever.vercel.app/category')
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleCategory = (item) => {
    navigate(`/find-tutors/${item.title}`);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
        {category.map((item) => (
          <motion.div
            key={item._id}
            className="relative flex flex-col justify-between items-center p-3 shadow-md rounded-lg bg-white overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCategory(item)}
          >
            {/* Image Section with Even Smaller Icon */}
            {item.icon && (
              <motion.img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-cover rounded-full transition-transform group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
            )}

            <div className="text-center mt-2">
              {/* Title with Even Smaller Font Size */}
              <h2 className="text-lg font-medium text-gray-800 transition-colors group-hover:text-pink-500">
                {item.title}
              </h2>
            </div>

            {/* Arrow Icon at the center-right of the card */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:scale-110">
              <FaArrowRight size={18} />
            </div>

            {/* Background Gradient (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-100 via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
