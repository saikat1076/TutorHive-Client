import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { motion } from "framer-motion";  // Import framer-motion for animations
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import AOS CSS for animations
import { FaUsers, FaLanguage, FaStar, FaRegUser } from "react-icons/fa"; // Import icons

function TutorsInfo() {
  const [data, setData] = useState({
    totalDocuments: 0,
    distinctCategoryCount: 0,
    fiveStarTutors: 0,  // 5-star tutors count
    totalUsers: 0,      // total users count
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const [totalTutors, setTotalTutors] = useState(0);
  const [languagesCount, setLanguagesCount] = useState(0);
  const [fiveStarTutors, setFiveStarTutors] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({ duration: 1000 });

    // Fetching data from the API
    axios
      .get("https://tutor-hive-sever.vercel.app/tutors", { params: { count: true } })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      // Animate numbers to count from 0 to the fetched data
      const countUp = (target, setter) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count < target) {
            count += Math.ceil(target / 50);  // Increment by a fraction of the target
            setter(count);
          } else {
            clearInterval(interval);
            setter(target); // Ensure it ends at the target value
          }
        }, 30); // Update every 30ms
      };

      countUp(data.totalDocuments, setTotalTutors);
      countUp(data.distinctCategoryCount, setLanguagesCount);
      countUp(data.fiveStarTutors, setFiveStarTutors);
      countUp(data.totalUsers, setTotalUsers);
    }
  }, [loading, data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6 bg-[#f7f7f7c2]">
      {/* Section Heading */}
      <h2 className="text-center text-4xl pb-2 font-bold text-gray-800 my-5">
        Tutors Information Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Tutors Card */}
        <motion.div
          data-aos="fade-up"  // AOS fade-up effect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 bg-blue-300 text-black rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center mb-4">
            <FaUsers size={40} className="mr-2 text-white" />
            <h3 className="text-xl font-semibold">Total Tutors</h3>
          </div>
          <p className="text-3xl font-bold text-center">{totalTutors}+ </p>
        </motion.div>

        {/* Languages Card */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 bg-blue-300 text-black rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center mb-4">
            <FaLanguage size={40} className="mr-2 text-white" />
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          <p className="text-3xl font-bold text-center">{languagesCount}+ </p>
        </motion.div>

        {/* 5-Star Tutor Reviews Card */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 bg-blue-300 text-black rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center mb-4">
            <FaStar size={40} className="mr-2 text-white" />
            <h3 className="text-xl font-medium">5 star tutor reviews</h3>
          </div>
          <p className="text-3xl font-bold text-center">19+ </p>
        </motion.div>

        {/* Total Users Card */}
        <motion.div
          data-aos="fade-up"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 bg-blue-300 text-black rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center mb-4">
            <FaRegUser size={40} className="mr-2 text-white" />
            <h3 className="text-xl font-semibold">Total Users</h3>
          </div>
          <p className="text-3xl font-bold text-center">20+ </p>
        </motion.div>
      </div>
    </div>
  );
}

export default TutorsInfo;
