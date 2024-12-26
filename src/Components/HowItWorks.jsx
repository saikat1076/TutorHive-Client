import { FaSearch, FaUserCheck, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HowItWorks() {
  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Get started with our simple 3-step process and find the perfect tutor for your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaSearch className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Search for Tutors</h3>
            <p className="text-gray-600">
              Browse through a wide range of qualified tutors by subject, availability, or ratings.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaUserCheck className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Book a Session</h3>
            <p className="text-gray-600">
              Choose a tutor and schedule a session at your preferred time in just a few clicks.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaChalkboardTeacher className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Start Learning</h3>
            <p className="text-gray-600">
              Connect with your tutor online and enjoy personalized, high-quality learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
