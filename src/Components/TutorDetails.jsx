import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa'; // YouTube Red Icon from react-icons

function TutorDetails() {
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${id}`)
            .then((response) => response.json())
            .then((data) => setTutor(data))
            .catch((error) => console.error('Error fetching tutor data:', error));
    }, [id]);

    if (!tutor) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Tutor Image and YouTube Icon */}
                <div className="relative">
                    <img
                        src={tutor.lecturer.photo}
                        alt={tutor.lecturer.userName}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white absolute top-6 left-1/2 transform -translate-x-1/2 shadow-lg"
                    />
                    <img
                        src={tutor.Image}
                        alt={tutor.lecturer.userName}
                        className="w-full h-64 object-cover rounded-t-xl transform hover:scale-110 transition-all duration-300"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer opacity-0 hover:opacity-100">
                        <FaYoutube className="text-red-600" />
                    </div>
                </div>
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">{tutor.lecturer.userName}</h1>
                    <p className="text-lg text-gray-700 mt-4">{tutor.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-xl font-semibold text-gray-800">Language: {tutor.language}</p>
                        <p className="text-xl font-semibold text-gray-800">Price: ${tutor.price}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-yellow-500 text-xl">Rating:</span>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="text-yellow-500 text-xl">&#9733;</span> 
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({tutor.review} reviews)</span>
                    </div>
                    <button className="btn bg-blue-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                        Book Tutor
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TutorDetails;
