import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaGripLines } from 'react-icons/fa';
import { MdEmail, MdPerson } from 'react-icons/md';
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateTutorial = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [tutor, setTutor] = useState({});

    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const { data } = await axios.get(`https://tutor-hive-sever.vercel.app/tutors/${id}`);
                setTutor(data);
            } catch (error) {
                console.error("Error fetching tutor:", error);
            }
        };
        fetchTutor();
    }, [id]);

    // Handle input changes to update the tutor state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTutor((prevTutor) => ({
            ...prevTutor,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedTutor = {
            name: form.name.value,
            email: form.email.value,
            Image: form.Image.value,
            category: form.category.value,
            price: form.price.value,
            description: form.description.value,
        };

        try {
            await axios.put(`https://tutor-hive-sever.vercel.app/tutors/${id}`, updatedTutor);
            Swal.fire("Success", "Tutor updated successfully!", "success");
        } catch (error) {
            Swal.fire("Error", "Failed to update tutor.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 py-8 px-4">
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Tutor</h2>
                
                {/* User Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Email</label>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-blue-500" />
                            <input
                                type="text"
                                name="email"
                                value={user?.email || "Name@gmail.com"}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">User Name</label>
                        <div className="flex items-center gap-2">
                            <MdPerson className="text-purple-500" />
                            <input
                                type="text"
                                name="userName"
                                value={user?.displayName || "Name"}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Tutor Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image</label>
                        <input
                            type="text"
                            name="Image"
                            value={tutor.Image || ""}
                            placeholder="Image URL"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={tutor.category || ""}
                            placeholder="Enter category"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={tutor.description || ""}
                        placeholder="Enter description"
                        className="textarea textarea-bordered w-full"
                        onChange={handleChange}
                    />
                </div>

                {/* Price and Review Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Price */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={tutor.price || ""}
                            placeholder="Enter price"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Review */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Review</label>
                        <div className="flex items-center gap-2">
                            <FaGripLines className="text-gray-600" />
                            <input
                                type="text"
                                name="review"
                                value={tutor.review || ""}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button className="btn btn-primary w-full py-3 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTutorial;
