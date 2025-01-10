import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "./Loading";

function TutorDetails() {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        fetch(`https://tutor-hive-sever.vercel.app/tutors/${id}`)
            .then((response) => response.json())
            .then((data) => setTutor(data))
            .catch((error) => console.error("Error fetching tutor data:", error));
    }, [id]);

    const handleBook = async () => {
        const bookedTutor = {
            tutorId: tutor._id,
            image: tutor.Image,
            language: tutor.category,
            price: tutor.price,
            name: tutor.lecturer.userName,
            tutorEmail: tutor.email,
            email: user.email,
            review: tutor.review,
        };

        try {
            const response = await fetch("https://tutor-hive-sever.vercel.app/book-tutors", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookedTutor),
            });

            const data = await response.json();
            if (data.insertedId) {
                Swal.fire("Success", "Tutor booked successfully!", "success");
            }
        } catch (error) {
            Swal.fire("Error", "Failed to book tutor.", "error");
        }
    };

    if (!tutor) return <Loading />;

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="relative">
                    {/* Background Image */}
                    <img
                        src={tutor.Image}
                        alt={tutor.lecturer.userName}
                        className="w-full h-72 object-cover rounded-t-2xl transform hover:scale-110 transition-all duration-300"
                    />
                    {/* YouTube Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl cursor-pointer">
                        <FaYoutube className="text-red-600 hover:text-red-800 transition-all duration-300" />
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {/* Tutor's Info */}
                    <div className="flex flex-row gap-2 items-center sm:items-start">
                        <img
                            src={tutor.lecturer.photo}
                            alt={tutor.lecturer.userName}
                            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="flex flex-col sm:ml-6">
                            <h1 className="flex items-baseline lg:gap-3 text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                {tutor.lecturer.userName}
                                <span className="text-sm text-blue-500">(Verified)</span>
                            </h1>
                            <div className="flex gap-2 items-center mt-2">
                               
                                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                                    Super Tutor
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Tutor Description and Price */}
                    <div className="flex flex-col sm:flex-row justify-between lg:items-center mt-6 lg:gap-6">
                        <div className="space-y-2 sm:w-2/3">
                            <p className="text-lg text-gray-700">{tutor.description}</p>
                            <div className="flex gap-2 items-center text-xl font-semibold text-gray-800">
                                <span className="text-lg">Language:</span> {tutor.category}
                            </div>
                        </div>

                        <div className="flex flex-col lg:items-end sm:items-start sm:w-1/3 mt-4 sm:mt-0">
                            <p className="text-lg font-semibold text-gray-800">Price: BDT {tutor.price}</p>
                            <div className="flex items-center mt-2 gap-2">
                                <span className="text-yellow-500 text-xl">Rating:</span>
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
                                ))}
                                <span className="ml-2 text-sm text-gray-500">({tutor.review} reviews)</span>
                            </div>
                        </div>
                    </div>

                    {/* Booking Button */}
                    <button
                        onClick={handleBook}
                        className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Book Tutor
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TutorDetails;
