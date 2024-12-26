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
               Swal.fire("Success", "Tutor booking successfully!", "success");
            }
        }
        catch (error) {
             Swal.fire("Error", "Failed to booking tutor.", "error");;
        }
    };

    if (!tutor) return <p><Loading></Loading></p>;

    return (
        <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="relative">
                    
                    <img
                        src={tutor.Image}
                        alt={tutor.lecturer.userName}
                        className="w-full h-64 object-cover rounded-t-xl transform hover:scale-110 transition-all duration-300"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer">
                        <FaYoutube className="text-red-600" />
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex flex-row gap-2 p-0 m-0">
                    <img
                        src={tutor.lecturer.photo}
                        alt={tutor.lecturer.userName}
                        className="w-12 h-12 rounded-full object-cover border-white shadow-lg"
                    />
                    <h1 className="text-4xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300">{tutor.lecturer.userName}</h1>
                    </div>

                    
                    <p className="text-lg text-gray-700 mt-4">{tutor.description}</p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-xl font-semibold text-gray-800">Language: {tutor.category}</p>
                        <p className="text-xl font-semibold text-gray-800">Price: BDT {tutor.price}</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <span className="text-yellow-500 text-xl">Rating:</span>
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="text-yellow-500 text-xl">&#9733;</span>
                        ))}
                        <span className="ml-2 text-sm text-gray-500">({tutor.review} reviews)</span>
                    </div>
                    <button
                        onClick={handleBook}
                        className="btn bg-blue-600 text-white w-full py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        Book Tutor
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TutorDetails;
