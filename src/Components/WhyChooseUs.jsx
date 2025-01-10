import { FaChalkboardTeacher, FaRegCalendarCheck, FaStar, FaShieldAlt, FaUsers, FaLaptop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function WhyChooseUs() {
  useEffect(() => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-600 p-6 text-white">
      <div className="max-w-7xl mx-auto my-5">
        <motion.h2
          className="text-5xl sm:text-3xl font-bold text-center pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <p className="text-center text-lg sm:text-xl pb-5">
          We provide a platform that connects students with expert tutors for personalized learning experiences. <br /> Here’s why we stand out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
          >
            <FaChalkboardTeacher className="text-6xl mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p>Learn from highly qualified and experienced tutors in a variety of subjects.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <FaRegCalendarCheck className="text-6xl mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p>Book lessons at times that fit your schedule, anytime, anywhere.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaLaptop className="text-6xl mx-auto text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Platform</h3>
            <p>Connect with tutors seamlessly through our user-friendly online platform.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaShieldAlt className="text-6xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p>All transactions are safe and protected, ensuring peace of mind for parents and students.</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaUsers className="text-6xl mx-auto text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>Join a community of learners and tutors dedicated to education.</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-white text-gray-800 rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FaStar className="text-6xl mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
            <p>Thousands of students have achieved their goals with our platform.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
