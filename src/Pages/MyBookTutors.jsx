import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
import axios from "axios";

function MyBookedTutors() {
    const { user } = useContext(AuthContext);
    const [bookedTutors, setBookedTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookedTutors = async () => {
            if (!user?.email) {
                setLoading(false); // Stop loading if user is undefined
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:5000/book-tutors?email=${user.email}`,
                    { withCredentials: true }
                );
                setBookedTutors(response.data);
            } catch (error) {
                console.error("Error fetching booked tutors:", error);
            } finally {
                setLoading(false); // End loading state
            }
        };

        fetchBookedTutors();
    }, [user.email]);

    if (loading) {
        return (
            <div className="text-center mt-10">
                <Loading />
            </div>
        );
    }

    if (!bookedTutors.length) {
        return (
            <p className="text-center mt-10 text-lg text-gray-700">
                No booked tutors found.
            </p>
        );
    }

    return (
        <div className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-white mb-8">
                My Booked Tutors
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookedTutors.map((tutor) => (
                    <div
                        key={tutor._id}
                        className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-3">
                            <h2 className="text-3xl font-bold text-gray-800">
                                {tutor.name}
                            </h2>
                            <p className="badge badge-secondary mt-2">
                                {tutor.language} tutor
                            </p>
                            <p className="text-gray-600 text-xl font-bold mt-1">
                                Price:{" "}
                                <span className="text-gray-800 font-medium">
                                    BDT {tutor.price}
                                </span>
                            </p>
                            <p className="text-gray-600 text-lg font-mono mt-1">
                                Tutor Email:{" "}
                                <span className="text-gray-800">
                                    {tutor.tutorEmail}
                                </span>
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-red-600 text-xl font-semibold">
                                    Reviews:{" "}
                                    <span className="text-gray-800 font-bold">
                                        {tutor.review}
                                    </span>
                                </span>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                                    Add Review
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                            Booked
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBookedTutors;
