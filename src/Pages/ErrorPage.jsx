import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
      <div className="text-center p-8 bg-white shadow-2xl rounded-lg opacity-90 w-3/4 md:w-1/2 lg:w-1/3">
        {/* Image with DaisyUI Card component */}
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Error Illustration"
            className="rounded-full mx-auto shadow-lg"
          />
        </div>

        {/* Using motion from framer-motion to animate the text */}
        <motion.h2
          className="text-6xl font-bold text-red-500 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Oops!!!!
        </motion.h2>

        <motion.h2
          className="text-4xl font-extrabold text-blue-500 mt-4 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          404 Page Not Found
        </motion.h2>

        <p className="mt-6 text-lg text-gray-600">It seems you've hit a dead-end. Please go back or try again.</p>

        {/* DaisyUI button for navigation */}
        <div className="mt-6">
          <Link to={'/'} className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
